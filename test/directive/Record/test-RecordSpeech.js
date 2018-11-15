/**
 * @file RecordSpeech test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../lib/Bot');
const RecordSpeech = Bot.Directive.Record.RecordSpeech;

describe('Test Directive.Record.RecordSpeech.js', () => {
    let recordSpeech = new RecordSpeech();
    recordSpeech.setToken('record_token');

    it('#getData', () => {
        recordSpeech.getData().should.deepEqual({
            type: 'Record.RecordSpeech',
            token: 'record_token'
        });
    });
});
