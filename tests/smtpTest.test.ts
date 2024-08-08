import { amailer } from '../src/amailer'

describe('Amailer', () => {
  it('should send an email using Nodemailer', async () => {
    const emailOptions = {
      from: 'karthikeyaveruturi2004@gmail.com',
      to: 'karthikeyaveruturi2005@gmail.com',
      subject: 'Test Email',
      text: 'Hello, this is a test email.',
    }

    const smtpConfig = {
      type: "smtp",
      smtp: {
        service: 'gmail',
        user: 'karthikeyaveruturi2004@gmail.com',
        pass: 'urqpqjzyhvehmnyo',
      },
    }

    await expect(amailer(emailOptions, smtpConfig)).resolves.not.toThrow()
  })
})
