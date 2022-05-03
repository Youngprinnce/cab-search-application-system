import { Response, Request } from 'express';
import baseRoute from '../../config/router-config';
import { sendSuccessY } from '../../utils';

baseRoute.get('/', (req:Request, res:Response) => sendSuccessY(res, 'Cab Search Application Backend Service API', 200));

export default baseRoute;
