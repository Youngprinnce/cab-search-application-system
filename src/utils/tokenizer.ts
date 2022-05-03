import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../config';
import { decryptedData } from '../api/interfaces';

// custom function to sign and verify token using jwt
type Payload = {
  id: number;
  email: string;
};

export const sign = (payload: Payload) => {
  const token = jwt.sign(payload, <string>JWT_SECRET_KEY, {
    expiresIn: '1h',
  });
  return token;
};

export const verify = (token: string) => {
  const verifiedToken = jwt.verify(token, <string>JWT_SECRET_KEY) as decryptedData;

  return verifiedToken;
};
