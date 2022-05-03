import Driver from '../models/driver.models';
import Location from '../models/location.models';
import { calculateHaversineDistance } from '../../utils';

class CabClass {
  data: any;

  errors: string[];

  constructor(data: any) {
    this.data = data;
    this.errors = [];
  }

  async availableCabs(): Promise<any> {
    const { latitude, longitude } = this.data;

    const cabLocations = await Location.find({});
    const cabsAvailable = [];

    for (let i = 0; i < cabLocations.length; i += 1) {
      const { latitude: cabLat, longitude: cabLong } = cabLocations[i];
      const distance = calculateHaversineDistance(latitude, longitude, cabLat, cabLong);

      if (distance >= 4) {
        // eslint-disable-next-line no-await-in-loop
        const cabArround = await Driver.findOne(
          { id: cabLocations[i].driver_id },
          { name: 1, car_number: 1, phone_number: 1 },
        );
        if (cabArround) {
          cabsAvailable.push(cabArround);
        }
      }
    }
    return cabsAvailable;
  }
}

export default CabClass;
