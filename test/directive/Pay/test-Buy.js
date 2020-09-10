/**
 * @file Buy test
 * @author jiaoyang08@baidu.com
 */

require('should');
const Bot = require('../../../lib/Bot');

const Buy = Bot.Directive.Pay.Buy;

describe('Test Pay/Buy.js', () => {
    let productId = "p1001";
    let buy = new Buy(productId);
    buy.setToken('token by set');

    it('#getToken', () => {
        buy.getToken().should.equal('token by set');
    });

    it('#getData', () => {
        buy.getData().should.deepEqual({
            type: 'Connections.SendRequest.Buy',
            token: 'token by set',
            payload: {
                productId: productId
            }
        });
    });
});