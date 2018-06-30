/**
 * @file BodyTemplate3 test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../../lib/Bot');
const BodyTemplate3 = Bot.Directive.Display.Template.BodyTemplate3;

describe('Test Display/Template/BodyTemplate3.js', () => {
    let bodyTemplate3 = new BodyTemplate3();
    bodyTemplate3.setPlainContent('plain text contents');
    bodyTemplate3.setImage('http://back-img-uri.com');

    it('#getData', () => {
        let data = bodyTemplate3.getData();
        data.token = 'token';
        data.should.deepEqual({
            type: 'BodyTemplate3',
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
