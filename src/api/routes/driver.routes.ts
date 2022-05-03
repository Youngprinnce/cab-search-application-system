import driverRouter from '../../config/router-config';
import * as driverController from '../controllers/driver.controllers';

driverRouter.post('/drivers', driverController.register);

export default driverRouter;
