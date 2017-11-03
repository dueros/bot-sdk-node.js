require("should"); 

let assert = require('assert');

let Request = require('../../lib/Request');
let data = require('../../data/intent-request');
let intent = data.request.intents[0];

describe('Nlu', () => {
    let request;
    let nlu;

    beforeEach(() => {
        // clone data
        request = new Request(JSON.parse(JSON.stringify(data)));
        nlu = request.getNlu();
    });

    describe('#getSlot()', () => {
        it('city: 北京 getSlot("city") be 北京', () => {
            nlu.getSlot('city').should.equal('北京');        
        });
    });

    describe('#setSlot()', () => {
        it('monthlySalary: 1212 setSlot("monthlySalary", 1212)', () => {
            nlu.setSlot('monthlySalary', 1212);
            nlu.getSlot('monthlySalary').should.equal(1212);        
        }); });

    describe('#getIntentName()', () => {
        it('getIntentName must be intentName', () => {
            nlu.getIntentName().should.equal('intentName');        
        });
    });

    describe('#ask()', () => {
        it('ask must set Dialog.ElicitSlot directive', () => {
            nlu.ask('destination');
            nlu._directive.should.eql({
                type: 'Dialog.ElicitSlot',
                slotToElicit: 'destination',
                updatedIntent: {
                    name: intent.name,
                    slots: intent.slots 
                }
            });
        });
    });

    describe('#setDelegate()', () => {
        it('setDelegate must set Dialog.Delegate directive', () => {
            nlu.setDelegate();
            nlu._directive.should.eql({
                type: 'Dialog.Delegate',
                updatedIntent: {
                    name: intent.name,
                    slots: intent.slots 
                }
            });
        });
    });

    describe('#setConfirmSlot()', () => {
        it('setConfirmSlot must set Dialog.ConfirmSlot directive', () => {
            nlu.setConfirmSlot('city');
            nlu._directive.should.eql({
                type: 'Dialog.ConfirmSlot',
                slotToConfirm: 'city',
                updatedIntent: {
                    name: intent.name,
                    slots: intent.slots 
                }
            });
        });
    });

    describe('#setConfirmIntent()', () => {
        it('setConfirmIntent must set Dialog.ConfirmIntent directive', () => {
            nlu.setConfirmIntent();
            nlu._directive.should.eql({
                type: 'Dialog.ConfirmIntent',
                updatedIntent: {
                    name: intent.name,
                    slots: intent.slots 
                }
            });
        });
    });

    describe('#getSlotConfirmationStatus()', () => {
        it('getSlotConfirmationStatus must be NONE', () => {
            nlu.getSlotConfirmationStatus('city').should.equal('NONE');
        });
    });

    describe('#getIntentConfirmationStatus()', () => {
        it('getIntentConfirmationStatus must be NONE', () => {
            nlu.getIntentConfirmationStatus().should.equal('NONE');
        });
    });
});
