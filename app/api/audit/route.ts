import { NextResponse } from "next/server";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, businessName, postcode, email, phone, website, notes } = body;

    if (!name || !businessName || !postcode || !email || !website) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL || "damian@siba.digital";

    if (!apiKey) {
      console.error("RESEND_API_KEY not set");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const safeWebsite = escapeHtml(String(website));
    const html = `
      <h2>New SIBA Audit Request</h2>
      <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;">
        <tr><td><strong>Name</strong></td><td>${escapeHtml(String(name))}</td></tr>
        <tr><td><strong>Business</strong></td><td>${escapeHtml(String(businessName))}</td></tr>
        <tr><td><strong>Postcode</strong></td><td>${escapeHtml(String(postcode))}</td></tr>
        <tr><td><strong>Email</strong></td><td>${escapeHtml(String(email))}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${phone ? escapeHtml(String(phone)) : "Not provided"}</td></tr>
        <tr><td><strong>Website</strong></td><td><a href="${safeWebsite}">${safeWebsite}</a></td></tr>
        <tr><td><strong>Notes</strong></td><td>${notes ? escapeHtml(String(notes)) : "None"}</td></tr>
      </table>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "SIBA Digital <damian@siba.digital>",
        to: toEmail,
        subject: `New Audit Request: ${businessName} (${postcode})`,
        html,
        reply_to: email,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Resend error:", text);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Audit route error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
