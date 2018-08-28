let Field = new Vue({
    el: '#udon',
    computed:{
      udonlist : function(){
          return [{name : '釜揚げうどん' , price : 290 , img : 'https://www.marugame-seimen.com/wp/wp-content/uploads/2018/07/udon-intro-pic01.png'},{name : 'ぶっかけうどん' , price : 290 , img : 'https://www.marugame-seimen.com/wp/wp-content/uploads/2018/07/udon-intro-pic05.png'},{name : 'かけうどんとかしわ天' , price : 430 , img : 'https://www.marugame-seimen.com/wp/wp-content/uploads/2018/07/udon-intro-pic09.png'}]
      }
    },
    data: {
        page : 1 ,
        money : null ,
        coupon : null ,
        selectudon : null,
        moneylist : [200,300,400,500,600],
        couponlist : ['天ぷら50円引き','温玉無料','うどん50円引き']
    },
    methods : {
        nextpage : function(){
            this.page = this.page + 1;
        }
    }
})