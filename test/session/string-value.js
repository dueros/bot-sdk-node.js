require("should"); 

let assert = require('assert');

let Session = require('../../lib/Session');
let data = require('../../data/intent-request').session;

describe('Session', () => {
    let session;

    beforeEach(() => {
        // clone data
        session = new Session(JSON.parse(JSON.stringify(data)));
    });

    describe('#setData()', () => {
        it('setData. response must have the key', () => {
            session.setData('status', 1);
            session.toResponse().should.eql({
                attributes:{
                    status: 1
                }
            });        
        });
    });

    describe('#getData()', () => {
        it('getData. setData must can be got', () => {
            session.setData('status', 1);
            session.getData('status').should.be.equal(1);
        });
    });
});

