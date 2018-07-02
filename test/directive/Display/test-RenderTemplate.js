/**
 * @file RenderTemplate test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../lib/Bot');
const RenderTemplate = Bot.Directive.Display.RenderTemplate;

describe('Test Display/RenderTemplate.js', () => {
    let renderTemplate = new RenderTemplate();
    let template = new Bot.Directive.Display.Template.BodyTemplate2();
    template.setPlainContent('plain context by set');
    template.setImage('http://image-uri.com', '123', '234');
    renderTemplate.setTemplate(template);

    it('#getData', () => {
        let data = renderTemplate.getData();
        data.template.token = 'token';
        data.should.deepEqual({
            type: 'Display.RenderTemplate',
            template: {
                type: 'BodyTemplate2',
                token: 'token',
                content: {
                    type: 'PlainText',
                    text: 'plain context by set'
                },
                image: {
                    url: 'http://image-uri.com',
                    widthPixels: '123',
                    heightPixels: '234'
                }
            }
        });
    });
});
