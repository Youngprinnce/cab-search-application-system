import mongoose from 'mongoose';

export interface decryptedData {
    id: number;
    email: string;
}

export interface DriverModel extends mongoose.Document {
    name: string;
    email: string;
    phone_number: number;
    license_number: string;
    car_number: string;
    isVerified: boolean;
    id: number;
}
