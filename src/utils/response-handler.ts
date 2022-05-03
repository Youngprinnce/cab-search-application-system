import { Response } from 'express';

export const sendSuccessY = (response:Response, message:string, code:number) => {
  const resp = {
    status: 'success',
    message,
  };
  return response.status(code).json(resp);
};
