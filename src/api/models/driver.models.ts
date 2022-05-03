/* eslint-disable no-underscore-dangle */
import mongoose, { Schema } from 'mongoose';
import { DriverModel } from '../interfaces';

const DriverSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone_number: {
    type: Number,
    required: true,
    unique: true,
    min: 1000000000,
    max: 9999999999,
  },
  license_number: {
    type: String,
    required: true,
    unique: true,
  },
  car_number: {
    type: String,
    required: true,
    unique: true,
  },
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

DriverSchema.method('toJSON', function () {
  const { ...object } = this.toObject();
  delete object._id;
  delete object.__v;
  return object;
});

export default mongoose.model<DriverModel>('Driver', DriverSchema);
