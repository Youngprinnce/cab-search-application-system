import { Response } from 'express';

export const sendSuccess = (response:Response, message:any, code:number, data:any) => {
  const resp = {
    status: 'success',
    message,
    data,
  };
  return response.status(code).json(resp);
};

export const sendSuccessY = (response:Response, message:string, code:number) => {
  const resp = {
    status: 'success',
    message,
  };
  return response.status(code).json(resp);
};

export const sendError = (response:Response, reason:string, code:number) => {
  const resp = {
    status: 'failure',
    reason,
  };
  return response.status(code).json(resp);
};
