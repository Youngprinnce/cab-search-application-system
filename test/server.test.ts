import { describe, it } from 'mocha';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/server';

chai.use(chaiHttp);

describe('Server', () => {
  it('Should display Cab Search Application Backend Service API', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.be.eql(200);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('success');
        expect(res.body.message).to.eql(
          'Cab Search Application Backend Service API',
        );
        done();
      });
  });

  it('Should display Could not find the requested resource on the server!', (done) => {
    chai
      .request(app)
      .post('/hello')
      .end((err, res) => {
        expect(res.status).to.be.eql(404);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.eql('failure');
        expect(res.body.reason).to.eql(
          'Could not find the requested resource on the server!',
        );
        done();
      });
  });
});
