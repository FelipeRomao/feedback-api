import nodemailer from "nodemailer";
import { MailAdapter, SendEmailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "ed474dba48d1b1",
    pass: "7bd9e86215c7a9",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendEmailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Felipe Romao <feliperomao.a@gmail.com>",
      subject: subject,
      html: body,
    });
  }
}
