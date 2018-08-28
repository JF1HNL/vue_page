let Field = new Vue({
    el: '#udon',
    computed:{
      udonlist : function(){
          return ['かけうどん','ぶっかけうどん']
      }
    },
    data: {
        page : 1 ,
        money : null ,
        coupon : null ,
        selectudon : null,
        moneylist : [200,300,400,500,600],
        couponlist : ['天ぷら50円引き','温玉無料','うどん50円引き']
    }
})