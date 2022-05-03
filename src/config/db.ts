import mongoose from 'mongoose';
import { DATABASE_URL } from '.';
import { throwError, logger } from '../utils';

const InitiateMongoServer = async ():Promise<boolean> => {
  try {
    await mongoose.connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    logger.info('Connected to DB');
  } catch (ex:any) {
    logger.error(ex.message);
    throwError(ex.message, 500);
  }
  return true;
};

export default InitiateMongoServer;
