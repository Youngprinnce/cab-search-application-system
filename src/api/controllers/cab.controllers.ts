import { Request, Response } from 'express';
import Cab from '../services/cab.services';
import * as validations from '../validations';
import { sendSuccess, sendSuccessY, sendError } from '../../utils';

// Available cabs within 4km ===> /api/v1/cabs
export const availableCabs = async (req: Request, res: Response) => {
  try {
    await validations.driver.locationSchema.validateAsync(req.body);

    const cabsAvailable = await new Cab(req.body).availableCabs();

    if (cabsAvailable.length === 0) return sendSuccessY(res, 'No cabs available!', 200);

    return sendSuccess(res, 'Avaliable cabs fetched successfully', 200, { available_cabs: cabsAvailable });
  } catch (err: any) {
    if (err.isJoi === true) return sendError(res, err.details[0].message, 422);
    return sendError(res, err.message, err.statusCode);
  }
};
