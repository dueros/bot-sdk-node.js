require("should"); 

let assert = require('assert');

let Request = require('../../lib/Request');
let data = require('../../data/launch');

describe('LaunchRequest', () => {
    let request = new Request(data);

    describe('#getType()', () => {
        it('launch request type must be LaunchRequest', () => {
            request.getType().should.equal('LaunchRequest');        
        });
    });

    describe('#getUserId()', () => {
        it('get user id must be userId', () => {
            request.getUserId().should.equal('userId');        
        });
    });

    describe('#getBotId()', () => {
        it('getBotId must be botId', () => {
            request.getBotId().should.equal('botId');        
        });
    });

    describe('#isLaunchRequest()', () => {
        it('isLaunchRequest must be true', () => {
            request.isLaunchRequest().should.be.true();        
        });
    });

    describe('#isSessionEndedRequest()', () => {
        it('isSessionEndedRequest must be false', () => {
            request.isSessionEndedRequest().should.not.be.true();        
        });
    });

    describe('#isDialogStateCompleted()', () => {
        it('isDialogStateCompleted must be false', () => {
            request.isDialogStateCompleted().should.not.be.true();        
        });
    });

});
