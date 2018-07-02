/**
 * @file VideoPlayer/Stop test
 * @author yelvye@baidu.com
 */

require('should');

const Bot = require('../../../lib/Bot');
const Stop = Bot.Directive.VideoPlayer.Stop;

describe('Test ViderPlayer/Stop.js', () => {
   let stop = new Stop();
   it('#getData', () => {
        stop.getData().should.deepEqual({
            type: 'VideoPlayer.Stop'
        });
   });
});

