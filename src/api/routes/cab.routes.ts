import cabRouter from '../../config/router-config';
import * as cabController from '../controllers/cab.controllers';

cabRouter.post('/cabs', cabController.availableCabs);

export default cabRouter;
