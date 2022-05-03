import Driver from '../models/driver.models';
import { throwError, jwtManager } from '../../utils';

class DriverClass {
  data: any;

  errors: string[];

  constructor(data: any) {
    this.data = data;
    this.errors = [];
  }

  // eslint-disable-next-line consistent-return
  async checkDriverExist(): Promise<void> {
    const [check1, check2, check3, check4] = await Promise.all([
      Driver.findOne({ email: this.data.email }),
      Driver.findOne({ phone_number: this.data.phone_number }),
      Driver.findOne({ car_number: this.data.car_number }),
      Driver.findOne({ license_number: this.data.license_number }),
    ]);

    if (check1) return throwError('Email already exists', 409);

    if (check2) return throwError('Phone number already exists', 409);

    if (check3) return throwError('Car number already exists', 400);

    if (check4) return throwError('License number already exists', 409);
  }

  async register(): Promise<any> {
    await this.checkDriverExist();
    const drivers = await Driver.find({});
    this.data.id = drivers.length + 1;
    const driver = await Driver.create(this.data);
    return driver;
  }

  async verify(): Promise<any> {
    const { token } = this.data;
    if (!token) return throwError('Token is required', 400);

    const decoded = jwtManager.verify(token);

    if (!decoded) return throwError('Invalid token', 401);

    const driver = await Driver.findOne({ id: decoded.id, email: decoded.email });

    if (!driver) return throwError('Invalid authentication details', 401);

    driver.isVerified = true;

    // eslint-disable-next-line no-return-await
    return await driver.save();
  }
}

export default DriverClass;
