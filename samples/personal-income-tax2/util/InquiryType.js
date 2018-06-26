/**
 * @file 个税配置文件
 * @author yelvye@baidu.com
 */

let InquiryType = {
    tax: '个税',
    url: 'http://salarycalculator.sinaapp.com/calculate?is_gjj=true&is_exgjj=false&factor_exgjj=0.08',
    inquiryType: {
        '养老': {
            imageUrl: 'http://www.eduche.com/myimg/article/954/1_ewiyjb1457440029660451.jpg',
            title: '养老金查询',
            content: '养老金个人缴纳{personalYanglao}元，单位缴纳{orgYanglao}元'
        },
        '医疗': {
            imageUrl: 'http://img.bx58.com/attached/image/20171219151554_0337.jpg',
            title: '医疗险查询',
            content: '医疗保险金个人缴纳{personalYiliao}元，单位缴纳{orgYiliao}元'
        },
        '失业': {
            imageUrl: 'http://a1.att.hudong.com/31/45/01300000251852122593450806682.jpg',
            title: '失业险查询',
            content: '失业保险金个人缴纳{personalShiye}元，单位缴纳{orgShiye}元'
        },
        '工伤': {
            imageUrl: 'http://www.gov.cn/fuwu/2017-08/25/5220266/images/7c22a746f343422f8ccd6223f3d2c189.jpg',
            title: '工伤险查询',
            content: '工伤保险金单位缴纳{orgGongshang}元'
        },
        '生育': {
            imageUrl: 'http://uploads.cnrencai.com/allimg/201607/7-160G415134HX.png',
            title: '生育险查询',
            content: '生育保险金单位缴纳{orgShengyu}元'
        },
        '公积金': {
            imageUrl: 'http://img9.jiwu.com/jiwu_news_pics/20161122/1463210079297_000.jpg',
            title: '公积金查询',
            content: '住房公积金个人缴纳{personalGjj}元,单位缴纳{orgGjj}元'
        },
        '个税': {
            imageUrl: 'http://img.25pp.com/uploadfile/soft/images/2012/0412/20120412011113208.jpg',
            title: '个税查询',
            content: '个人所得税缴纳{tax}元'
        }
    }
};

module.exports = InquiryType;


