import test from "ava";
import { amailer } from "../src";
import { config } from "dotenv";
config();

test("send mail without attachments", async (t) => {
  const options = {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    subject: "Test Email",
    text: "Hello, this is a test email",
    type: "smtp",
    service: "gmail",
    user: process.env.FROM_EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  };

  try {
    const res = await amailer(options);
    t.true(res.accepted.includes(options.to), "The email should be accepted");
  } catch (err) {
    console.log("Error sending email: ", err);
    t.fail("The email sending process failed");
  }
});

test("send mail with attachments", async (t) => {
  const options = {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    subject: "Test Email",
    text: "Hello, this is a test email with attachments",
    type: "smtp",
    service: "gmail",
    user: process.env.FROM_EMAIL,
    pass: process.env.EMAIL_PASSWORD,
    attachments: [
      {
        filename: "test.txt",
        content: "Hello, this is a test email.",
      },
      {
        filename: "invoice.pdf",
        path: "./tests/invoice.pdf",
      },
      {
        filename: "logo.png",
        path: "https://avatars.githubusercontent.com/u/112397111?s=400&u=45930fe8e389287b7ce146eec80a826bcada8ff3&v=4",
      },
    ],
  };

  try {
    const res = await amailer(options);
    console.log(res, "res");
    t.true(res.accepted.includes(options.to), "The email should be accepted");
  } catch (err) {
    console.log("Error sending email: ", err);
    t.fail("The email sending process failed");
  }
});
