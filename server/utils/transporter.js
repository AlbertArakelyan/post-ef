import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';


dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'albertarakelyan1998@gmail.com',
    pass: process.env.NODE_MAILER_PASSWORD,
  },
});

export default transporter;
