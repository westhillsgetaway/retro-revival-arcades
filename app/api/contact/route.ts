import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "joey.r.jordan@live.com",
      subject: `New Arcade Inquiry from ${name}`,
      replyTo: email as string,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    return new Response("Success", { status: 200 });
  } catch (error) {
    return new Response("Error sending email", { status: 500 });
  }
}