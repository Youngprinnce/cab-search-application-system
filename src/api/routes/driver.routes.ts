import driverRouter from '../../config/router-config';
import * as driverController from '../controllers/driver.controllers';

driverRouter.post('/drivers', driverController.register);
driverRouter.get('/drivers/verify/:token', driverController.verify);
driverRouter.post('/drivers/location/:id', driverController.sendLocation);

export default driverRouter;
