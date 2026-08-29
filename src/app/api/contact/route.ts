import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Lazy-initialised singleton — avoids recreating on every request
let resendClient: Resend | null = null;
function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  if (!resendClient) {
    resendClient = new Resend(apiKey);
  }
  return resendClient;
}

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    let body: ContactPayload;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON payload." },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = body;

    // Validate name
    if (typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Name is required." },
        { status: 400 }
      );
    }
    const trimmedName = name.trim();
    if (trimmedName.length > 100) {
      return NextResponse.json(
        { success: false, error: "Name must be 100 characters or fewer." },
        { status: 400 }
      );
    }

    // Validate email
    if (typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { success: false, error: "Email is required." },
        { status: 400 }
      );
    }
    const trimmedEmail = email.trim();
    if (trimmedEmail.length > 255 || !EMAIL_REGEX.test(trimmedEmail)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Validate message
    if (typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { success: false, error: "Message is required." },
        { status: 400 }
      );
    }
    const trimmedMessage = message.trim();
    if (trimmedMessage.length > 5000) {
      return NextResponse.json(
        { success: false, error: "Message must be 5,000 characters or fewer." },
        { status: 400 }
      );
    }

    // Optional subject
    const trimmedSubject =
      typeof subject === "string" ? subject.trim().slice(0, 200) : "";

    // Verify API Key existence
    const resend = getResendClient();
    if (!resend) {
      console.error("[Contact API] Error: RESEND_API_KEY is not configured.");
      return NextResponse.json(
        {
          success: false,
          error:
            "Email service is not configured yet. Please reach out directly via email.",
        },
        { status: 500 }
      );
    }

    const fromAddress =
      process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";
    const toAddress =
      process.env.CONTACT_EMAIL || "ravinakrani10@gmail.com";

    const emailSubject = trimmedSubject
      ? `[Portfolio Contact] ${trimmedSubject}`
      : `[Portfolio Contact] New message from ${trimmedName}`;

    const plainTextContent = `New Contact Form Submission:
----------------------------------------
Name: ${trimmedName}
Email: ${trimmedEmail}
${trimmedSubject ? `Subject: ${trimmedSubject}\n` : ""}
Message:
${trimmedMessage}
----------------------------------------
Sent via portfolio website.`;

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(emailSubject)}</title>
</head>
<body style="margin: 0; padding: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0d1117; color: #e6edf3;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background: #161b22; border: 1px solid #30363d; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 24px rgba(0,0,0,0.4);">
    <tr>
      <td style="padding: 24px 28px; background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%); color: #ffffff;">
        <h1 style="margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.02em;">New Portfolio Message</h1>
        <p style="margin: 4px 0 0 0; font-size: 13px; opacity: 0.9;">Submitted via portfolio contact form</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 28px;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 20px;">
          <tr>
            <td style="padding: 8px 0; font-size: 12px; font-family: monospace; text-transform: uppercase; color: #8b949e; width: 80px; font-weight: 600;">Sender:</td>
            <td style="padding: 8px 0; font-size: 15px; color: #f0f6fc; font-weight: 600;">${escapeHtml(trimmedName)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-size: 12px; font-family: monospace; text-transform: uppercase; color: #8b949e; font-weight: 600;">Email:</td>
            <td style="padding: 8px 0; font-size: 15px;"><a href="mailto:${escapeHtml(trimmedEmail)}" style="color: #818cf8; text-decoration: none; font-weight: 500;">${escapeHtml(trimmedEmail)}</a></td>
          </tr>
          ${trimmedSubject
        ? `<tr>
            <td style="padding: 8px 0; font-size: 12px; font-family: monospace; text-transform: uppercase; color: #8b949e; font-weight: 600;">Subject:</td>
            <td style="padding: 8px 0; font-size: 15px; color: #f0f6fc;">${escapeHtml(trimmedSubject)}</td>
          </tr>`
        : ""
      }
        </table>

        <div style="margin-top: 16px; padding: 20px; background-color: #0d1117; border: 1px solid #30363d; border-radius: 8px;">
          <p style="margin: 0 0 8px 0; font-size: 12px; font-family: monospace; text-transform: uppercase; color: #8b949e; font-weight: 600;">Message:</p>
          <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #e6edf3; white-space: pre-wrap;">${escapeHtml(trimmedMessage)}</p>
        </div>

        <div style="margin-top: 24px; text-align: center;">
          <a href="mailto:${escapeHtml(trimmedEmail)}?subject=${encodeURIComponent(`Re: ${trimmedSubject || "Your message on Ravi Nakrani's Portfolio"}`)}" style="display: inline-block; padding: 10px 20px; background-color: #4f46e5; color: #ffffff; text-decoration: none; border-radius: 6px; font-size: 13px; font-weight: 600;">Reply to ${escapeHtml(trimmedName)}</a>
        </div>
      </td>
    </tr>
    <tr>
      <td style="padding: 16px 28px; background-color: #0d1117; border-top: 1px solid #21262d; text-align: center; font-size: 11px; color: #8b949e;">
        Ravi Nakrani Portfolio • Sent via Resend
      </td>
    </tr>
  </table>
</body>
</html>
`;

    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
      replyTo: trimmedEmail,
      subject: emailSubject,
      text: plainTextContent,
      html: htmlContent,
    });

    if (error) {
      console.error("[Contact API] Resend sending failed:", error);
      return NextResponse.json(
        { success: false, error: "Failed to send message. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("[Contact API] Unexpected error:", err);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}

