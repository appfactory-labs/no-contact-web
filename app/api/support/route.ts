import { NextResponse } from "next/server";

const SUPPORT_RECIPIENT = "buildappfactory@gmail.com";

type SupportPayload = {
  name?: string;
  email?: string;
  platform?: string;
  subject?: string;
  message?: string;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
  const payload = (await request.json()) as SupportPayload;
  const requiredFields = [
    payload.name,
    payload.email,
    payload.platform,
    payload.subject,
    payload.message,
  ];

  if (!requiredFields.every(isNonEmptyString)) {
    return NextResponse.json(
      { error: "Missing required support fields." },
      { status: 400 },
    );
  }

  // TODO: Wire Resend, SendGrid, Netlify Forms, or another server-side email
  // provider here. Keep SUPPORT_RECIPIENT server-side only and never import this
  // route module into client components.
  void SUPPORT_RECIPIENT;

  return NextResponse.json({ ok: true });
}
