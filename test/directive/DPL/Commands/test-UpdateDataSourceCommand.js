/**
 * @file UpdateDataSourceCommand test
 * @author jiaoyang08@baidu.com
 */

require('should');
const Bot = require('../../../../lib/Bot');

const UpdateDataSourceCommand = Bot.Directive.DPL.Commands.UpdateDataSourceCommand;

describe('Test Commands/UpdateDataSourceCommand.js', () => {
    let data = {
        "name": "xiaodu"
    };
    let updateDataSourceCommand = new UpdateDataSourceCommand();
    updateDataSourceCommand.setDWhen('dwhen string');
    updateDataSourceCommand.setDelay(0);
    updateDataSourceCommand.setData(data);
    
    it('#getData', () => {
        updateDataSourceCommand.getData().should.deepEqual({
            type: 'UpdateDataSource',
            componentId: '',
            delay: 0,
            dWhen: 'dwhen string',
            data: {
                "name": "xiaodu"
            }
        });
    });
});