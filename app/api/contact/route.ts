import { NextResponse } from "next/server";

const CATEGORIES = [
  "join-siba",
  "support-siba",
  "support-anonymous",
  "provide-information",
  "general",
] as const;

type Category = (typeof CATEGORIES)[number];

function buildHtml(category: Category, data: Record<string, string>): string {
  const categoryLabels: Record<Category, string> = {
    "join-siba": "Join SIBA",
    "support-siba": "Support SIBA",
    "support-anonymous": "Support SIBA (Anonymous)",
    "provide-information": "Provide Information / Tip",
    general: "General Contact",
  };

  const rows = Object.entries(data)
    .filter(([, v]) => v && v.trim())
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px 6px 0;font-weight:600;color:#475569;white-space:nowrap;">${k}</td><td style="padding:6px 0 6px 12px;color:#0f172a;">${v.replace(/\n/g, "<br>")}</td></tr>`
    )
    .join("");

  return `
    <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;">
      <div style="background:#0f172a;padding:24px 28px;border-radius:8px 8px 0 0;">
        <p style="margin:0;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#f97316;">SIBA Contact Form</p>
        <h2 style="margin:6px 0 0;font-size:20px;color:#ffffff;">${categoryLabels[category]}</h2>
      </div>
      <div style="background:#ffffff;padding:24px 28px;border-radius:0 0 8px 8px;border:1px solid #e2e8f0;border-top:none;">
        <table cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">
          ${rows}
        </table>
        <p style="margin:20px 0 0;font-size:11px;color:#94a3b8;border-top:1px solid #e2e8f0;padding-top:16px;">
          Submitted via siba.digital/contact — ${new Date().toLocaleString("en-GB", { timeZone: "Europe/London" })}
        </p>
      </div>
    </div>
  `;
}

function buildSubject(category: Category, data: Record<string, string>): string {
  switch (category) {
    case "join-siba":
      return `SIBA: Join Request — ${data["Name"] || "Unknown"}${data["Business"] ? ` (${data["Business"]})` : ""}`;
    case "support-siba":
      return `SIBA: Support Offer — ${data["Name"] || "Unknown"}`;
    case "support-anonymous":
      return `SIBA: Anonymous Support`;
    case "provide-information":
      return `SIBA: Information Tip [CONFIDENTIAL]`;
    case "general":
      return `SIBA: General Enquiry — ${data["Name"] || "Unknown"}`;
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { category, ...fields } = body as { category: Category; [key: string]: string };

    if (!CATEGORIES.includes(category)) {
      return NextResponse.json({ error: "Invalid category" }, { status: 400 });
    }

    if (!fields.message?.trim()) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL || "damian@siba.digital";

    if (!apiKey) {
      console.error("RESEND_API_KEY not set");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const labelMap: Record<string, string> = {
      name: "Name",
      businessName: "Business",
      postcode: "Postcode",
      email: "Email",
      phone: "Phone",
      message: "Message",
    };

    const labelledData: Record<string, string> = {};
    for (const [k, v] of Object.entries(fields)) {
      const label = labelMap[k] ?? k;
      if (v && String(v).trim()) labelledData[label] = String(v);
    }

    const html = buildHtml(category, labelledData);
    const subject = buildSubject(category, labelledData);

    const replyTo = fields.email?.trim() || undefined;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "SIBA Digital <damian@siba.digital>",
        to: toEmail,
        subject,
        html,
        ...(replyTo ? { reply_to: replyTo } : {}),
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Resend error:", text);
      return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
