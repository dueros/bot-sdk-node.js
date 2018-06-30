/**
 * @file BodyTemplate2 test
 * @author yelvye@baidu.com
 */

require('should');

const Bot = require('../../../../lib/Bot');
const BodyTemplate2 = Bot.Directive.Display.Template.BodyTemplate2;
describe('Test Display/Template/BodyTemplate2.js', () => {
    let bodyTemplate2 = new BodyTemplate2();
    bodyTemplate2.setPlainContent('plain text contents');
    bodyTemplate2.setImage('http://back-img-uri.com');

    it('#getData', () => {
        let data = bodyTemplate2.getData();
        data.token = 'token';
        data.should.deepEqual({
            type: 'BodyTemplate2',
            token: 'token',
            content: {
                type: 'PlainText',
                text: 'plain text contents'
            },
            image: {
                url: 'http://back-img-uri.com'
            }
        });
    });
});
