import mongoose, { Schema } from 'mongoose';

interface LocationModel extends mongoose.Document {
  driver_id: number;
  latitude: number;
  longitude: number;
}

const LocationSchema: Schema = new Schema({
  driver_id: {
    type: Number,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
});

export default mongoose.model<LocationModel>('Location', LocationSchema);
