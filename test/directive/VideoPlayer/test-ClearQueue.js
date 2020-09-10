/**
 * @file Buy test
 * @author jiaoyang08@baidu.com
 */

require('should');
const Bot = require('../../../lib/Bot');
const ClearArgumentsCommand = require('../../../lib/directive/DPL/Commands/ClearArgumentsCommand');

const ClearQueue = Bot.Directive.VideoPlayer.ClearQueue;

describe("Test VidepPlayer.js", () => {
    let clearQueue = new ClearQueue();
    
    it("#getData", () => {
        clearQueue.getData().should.deepEqual({
            type: 'VideoPlayer.ClearQueue',
            clearBehavior: 'CLEAR_ENQUEUED'
        });
    });
});

