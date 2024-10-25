import { Resend } from "resend";
import { getEmailSignature } from "@/utils/emailSignature";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      message,
      file,
      operatingSystem,
      softwareVersions,
      website,
      honeypot,
    } = body;

    // Check honeypot (hidden field) to detect bot submissions
    if (honeypot) {
      return new Response("Bot submission detected", { status: 400 });
    }

    // Get the email signature
    const { htmlSignature, textSignature } = getEmailSignature();

    // Compose plain text messages
    const clientTextMessage = `
      You have received a new quote request from ${name} (${email}).
      Phone: ${phone || "Not provided"}.
      Operating System: ${operatingSystem || "Not provided"}.
      Software Versions: ${softwareVersions || "Not provided"}.
      Website: ${website || "Not provided"}.
      Message: ${message}
      
      ${textSignature}
    `;

    const customerTextMessage = `
      Hi ${name},

      Thank you for reaching out. We've received your quote request:

      Operating System: ${operatingSystem || "Not provided"}.
      Software Versions: ${softwareVersions || "Not provided"}.
      Website: ${website || "Not provided"}.
      Message: ${message}

      We'll get back to you soon!
      
      ${textSignature}
    `;

    // Compose HTML messages
    const clientHtmlMessage = `
      <p>You have received a new quote request from <strong>${name}</strong> (${email}).</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Operating System:</strong> ${
        operatingSystem || "Not provided"
      }</p>
      <p><strong>Software Versions:</strong> ${
        softwareVersions || "Not provided"
      }</p>
      <p><strong>Website:</strong> ${website || "Not provided"}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      ${htmlSignature}
    `;

    const customerHtmlMessage = `
      <p>Hi ${name},</p>
      <p>Thank you for reaching out. We've received your quote request:</p>
      <p><strong>Operating System:</strong> ${
        operatingSystem || "Not provided"
      }</p>
      <p><strong>Software Versions:</strong> ${
        softwareVersions || "Not provided"
      }</p>
      <p><strong>Website:</strong> ${website || "Not provided"}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <p>We'll get back to you soon!</p>
      ${htmlSignature}
    `;

    const attachments = file
      ? [
          {
            content: file, // Expecting `file` to be a Base64 string
            filename: "uploaded-file.pdf", // Use appropriate filename or get it from the front end
          },
        ]
      : [];

    // Send email to the client (plain text + HTML)
    await resend.emails.send({
      from: email,
      to: "consult@officeexperts.com.au",
      subject: "New Quote Request Submission",
      text: clientTextMessage,
      html: clientHtmlMessage,
      attachments,
    });

    // Send confirmation email to the customer (plain text + HTML)
    await resend.emails.send({
      from: "consult@officeexperts.com.au",
      to: email,
      subject: "Thank you for your quote request!",
      text: customerTextMessage,
      html: customerHtmlMessage,
    });

    return new Response("Email sent successfully", { status: 200 });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return new Response("Error sending email", { status: 500 });
  }
}
