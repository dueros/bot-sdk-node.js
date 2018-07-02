/**
 * @file Charge test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../lib/Bot');

const Charge = Bot.Directive.Pay.Charge;

describe('Test Pay/Charge.js', () => {
    let charge = new Charge('1223', 'sellerOrderId_12322', 'productName', 'description');
    charge.setAmount('2345');
    charge.setDescription('description by set');
    charge.setProductName('productName by set');
    charge.setSellerOrderId('sellerOrderId_12322 by set');
    charge.setSellerAuthorizationNote('sellerAuthorizationNote-string by set');
    charge.setSellerNode('sellerNode by set');
    charge.setToken('token by set');

    it('#getToken', () => {
        charge.getToken().should.equal('token by set');
    });

    it('#getData', () => {
        charge.getData().should.deepEqual({
            type: 'Connections.SendRequest',
            name: 'Charge',
            token: 'token by set',
            payload: {
                chargeBaiduPay: {
                    authorizeAttributes: {
                        authorizationAmount: {
                            currencyCode: 'CNY',
                            amount: '2345'
                        },
                        sellerAuthorizationNote: 'sellerAuthorizationNote-string by set'
                    },
                    sellerOrderAttributes: {
                        sellerOrderId: 'sellerOrderId_12322 by set',
                        productName: 'productName by set',
                        description: 'description by set',
                        sellerNode: 'sellerNode by set'
                    }
                }
            }
        });
    });
});
