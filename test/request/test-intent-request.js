require("should"); 

let assert = require('assert');

let Request = require('../../lib/Request');
let data = require('../../data/intent-request');

describe('IntentRequest', () => {
    let request = new Request(data);

    describe('#getType()', () => {
        it('launch request type must be intentRequest', () => {
            request.getType().should.equal('IntentRequest');        
        });
    });

    describe('#isLaunchRequest()', () => {
        it('isLaunchRequest must be false', () => {
            request.isLaunchRequest().should.not.be.true();        
        });
    });

    describe('#isSessionEndedRequest()', () => {
        it('isSessionEndedRequest must be false', () => {
            request.isSessionEndedRequest().should.not.be.true();        
        });
    });
});
