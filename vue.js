let Field = new Vue({
    el: '#udon',
    computed:{
      makeudon1 : function(){
          return this.udonlist.filter(item => item.nami < this.money && item.nami > this.money - 100)   
      },
      makeudon : function(){
        return this.udonlist.filter(item => item.nami < this.money && item.nami > this.money - 300).map( it => {
            if(it.nami < this.money && it.nami > this.money - 100){
                return {
                    name : it.name + '（並）',
                    price : it.nami
                }
            }else if(it.nami < this.money - 100 && it.nami > this.money - 200){
                return {
                    name : it.name + '（大）',
                    price : it.dai
                }
            }else if(it.nami < this.money - 200 && it.nami > this.money - 300){
                return {
                    name : it.name + '（得）',
                    price : it.toku
                }
            }
        });
      },
      udonnami : function(){
        //udonfilter : this.udonlist.filter(item => item.nami < this.money && item.nami > this.money - 100);
        return this.udonlist.filter(item => item.nami < this.money && item.nami > this.money - 100).map( it => {
            return ret = {
                name : it.name + '（並）',
                price : it.nami
            }
        });
      },
      udondai : function(){
        //udonfilter : this.udonlist.filter(item => item.nami < this.money && item.nami > this.money - 100);
        return this.udonlist.filter(item => item.dai < this.money && item.dai > this.money - 100).map( it => {
            return ret = {
                name : it.name + '（大）',
                price : it.dai
            }
        });
      },
      udontoku : function(){
        //udonfilter : this.udonlist.filter(item => item.nami < this.money && item.nami > this.money - 100);
        return this.udonlist.filter(item => item.toku < this.money && item.toku > this.money - 100).map( it => {
            return ret = {
                name : it.name + '（得）',
                price : it.toku
            }
        });
      },
      udontempura : function(){
        return this.udonlist.filter(item => item.nami < this.money -100).map( udon => {
            return this.tempuralist.filter(item => item.price < this.money - udon.nami && item.price > this.money - udon.nami -300).map( tempura => {
                return ret = {
                    name : udon.name + 'と' + tempura.name + '　大きさ : 並',
                    price : Number(udon.nami) + Number(tempura.price)
                }
            })
        })
      }
    },
    data: {
        i : 0,
        page : 1 ,
        money : null ,
        coupon : null ,
        selectudon : null,
        moneylist : [200,300,400,500,600,700,800,900],
        couponlist : [{ name : 'うどん50円引き', price : 50, condition : 'うどん'},{ name : 'うどん100円引き', price : 100, condition : 'うどん'},{ name : 'うどん50円引き', price : 50, condition : 'うどん'},{ name : '天ぷら30円引き', price : 30, condition : '天ぷら'},{ name : '天ぷら50円引き', price : 50, condition : '天ぷら'},{ name : '大根おろし無料', price : 70, condition : 'おろし'},{ name : '温玉無料', price : 70, condition : '温玉'},{ name : '野菜かき揚げ半額', price : 70, condition : '野菜かき揚げ'},{ name : 'いなり半額', price : 50, condition : 'おいなり'},{ name : '期間限定クーポン（50円引き）', price : 50, condition : 'NULL'},{ name : '天丼用ごはん半額', price : 70, condition : '天丼用ごはん'},{ name : 'かしわ天無料', price : 140, condition : 'かしわ天'},{ name : '釜揚げの日（釜揚げうどん半額）', price : 150, condition : '釜揚げ（温）'},{ name : '期間限定うどん半額', price : 150, condition : 'うどん'}],
        udonlist : [{name :'釜揚げうどん（温）' , price :290},{name :'釜揚げ家族うどん' , price : 1260},{name :'釜玉うどん（温）' , price :350},{name :'明太釜玉うどん（温）' , price :410},{name :'とろろ醤油うどん（温）（冷）' , price :350,},{name :'ぶっかけうどん（温）（冷）' , price :290},{name :'とろ玉うどん（温）（冷）' , price :410},{name :'おろし醤油うどん（温）（冷）' , price :350},{name :'カレーうどん（温）' , price :490},{name :'かけうどん（温）' , price :290},{name :'ざるうどん（冷）' , price :290}],
        tempuralist : [{name : '野菜かき揚げ' , price : 130},{name : 'かしわ天' , price : 140},{name : 'えび天' , price : 150},{name : 'いか天' , price : 110},{name : 'さつまいも天' , price : 100},{name : 'なす天' , price : 110},{name : 'かぼちゃ天' , price : 100},{name : 'ちくわ天' , price : 110},{name : '半熟玉子天' , price : 120}],
        toppinglist : [{name : '大根おろし' , price : 70},{name : '明太子' , price : 70},{name : 'きつねあげ' , price : 130},{name : 'とろろ' , price : 70},{name : '温泉玉子' , price : 70},{name : '生卵' , price : 70}],
        otherlist : [{name : '天丼用ごはん' , price : 130},{name : 'いなり' , price : 100},{name : '鮭（おにぎり）' , price : 130},{name : '梅（おにぎり）' , price : 130},{name : '明太子（おにぎり）' , price : 130},{name : 'こんぶ（おにぎり）' , price : 130}]
    },
    methods : {
        nextpage : function(){
            this.page = this.page + 1;
        },
        disprice : function(){
            if(this.coupon.name.indexof('うどん半額') === -1){
                tempuralist = tempuralist.map(it => {
                    return  {
                        name : it.name,
                        price : it.price - this.coupon.price
                    }
                })
            }else if(this.coupon.condition === 'うどん'){

            }
        }
    }
})