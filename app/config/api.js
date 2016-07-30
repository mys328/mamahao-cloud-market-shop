/*
 * 服务端api接口列表
 * by xqs 160620
 * */

var api = {
    "login": "/V1/member/login.htm",    //登录
    "vcode": "/V1/sms/vcode/sendSmsVcodeForLoginOrReg.htm",     //获取验证码
    "center": "/V1/member/center/getMemberCenterCountInfo.htm",     //个人中心
    "MBeanList": "/V1/mbean/queryMBeanList.htm",     //获取妈豆记录
    "integral": "/V1/member/center/queryMemberPoint.htm",     //积分
    "coupons": "/V2/coupon/list.htm",     //优惠券

    "addressList": "/V1/member/delivery/getDeliveryAddr.htm",     //收货地址列表
    "checkArea": "/V1/basic/checkArea.htm",     //地址
    "addAddress": "/V1/member/delivery/addDeliveryAddr.htm",     //添加地址
    "updateAddress": "/V1/member/delivery/updateDeliveryAddr.htm",     //更新地址
    "queryArea": "/V1/basic/queryArea.htm",     //获取省市区

    "orderList": "/V3/order/basic/queryOrderList.htm",      // 订单列表
    "orderDetail": "/V2/order/basic/queryOrderDetail.htm",  // 订单详情
    "orderDelete": "/V1/order/basic/delOrder.htm",  // 删除订单请求
    "orderExpress": "/V1/order/basic/getOrderLogisticsList.htm",    // 物流详情页
    "orderToPay": "/V3/order/basic/toSettlement.htm",               // 立即付款
    "orderReview": "/V1/order/basic/queryOrderGoodsList.htm",        // 评价晒单商品列表页面
    "orderRemind": "/V1/order/basic/remindDelivery.htm",  // 提醒发货
    "orderReceive": "/V1/order/basic/confirmReceipt.htm", // 确认收货
    "shopInfo":"/V1/order/basic/queryShopInfo.htm",  // 获取门店信息
    "deliveryInfo": "/V1/order/basic/queryDeliveryInfo.htm", // 获取配送信息
    "reviewSubmit": "/V2/comment/basic/commentGoodsTemplate.htm",    // 提交晒单评价

    "search": "/V2/search/goods/list.htm", // 搜索
    "searchGoodsList": "/V1/shop/basic/searchGoodsList.htm", // 搜索: 查询商品列表信息和获取门店商品列表
    "searchHotWords": "/V1/client/search/getHotSearchWord.htm", // 搜索热词
    "searchKeywordTips": "/V1/client/search/getKeywordTips.htm", // 搜索关键字提示
    "filterCategory": "/V1/shop/basic/getGoodsListFilterForSearch.htm", // 筛选分类列表

    "goodsType": "/V1/shop/basic/queryGoodsType.htm", // 商品分类：一级类目
    "goodsTypeTree": "/V1/shop/basic/queryGoodsTypeTree.htm", // 商品分类：二级类目
    "goodsList": "/V2/category/goods/list.htm", // 商品分类：二级类目商品列表
    //"goodsDetail": "/V1/shop/basic/searchItemDetail.htm", // 商品详情: 切换规格
    "goodsDetail": "/V2/shop/basic/searchTemplateDetail.htm", // 商品详情
    "goodsCommentList": "/V1/comment/basic/queryGoodsTemplateCommentList.htm", // 商品详情评论列表
    "goodsCommentChart": "/V1/comment/basic/queryGoodsTemplateCommentChart.htm",
    "goodsParams": "/V1/shop/basic/getGoodsParams.htm", // 商品参数详情
    "goodsContext": "/V1/shop/basic/getGoodsStyleHtml.htm", // 商品图文详情
    "goodsProLableList": "/V1/pmt/proLableList.htm", // 商品促销标签
    "goodsGuessYouLike": "/V1/shop/basic/guessYouLike.htm", // 商品猜你喜欢
    "goodsCouponList": "/V2/coupon/getGoodsCouponList.htm", // 商品优惠券列表

    "cart":"/V2/shop/cart/getCart.htm",  //购物车列表
    "cartTopDesc":"/V1/pmt/getCartTopDesc.htm",  //购物车顶部描述
    "pay":"/V1/order/basic/pay2.htm",   // 立即付款
    "settlement": "/V4/order/basic/toSettlement.htm",    // 结算
    "checkPay": "/V1/order/basic/checkPay.htm",


    // 门店相关;
    "queryMemberShopIndex": "/V1/member/shop/queryMemberShopIndex.htm"



};

module.exports = api;