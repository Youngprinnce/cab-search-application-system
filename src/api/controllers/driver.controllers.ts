/* eslint-disable camelcase */
import { Request, Response } from 'express';
import {
  verifyEmail, jwtManager, throwError, sendSuccess, sendError,
} from '../../utils';
import Driver from '../services/driver.services';
import * as validations from '../validations';

// Driver Signup ===> /api/drivers/register
export const register = async (req: Request, res: Response) => {
  try {
    await validations.driver.driverSchema.validateAsync(req.body);

    const licenseNumberRegex: RegExp = /^[A-Z]{3}[0-9]{5}$/;

    const carNumberRegex: RegExp = /^[A-Z]{3}-\d{3}[A-Z]{3}$/;

    if (!req.body.license_number.match(licenseNumberRegex)) throwError('License number must be in the format of ABC12345', 422);

    if (!req.body.car_number.match(carNumberRegex)) throwError('Car number must be in the format of ABC-123ABC', 422);

    const driver = await new Driver(req.body).register();

    const {
      id, name, email, car_number, license_number, phone_number,
    } = driver;

    const token = jwtManager.sign({ id, email });

    await verifyEmail(email, name, token);

    return sendSuccess(res, 'Driver registered successfully', 201, {
      id, name, email, car_number, license_number, phone_number,
    });
  } catch (err: any) {
    if (err.isJoi === true) return sendError(res, err.details[0].message, 422);
    return sendError(res, err.message, err.statusCode || 500);
  }
};