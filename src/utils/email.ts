import sendGridMail from '@sendgrid/mail';
import { SENDGRID_API_KEY, SENDGRID_EMAIL_FROM } from '../config';

import logger from './logger';

sendGridMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (email: string, subject: string, message: string): Promise<boolean> => {
  try {
    const data = {
      to: `${email}`,
      from: `CabSearch <${SENDGRID_EMAIL_FROM}>`,
      subject,
      html: message,
    };
    const report = await sendGridMail.send(data);
    if (report[0].statusCode) return true;
  } catch (err: any) {
    logger.log({
      level: 'error',
      message: err.message,
    });
    return false;
  }
  return true;
};

export default sendEmail;
