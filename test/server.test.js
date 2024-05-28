const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server'); // Убедитесь, что путь к серверу указан правильно
const should = chai.should();

chai.use(chaiHttp);

describe('API Tests', () => {
    describe('/POST authenticate', () => {
        it('it should authenticate user', (done) => {
            const credentials = {
                steamId: 'sampleSteamId',
                authToken: 'valid_token'
            };
            chai.request(server)
                .post('/authenticate')
                .send(credentials)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.success.should.be.eql(true);
                    done();
                });
        });
    });

    describe('/POST drop-item', () => {
        it('it should drop item', (done) => {
            const dropRequest = {
                steamId: 'sampleSteamId',
                itemId: 'sampleItemId'
            };
            chai.request(server)
                .post('/drop-item')
                .send(dropRequest)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.success.should.be.eql(true);
                    done();
                });
        });
    });
});
