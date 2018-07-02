/**
 * @file BodyTemplate5 test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../../lib/Bot');
const BodyTemplate5 = Bot.Directive.Display.Template.BodyTemplate5;

describe('Test Display/Template/BodyTemplate5.js', () => {
    let bodyTemplate5 = new BodyTemplate5();
    bodyTemplate5.setBackGroundImage('http://uri-img.com');
    bodyTemplate5.addImages('http://uri-img1.com', '1332', '123');
    bodyTemplate5.addImages('http://uri-img2.com');
    bodyTemplate5.addImages('http://uri-img3.com', '231', '122');

    it('#getData', () => {
        let data = bodyTemplate5.getData();
        data.token = '996a8650-2a06-40bb-8cf6-ce8f4b10493b';
        data.should.deepEqual({
            type: 'BodyTemplate5',
            token: '996a8650-2a06-40bb-8cf6-ce8f4b10493b',
            backgroundImage: {
                url: 'http://uri-img.com'
            },
            images: [
                {
                    url: 'http://uri-img1.com',
                    widthPixels: '1332',
                    heightPixels: '123'
                },
                {
                    url: 'http://uri-img2.com'
                },
                {
                    url: 'http://uri-img3.com',
                    widthPixels: '231',
                    heightPixels: '122'
                }
            ]
        });
    });
});
