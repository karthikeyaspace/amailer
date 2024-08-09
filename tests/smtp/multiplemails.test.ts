import { amailer } from "../../src/amailer";

describe("Amailer", () => {
  it("should send an email using Nodemailer", async () => {
    const emailOptions = {
      from: process.env.FROM_EMAIL,
      to: ["karthikeyaveruturi2005@gmail.com", "veruturikarthikeya@gmail.com"],
      subject: "Test Email",
      text: "Hello, this is a test email.",
      type: "smtp",
      service: "gmail",
      user: process.env.FROM_EMAIL,
      pass: process.env.EMAIL_PASSWORD, 
    };
    
    await expect(amailer(emailOptions)).resolves.not.toThrow();
  });
});
