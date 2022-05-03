/* eslint-disable no-undef */
import { describe, it } from 'mocha';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/server';
import Driver from '../src/api/models/driver.models';
import Location from '../src/api/models/location.models';

chai.use(chaiHttp);

describe('POST /drivers', () => {
  beforeEach(async () => {
    await Driver.deleteMany({});
  });

  it('Should return status of failure and ("name" is not allowed to be empty) if name field is empty', (done) => {
    chai
      .request(app)
      .post('/api/v1/drivers')
      .send({
        name: '',
        email: 'ajiboyeadedotun16@gmail.com',
        phone_number: 65766565657,
        license_number: 'ABC12345',
        car_number: 'ABC-123ABC',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(422);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.be.eql('failure');
        expect(res.body.reason).to.be.eql('"name" is not allowed to be empty');
        done();
      });
  });

  it('Should return status of failure and ("email" is not allowed to be empty) if email field is empty', (done) => {
    chai
      .request(app)
      .post('/api/v1/drivers')
      .send({
        name: 'Dotun',
        email: '',
        phone_number: 65766565657,
        license_number: 'ABC12345',
        car_number: 'ABC-123ABC',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(422);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.be.eql('failure');
        expect(res.body.reason).to.be.eql('"email" is not allowed to be empty');
        done();
      });
  });

  it('Should return status of failure and ("phone_number" must be a number) if phone_number field is a string', (done) => {
    chai
      .request(app)
      .post('/api/v1/drivers')
      .send({
        name: 'Dotun',
        email: 'ajiboyeadedotun16@gmail.com',
        phone_number: '',
        license_number: 'ABC12345',
        car_number: 'ABC-123ABC',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(422);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.be.eql('failure');
        expect(res.body.reason).to.be.eql('"phone_number" must be a number');
        done();
      });
  });

  it('Should return status of failure and ("license_number" is not allowed to be empty) if license_number field is empty', (done) => {
    chai
      .request(app)
      .post('/api/v1/drivers')
      .send({
        name: 'Dotun',
        email: 'ajiboyeadedotun16@gmail.com',
        phone_number: 6576656567,
        license_number: '',
        car_number: 'ABC-123ABC',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(422);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.be.eql('failure');
        expect(res.body.reason).to.be.eql('"license_number" is not allowed to be empty');
        done();
      });
  });

  it('Should return status of failure and ("car_number" is not allowed to be empty) if car_number field is empty', (done) => {
    chai
      .request(app)
      .post('/api/v1/drivers')
      .send({
        name: 'Dotun',
        email: 'ajiboyeadedotun16@gmail.com',
        phone_number: 6576656567,
        license_number: 'ABC12345',
        car_number: '',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(422);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.be.eql('failure');
        expect(res.body.reason).to.be.eql('"car_number" is not allowed to be empty');
        done();
      });
  });

  it('Should return status of failure and "email" must be a valid email', (done) => {
    chai
      .request(app)
      .post('/api/v1/drivers')
      .send({
        name: 'Dotun',
        email: 'ajiboyeadedotun16.com',
        phone_number: 6576656567,
        license_number: 'ABC12345',
        car_number: 'ABC-123ABC',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(422);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.be.eql('failure');
        expect(res.body.reason).to.be.eql('"email" must be a valid email');
        done();
      });
  });

  it('Should return status of failure and "phone_number" must be less than or equal to 9999999999', (done) => {
    chai
      .request(app)
      .post('/api/v1/drivers')
      .send({
        name: 'Dotun',
        email: 'ajiboyeadedotun16@gmail.com',
        phone_number: 65766565671,
        license_number: 'ABC12345',
        car_number: 'ABC-123ABC',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(422);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.be.eql('failure');
        expect(res.body.reason).to.be.eql('"phone_number" must be less than or equal to 9999999999');
        done();
      });
  });

  it('Should return status of failure and "phone_number" must be greater than or equal to 1000000000', (done) => {
    chai
      .request(app)
      .post('/api/v1/drivers')
      .send({
        name: 'Dotun',
        email: 'ajiboyeadedotun16@gmail.com',
        phone_number: 657665656,
        license_number: 'ABC12345',
        car_number: 'ABC-123ABC',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(422);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.be.eql('failure');
        expect(res.body.reason).to.be.eql('"phone_number" must be greater than or equal to 1000000000');
        done();
      });
  });

  it('Should return status of failure and License number must be in the format of ABC12345', (done) => {
    chai
      .request(app)
      .post('/api/v1/drivers')
      .send({
        name: 'Dotun',
        email: 'ajiboyeadedotun16@gmail.com',
        phone_number: 6576656564,
        license_number: 'ACDD54',
        car_number: 'ABC-123ABC',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(422);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.be.eql('failure');
        expect(res.body.reason).to.be.eql('License number must be in the format of ABC12345');
        done();
      });
  });

  it('Should return status of failure and Car number must be in the format of ABC-123ABC', (done) => {
    chai
      .request(app)
      .post('/api/v1/drivers')
      .send({
        name: 'Dotun',
        email: 'ajiboyeadedotun16@gmail.com',
        phone_number: 6576656569,
        license_number: 'ABC12345',
        car_number: 'ABC-123-A-BC',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(422);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.be.eql('failure');
        expect(res.body.reason).to.be.eql('Car number must be in the format of ABC-123ABC');
        done();
      });
  });

  it('Should return status of success and create a new driver', (done) => {
    chai
      .request(app)
      .post('/api/v1/drivers')
      .send({
        name: 'Dotun',
        email: 'ajiboyeadedotun@gmail.com',
        phone_number: 6576656569,
        license_number: 'ABC12345',
        car_number: 'ABC-123ABC',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(201);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.be.eql('success');
        expect(res.body.message).to.be.eql('Driver registered successfully');
        expect(res.body.data).to.be.an('object');
        expect(res.body.data).to.haveOwnProperty('id');
        expect(res.body.data).to.haveOwnProperty('name');
        expect(res.body.data.name).to.be.eql('Dotun');
        expect(res.body.data).to.haveOwnProperty('email');
        expect(res.body.data.email).to.be.eql('ajiboyeadedotun@gmail.com');
        expect(res.body.data).to.haveOwnProperty('phone_number');
        expect(res.body.data.phone_number).to.be.eql(6576656569);
        expect(res.body.data).to.haveOwnProperty('license_number');
        expect(res.body.data.license_number).to.be.eql('ABC12345');
        expect(res.body.data).to.haveOwnProperty('car_number');
        expect(res.body.data.car_number).to.be.eql('ABC-123ABC');
        done();
      });
  });
});

describe('POST Drivers location', () => {
  beforeEach(async () => {
    await Driver.deleteMany({});
    await Location.deleteMany({});
  });
  it('Should return status of failure and "latitude" must be a number', (done) => {
    chai
      .request(app)
      .post('/api/v1/drivers/location/1')
      .send({
        latitude: '',
        longitude: 7.849998524,
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(422);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.be.eql('failure');
        expect(res.body.reason).to.be.eql('"latitude" must be a number');
        done();
      });
  });

  it('Should return status of failure and "longitude" must be a number', (done) => {
    chai
      .request(app)
      .post('/api/v1/drivers/location/1')
      .send({
        latitude: 12.6576,
        longitude: '',
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(422);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.be.eql('failure');
        expect(res.body.reason).to.be.eql('"longitude" must be a number');
        done();
      });
  });

  it('Should return status of success and Location saved successfully', (done) => {
    Driver.create({
      id: 1,
      name: 'Dotun',
      email: 'dotun@gmail.com',
      phone_number: 6576656569,
      license_number: 'ABC12345',
      car_number: 'ABC-123ABC',
    })
      .then(() => {
        chai
          .request(app)
          .post('/api/v1/drivers/location/1')
          .send({
            latitude: 12.6576,
            longitude: 7.849998524,
          })
          .end((err, res) => {
            expect(res.status).to.be.eql(201);
            expect(res.body).to.be.an('object');
            expect(res.body.status).to.be.eql('success');
            expect(res.body.message).to.be.eql('Location saved successfully');
            done();
          });
      });
  });
});
