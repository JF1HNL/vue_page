let Field = new Vue({
    el: '#udon',
    computed:{
      makeudon : function(){
          return [{name : '釜揚げうどん' , price : 290 , img : 'https://www.marugame-seimen.com/wp/wp-content/uploads/2018/07/udon-intro-pic01.png'},{name : 'ぶっかけうどん' , price : 290 , img : 'https://www.marugame-seimen.com/wp/wp-content/uploads/2018/07/udon-intro-pic05.png'},{name : 'かけうどんとかしわ天' , price : 430 , img : 'https://www.marugame-seimen.com/wp/wp-content/uploads/2018/07/udon-intro-pic09.png'}]
      },
      makeudon1 : function(){
          return this.udonlist.filter(item => item.nami < this.money && item.nami > this.money - 100)   
      },
      udonnami : function(){
        //udonfilter : this.udonlist.filter(item => item.nami < this.money && item.nami > this.money - 100);
        return this.udonlist.filter(item => item.nami < this.money && item.nami > this.money - 100).map( it => {
            return ret = {
                name : it.name + '　大きさ : 並',
                price : it.nami
            }
        });
      },
      udondai : function(){
        //udonfilter : this.udonlist.filter(item => item.nami < this.money && item.nami > this.money - 100);
        return this.udonlist.filter(item => item.dai < this.money && item.dai > this.money - 100).map( it => {
            return ret = {
                name : it.name + '　大きさ : 大',
                price : it.dai
            }
        });
      },
      udontoku : function(){
        //udonfilter : this.udonlist.filter(item => item.nami < this.money && item.nami > this.money - 100);
        return this.udonlist.filter(item => item.toku < this.money && item.toku > this.money - 100).map( it => {
            return ret = {
                name : it.name + '　大きさ : 得',
                price : it.toku
            }
        });
      }
    },
    data: {
        i : 0,
        page : 1 ,
        money : null ,
        coupon : null ,
        selectudon : null,
        udonfilter : [],
        makeudondata : [],
        moneylist : [200,300,400,500,600,700],
        couponlist : ['天ぷら50円引き','温玉無料','うどん50円引き'],
        udonlist : [{name :"当店イチオシ「味をつくらず、味を引き出す」 釜揚げうどん（温）" , nami :290, dai :390, toku :490},{name :"特大桶で、どーんとお得 釜揚げ家族うどん" , nami : 1260 , dai : 1260 , toku : 1260 },{name :"食べたらやみつき 釜玉うどん（温）" , nami :350, dai :450, toku :550},{name :"女性に大人気 明太釜玉うどん（温）" , nami :410, dai :510, toku :610},{name :"わさびでキリッと とろろ醤油うどん（温）（冷）" , nami :350, dai :450, toku :550},{name :"讃岐ならでは ぶっかけうどん（温）（冷）" , nami :290, dai :390, toku :490},{name :"とろとろ とろ玉うどん（温）（冷）" , nami :410, dai :510, toku :610},{name :"すっきりと、さっぱり おろし醤油うどん（温）（冷）" , nami :350, dai :450, toku :550},{name :"具材増量！ 新カレーうどん（温）" , nami :490, dai :590, toku :690},{name :"うまさの大定番 かけうどん（温）" , nami :290, dai :390, toku :490},{name :"のどごし別格 ざるうどん（冷）" , nami :290, dai :390, toku :490}],
        tempuralist : [{name : "うどんと相性抜群 野菜かき揚げ" , price : 130},{name : "鶏肉のうまさ絶品 かしわ天" , price : 140},{name : "やっぱり王様 えび天" , price : 150},{name : "歯ごたえも美味しい いか天" , price : 110},{name : "女性は大好き さつまいも天" , price : 100},{name : "夏野菜の雄 なす天" , price : 110},{name : "ほっこり、あま～い かぼちゃ天" , price : 100},{name : "地元の超定番メニュー ちくわ天" , price : 110},{name : "讃岐で評判 半熟玉子天" , price : 120}],
        toppinglist : [{name : '天丼用ごはん' , price : 130},{name : '大根おろし' , price : 70},{name : '明太子' , price : 70},{name : 'きつねあげ' , price : 130},{name : 'とろろ' , price : 70},{name : '温泉玉子' , price : 70},{name : '生卵' , price : 70}]
    },
    methods : {
        nextpage : function(){
            this.page = this.page + 1;
        }
    }
})