import mongoose from 'mongoose';
interface DriverModel extends mongoose.Document {
    name: string;
    email: string;
    phone_number: number;
    license_number: string;
    car_number: string;
    isVerified: boolean;
    id: number;
}
declare const _default: mongoose.Model<DriverModel, {}, {}>;
export default _default;
