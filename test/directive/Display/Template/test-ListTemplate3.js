/**
 * @file ListTemplate3 test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../../lib/Bot');
const ListTemplate3 = Bot.Directive.Display.Template.ListTemplate3;
const ListTemplateItem = Bot.Directive.Display.Template.ListTemplateItem;

describe('Test Display/Template/ListTemplate3.js', () => {
    let listTemplate3 = new ListTemplate3();
    listTemplate3.setBackGroundImage('http://back-img.com');
    let listTemplateItem1 = new ListTemplateItem();
    listTemplateItem1.setImage('http://item-img1.com', '123', '345');
    listTemplateItem1.setPlainPrimaryText('Plain Primary Text');
    listTemplateItem1.setPlainSecondaryText('Plain Secondary Text');
    listTemplateItem1.setPlainTertiaryText('Plain Tertiary Text');
    //  for test
    listTemplateItem1.data.token = 'token';

    let listTemplateItem2 = new ListTemplateItem();
    listTemplateItem2.setImage('http://item-img2.com', '12', '45');
    listTemplateItem2.setPlainPrimaryText('Plain Primary Text');
    listTemplateItem2.setPlainSecondaryText('Plain Secondary Text');
    listTemplateItem2.setPlainTertiaryText('Plain Tertiary Text');
    //  for test
    listTemplateItem2.data.token = 'token';

    listTemplate3.addItem(listTemplateItem1);
    listTemplate3.addItem(listTemplateItem2);

    it('#getData', () => {
        let data = listTemplate3.getData();
        data.token = 'token';
        data.should.deepEqual({
            type: 'ListTemplate3',
            token: 'token',
            backgroundImage: {
                url: 'http://back-img.com'
            },
            listItems: [
                {
                    token: 'token',
                    image: {
                        url: 'http://item-img1.com',
                        widthPixels: '123',
                        heightPixels: '345'
                    },
                    textContent: {
                        primaryText: {
                            type: 'PlainText',
                            text: 'Plain Primary Text'
                        },
                        secondaryText: {
                            type: 'PlainText',
                            text: 'Plain Secondary Text'
                        },
                        tertiaryText: {
                            type: 'PlainText',
                            text: 'Plain Tertiary Text'
                        }
                    }
                },
                {
                    token: 'token',
                    image: {
                        url: 'http://item-img2.com',
                        widthPixels: '12',
                        heightPixels: '45'
                    },
                    textContent: {
                        primaryText: {
                            type: 'PlainText',
                            text: 'Plain Primary Text'
                        },
                        secondaryText: {
                            type: 'PlainText',
                            text: 'Plain Secondary Text'
                        },
                        tertiaryText: {
                            type: 'PlainText',
                            text: 'Plain Tertiary Text'
                        }
                    }
                }
            ]
        });
    });
});
