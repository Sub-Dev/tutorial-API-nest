import { MailerOptions } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import * as path from 'path';
require('dotenv').config();
export const mailerConfig: MailerOptions = {
  template: {
    dir: path.resolve(__dirname, '..', '..', 'templates'), // Diretório dos templates
    adapter: new HandlebarsAdapter(), // Adaptador Handlebars
    options: {
      extName: '.hbs', // Extensão dos templates Handlebars
      layoutsDir: path.resolve(__dirname, '..', '..', 'templates'), // Diretório dos layouts, se aplicável
    },
  },
  transport: {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT, 10),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    secure: false,
    tls: {
      rejectUnauthorized: false
    }
  },
};
