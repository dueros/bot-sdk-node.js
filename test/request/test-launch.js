require("should"); 

let assert = require('assert');

let Request = require('../../lib/Request');
let data = require('../../data/launch');

describe('Request', () => {
    let request = new Request(data);

    describe('#getType()', () => {
        it('launch request type must be LaunchRequest', () => {
            request.getType().should.equal('LaunchRequest');        
        });
    });
});
