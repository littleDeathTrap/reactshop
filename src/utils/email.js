import { Resend } from "resend";

const resend = new Resend("re_bYkUGXNw_MFfAKc8hGgkiygk36qwS286r");

export async function POST(values) {
  let msg = JSON.stringify(values);
  await resend.emails.send({
    from: "onboarding@mailartem.spacejelly.dev",
    to: "nataliiaakovtun@gmail.com",
    subject: "your order",
    html: `<p>Congrats on sending your order<br/><br/><strong>${msg}</strong>!</p>`,
  });
}
