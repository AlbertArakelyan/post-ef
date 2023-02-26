import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'albertarakelyan1998@gmail.com',
    pass: 'qbxx eket eoow ptfd', // TODO write in env
  },
});

export default transporter;