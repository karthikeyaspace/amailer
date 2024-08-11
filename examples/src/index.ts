import { amailer } from "amailer";
import dotenv from "dotenv";
dotenv.config();

async function send() {
  const options = {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    subject: "Test Email",
    text: "Hello, this is a test email.",
    type: "smtp",
    service: "gmail",
    user: process.env.FROM_EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  };
  console.log(options, "options");
  // try {
  //   await amailer(options)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // } catch (err) {
  //   console.log(err);
  // }
}


send();