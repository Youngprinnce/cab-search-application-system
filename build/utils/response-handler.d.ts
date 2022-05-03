import { Response } from 'express';
export declare const sendSuccess: (response: Response, message: any, code: number, data: any) => Response<any, Record<string, any>>;
export declare const sendSuccessY: (response: Response, message: string, code: number) => Response<any, Record<string, any>>;
export declare const sendError: (response: Response, reason: string, code: number) => Response<any, Record<string, any>>;
