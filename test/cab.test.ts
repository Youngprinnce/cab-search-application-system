import { describe, it } from 'mocha';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/server';

chai.use(chaiHttp);

describe('post /cabs', () => {
  it('Should return list of available cars', (done) => {
    chai
      .request(app)
      .post('/api/v1/cabs')
      .send({
        latitude: -1.292066,
        longitude: 36.821945,
      })
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.status).to.equal('success');
        done();
      });
  });
});
