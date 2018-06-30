/**
 * @file BodyTemplate4 test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../../lib/Bot');
const BodyTemplate4 = Bot.Directive.Display.Template.BodyTemplate4;

describe('Test Display/Template/BodyTemplate4.js', () => {
    let bodyTemplate4 = new BodyTemplate4();
    bodyTemplate4.setPlainContent('plain text contents');
    bodyTemplate4.setImage('http://back-img-uri.com');

    it('#getData', () => {
        let data = bodyTemplate4.getData();
        data.token = 'token';
        data.should.deepEqual({
            type: 'BodyTemplate4',
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
