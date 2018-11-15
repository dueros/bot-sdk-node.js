/**
 * @file BodyTemplate6 test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../../lib/Bot');
const BodyTemplate6 = Bot.Directive.Display.Template.BodyTemplate6;

describe('Test Display/Template/BodyTemplate6.js', () => {
    let bodyTemplate6 = new BodyTemplate6();
    bodyTemplate6.setBackGroundImage('http://uri-img.com');
    bodyTemplate6.setImage('http://uri-img1.com');
    bodyTemplate6.setPlainContent('plain_content');
    it('#getData', () => {
        let data = bodyTemplate6.getData();
        data.token = '996a8650-2a06-40bb-8cf6-ce8f4b10493b';
        data.should.deepEqual({ type: 'BodyTemplate6',
            token: '996a8650-2a06-40bb-8cf6-ce8f4b10493b',
            backgroundImage: {
                url: 'http://uri-img.com'
            },
            image: {
                url: 'http://uri-img1.com'
            },
            content: {
                type: 'PlainText',
                text: 'plain_content'
            }
        });
    });
});
