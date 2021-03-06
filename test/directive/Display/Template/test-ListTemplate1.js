/**
 * @file ListTemplate1 test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../../lib/Bot');
const ListTemplate1 = Bot.Directive.Display.Template.ListTemplate1;
const ListTemplateItem = Bot.Directive.Display.Template.ListTemplateItem;
const HotTag = Bot.Directive.Display.Template.Tag.HotTag;
const FreeTag = Bot.Directive.Display.Template.Tag.FreeTag;
const PayTag = Bot.Directive.Display.Template.Tag.PayTag;

describe('Test Display/Template/ListTemplate1.js', () => {
    let listTemplate1 = new ListTemplate1();
    listTemplate1.setBackGroundImage('http://back-img.com');
    let listTemplateItem1 = new ListTemplateItem();
    listTemplateItem1.setImage('http://item-img1.com', '123', '345');
    listTemplateItem1.setAnchorWord('anchorWord_test');
    listTemplateItem1.setImageTags(new PayTag());
    listTemplateItem1.setImageTags([new HotTag(), new FreeTag()]);
    listTemplateItem1.setPlainPrimaryText('Plain Primary Text');
    listTemplateItem1.setPlainSecondaryText('Plain Secondary Text');
    listTemplateItem1.setPlainTertiaryText('Plain Tertiary Text');
    //  for test
    listTemplateItem1.data.token = 'token';

    let listTemplateItem2 = new ListTemplateItem();
    listTemplateItem2.setImage('http://item-img2.com', '12', '45');
    listTemplateItem1.setImageTags([new HotTag()]);
    listTemplateItem1.setImageTags(new PayTag());
    listTemplateItem2.setPlainPrimaryText('Plain Primary Text');
    listTemplateItem2.setPlainSecondaryText('Plain Secondary Text');
    listTemplateItem2.setPlainTertiaryText('Plain Tertiary Text');
    //  for test
    listTemplateItem2.data.token = 'token';

    listTemplate1.addItem(listTemplateItem1);
    listTemplate1.addItem(listTemplateItem2);

    it('#getData', () => {
        let data = listTemplate1.getData();
        data.token = 'token';
        data.should.deepEqual({
            type: 'ListTemplate1',
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
                        heightPixels: '345',
                        tags: [
                            {
                                type: 'PAY',
                                text: '付费'
                            },
                            {
                                type: 'HOT',
                                text: '热门'
                            },
                            {
                                type: 'FREE',
                                text: '免费'
                            },
                            {
                                type: 'HOT',
                                text: '热门'
                            },
                            {
                                type: 'PAY',
                                text: '付费'
                            }
                        ]
                    },
                    anchorWord: 'anchorWord_test',
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

