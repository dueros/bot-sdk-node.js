/**
 * @file BodyTemplate1 test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../../lib/Bot');
const BodyTemplate1 = Bot.Directive.Display.Template.BodyTemplate1;

describe('Test Display/Template/BodyTemplate1.js', () => {
    let bodyTemplate1 = new BodyTemplate1();
    bodyTemplate1.setPlainTextContent('plain text contents', BodyTemplate1.BOTTOM_LEFT);
    bodyTemplate1.setBackGroundImage('http://back-img-uri.com');


    it('#getData', () => {
        let data = bodyTemplate1.getData();
        data.token = '0c71de96-15d2-4e79-b97e-e52cec25c254';
        data.should.deepEqual({
            type: 'BodyTemplate1',
            token: '0c71de96-15d2-4e79-b97e-e52cec25c254',
            textContent: {
                text: {
                    type: 'PlainText',
                    text: 'plain text contents'
                },
                position: 'BOTTOM-LEFT'
            },
            backgroundImage: {
                url: 'http://back-img-uri.com'
            }
        });
    });
});
