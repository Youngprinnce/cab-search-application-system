import sendEmail from './email';
import { BASE_URL } from '../config';

const verifyEmail = async (email:string, name:string, token:string): Promise<boolean> => {
  const msg = `    
    <h1>Welcome to the app, ${name}!</h1>

    <p>
      Please click on the following link to verify your email address:
    </p>

    <a href="${BASE_URL}/api/v1/drivers/verify/${token}">${BASE_URL}/api/v1/drivers/verify/${token}</a>

    <p>
      Thanks,<br>
      The App Team
    </p>

    <p>
      <small>
        This email was sent from a notification-only address that cannot accept incoming email. Please do not reply to this message.
      </small>
    </p>
  `;
  const subject = 'Cars Search System Application Email Verification';

  const result = await sendEmail(email, subject, msg);

  return result;
};

export default verifyEmail;
