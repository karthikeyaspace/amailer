import { amailer } from "../src";

describe("amailer", () => {
  it("should send a email using mailgun", async () => {
    const emailOptions = {
      from: "",
      to: "",
      subject: "",
      text: "",
    };
    const mailgunConfig = {
      type: "mailgun",
      mailgun: {
        apiKey: "",
        domain: "",
      },
    };

    await expect(amailer(emailOptions, mailgunConfig)).resolves.not.toThrow();
  });
});
