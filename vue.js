let Field = new Vue({
    el: '#udon',
    computed:{
      makeudon1 : function(){
          return this.udonlist.filter(item => item.nami < this.money && item.nami > this.money - 100)   
      },
      toppingsuggest : function(){
        const tmp = this.udonlistfilter.filter(item => item.price < this.money -100 && item.price > this.money - 100 - (item.interval * 2)).map( udon => {
            return this.toppinglistfilter.filter(item => item.price < this.money - udon.price && item.price > this.money - udon.price - (udon.interval * 2)).map( topping => {
                if(this.money - (udon.interval * 2) > topping.price + udon.price){
                    return {
                        name : udon.name + '（得）と' + topping.name,
                        price : Number(udon.price) + Number(topping.price) + (udon.interval * 2),
                        img : udon.image
                    }
                }else if(this.money - udon.interval > topping.price + udon.price){
                    return {
                        name : udon.name + '（大）と' + topping.name,
                        price : Number(udon.price) + Number(topping.price) + udon.interval,
                        img : udon.image
                    }
                }else{
                    return {
                        name : udon.name + '（並）と' + topping.name,
                        price : Number(udon.price) + Number(topping.price),
                        img : udon.image
                    }
                }
            })
        })
        const ret = []
        for(let i in tmp) {
            ret.push(...tmp[i])
        }
        return ret
      },
      udonsuggest : function(){
        return this.udonlistfilter.filter(item => item.price < this.money && item.price > this.money - (item.interval * 3)).map( it => {
            if(it.price < this.money && it.price > this.money - it.interval){
                return {
                    name : it.name + '（並）',
                    price : it.price,
                    img : it.img,
                    size : '並'
                }
            }else if(it.price < this.money - it.interval && it.price > this.money - (it.interval * 2)){
                return {
                    name : it.name + '（大）',
                    price : it.price + it.interval,
                    img : it.img,
                    size : '大'
                }
            }else if(it.price < this.money - (it.interval * 2) && it.price > this.money - (it.interval * 3)){
                return {
                    name : it.name + '（得）',
                    price : it.price + (it.interval * 2),
                    img : it.img,
                    size : '得'
                }
            }
        });
      },
      othersuggest : function(){
        return []
      },
      tempurasuggest : function(){
        const tmp = this.udonlistfilter.filter(item => item.price < this.money -100 && item.price > this.money - 100 - (item.interval * 2)).map( udon => {
            return this.tempuralistfilter.filter(item => item.price < this.money - udon.price && item.price > this.money - udon.price -300).map( tempura => {
                if(this.money - (udon.interval * 2) > tempura.price + udon.price){
                    return {
                        name : udon.name + '（得）と' + tempura.name,
                        price : Number(udon.price) + Number(tempura.price) + (udon.interval * 2),
                        img : udon.image
                    }
                }else if(this.money - udon.interval > tempura.price + udon.price){
                    return {
                        name : udon.name + '（大）と' + tempura.name,
                        price : Number(udon.price) + Number(tempura.price) + udon.interval,
                        img : udon.image
                    }
                }else{
                    return {
                        name : udon.name + '（並）と' + tempura.name,
                        price : Number(udon.price) + Number(tempura.price),
                        img : udon.image
                    }
                }
            })
        })
        const ret = []
        for(let i in tmp) {
            ret.push(...tmp[i])
        }
        return ret
      }
    },
    data: {
        i : 0,
        page : 1 ,
        money : null ,
        coupon : {name : 'defalut' , price : 'defalut' , condition : 'defalut'} ,
        selectudon : null,
        interval : 100,
        moneylist : [200,300,400,500,600,700,800,900],
        couponlist : [{ name : 'うどん100円引き', price : 100, condition : 'うどん'},{ name : 'うどん50円引き', price : 50, condition : 'うどん'},{ name : '天ぷら30円引き', price : 30, condition : '天'},{ name : '天ぷら50円引き', price : 50, condition : '天'},{ name : '天ぷら100円引き', price : 0, condition : '天'},{ name : '大根おろし無料', price : 70, condition : 'おろし'},{ name : '温玉無料', price : 70, condition : '温玉'},{ name : '野菜かき揚げ半額', price : 70, condition : '野菜かき揚げ天'},{ name : 'いなり半額', price : 50, condition : 'おいなり'},{ name : '期間限定クーポン（50円引き）', price : 50, condition : ''},{ name : '天丼用ごはん半額', price : 70, condition : '天丼用ごはん'},{ name : 'かしわ天無料', price : 140, condition : 'かしわ天'},{ name : '釜揚げの日（釜揚げうどん半額）', price : 'half', condition : '釜揚げうどん'},{ name : '期間限定うどん半額', price : 'half', condition : 'うどん'}],
        udonlist : [{name :'釜揚げうどん' , price :290, img : 'https://www.marugame-seimen.com/wp/wp-content/uploads/2018/07/udon-intro-pic01.png' , interval : 100 , status : '温' , in_allergy : '' , allergy : '小麦'},{name :'釜揚げ家族うどん' , price : 1260, img : 'https://www.marugame-seimen.com/wp/wp-content/uploads/2018/07/udon-intro-pic01.png' , interval : 100 , status : '温' , in_allergy : '' , allergy : '小麦'},{name :'釜玉うどん' , price :350, img : 'https://www.marugame-seimen.com/wp/wp-content/uploads/2018/07/udon-intro-pic02.png' , interval : 100 , status : '温' , in_allergy : '' , allergy : '小麦,卵'},{name :'明太釜玉うどん' , price :410, img : 'https://www.marugame-seimen.com/wp/wp-content/uploads/2018/07/udon-intro-pic03.png' , interval : 100 , status : '温' , in_allergy : 'えび,かに' , allergy : '小麦,卵'},{name :'とろろ醤油うどん' , price :350, img : 'https://www.marugame-seimen.com/wp/wp-content/uploads/2018/07/udon-intro-pic04.png' , interval : 100 , status : '両' , in_allergy : 'えび,かに' , allergy : '小麦'},{name :'ぶっかけうどん' , price :290, img : 'https://www.marugame-seimen.com/wp/wp-content/uploads/2018/07/udon-intro-pic05.png' , interval : 100 , status : '両' , in_allergy : '' , allergy : '小麦'},{name :'とろ玉うどん' , price :410, img : 'https://www.marugame-seimen.com/wp/wp-content/uploads/2018/07/udon-intro-pic06.png' , interval : 100 , status : '両' , in_allergy : '' , allergy : '小麦,卵'},{name :'おろし醤油うどん' , price :350, img : 'https://www.marugame-seimen.com/wp/wp-content/uploads/2018/07/udon-intro-pic07.png' , interval : 100 , status : '両' , in_allergy : '' , allergy : '小麦'},{name :'カレーうどん' , price :490, img : 'https://www.marugame-seimen.com/wp/wp-content/uploads/2018/07/udon-intro-pic08.png' , interval : 100 , status : '温' , in_allergy : '乳' , allergy : '小麦'},{name :'かけうどん' , price :290, img : 'https://www.marugame-seimen.com/wp/wp-content/uploads/2018/07/udon-intro-pic09.png' , interval : 100 , status : '温' , in_allergy : '' , allergy : '小麦'},{name :'ざるうどん' , price :290, img : 'https://www.marugame-seimen.com/wp/wp-content/uploads/2018/07/udon-intro-pic10.png' , interval : 100 , status : '冷' , in_allergy : '' , allergy : '小麦'}],
        udonlistfilter : [],
        tempuralist : [{name : '野菜かき揚げ天' , price : 130},{name : 'かしわ天' , price : 140},{name : 'えび天' , price : 150},{name : 'いか天' , price : 110},{name : 'さつまいも天' , price : 100},{name : 'なす天' , price : 110},{name : 'かぼちゃ天' , price : 100},{name : 'ちくわ天' , price : 110},{name : '半熟玉子天' , price : 120}],
        tempuralistfilter : [],
        toppinglist : [{name : '大根おろし' , price : 70},{name : '明太子' , price : 70},{name : 'きつねあげ' , price : 130},{name : 'とろろ' , price : 70},{name : '温泉玉子' , price : 70},{name : '生卵' , price : 70}],
        toppinglisfilter : [],
        otherlist : [{name : '天丼用ごはん' , price : 130},{name : 'いなり' , price : 100},{name : '鮭（おにぎり）' , price : 130},{name : '梅（おにぎり）' , price : 130},{name : '明太子（おにぎり）' , price : 130},{name : 'こんぶ（おにぎり）' , price : 130}],
        otherlistfilter : []
    },
    methods : {
        nextpage : function(){
            this.page = this.page + 1;
        },
        disprice : function(){
            if(this.coupon.price === 'half'){
                this.udonlistfilter = this.udonlist.map(it => {
                    if(it.name.indexOf(this.coupon.condition) === -1){
                        return  {
                            name : it.name,
                            price : it.price,
                            img : it.img,
                            interval : it.interval,
                            status : it.status,
                            in_allergy : it.in_allergy,
                            allergy : it.allergy
                        }
                    }else{
                        return  {
                            name : it.name,
                            price : it.price - 150,
                            img : it.img,
                            interval : 50,
                            status : it.status,
                            in_allergy : it.in_allergy,
                            allergy : it.allergy
                        }
                    }
                })
                this.tempuralistfilter = this.tempuralist;
                this.toppinglisfilter = this.toppinglist;
                this.otherlistfilter = this.otherlist;
            }else if(this.coupon.condition === 'うどん' || this.coupon.condition === ''){
                this.udonlistfilter = this.udonlist.map(it => {
                    if(it.name.indexOf(this.coupon.condition) === -1){
                        return  {
                            name : it.name,
                            price : it.price,
                            img : it.img,
                            interval : it.interval,
                            status : it.status,
                            in_allergy : it.in_allergy,
                            allergy : it.allergy
                        }
                    }else{
                        return  {
                            name : it.name,
                            price : it.price - this.coupon.price,
                            img : it.img,
                            interval : it.interval,
                            status : it.status,
                            in_allergy : it.in_allergy,
                            allergy : it.allergy
                        }
                    }
                })
                this.tempuralistfilter = this.tempuralist;
                this.toppinglistfilter = this.toppinglist;
                this.otherlistfilter = this.otherlist;
            }else if(this.coupon.condition === '天'){
                this.udonlistfilter = this.udonlist;
                this.tempuralistfilter = this.tempuralist.map(it => {
                    if(it.name.indexOf(this.coupon.condition) === -1){
                        return  {
                            name : it.name,
                            price : it.price,
                            in_allergy : it.in_allergy,
                            allergy : it.allergy
                        }
                    }else{
                        return  {
                            name : it.name,
                            price : it.price - this.coupon.price,
                            in_allergy : it.in_allergy,
                            allergy : it.allergy
                        }
                    }
                })
                this.toppinglistfilter = this.toppinglist;
                this.otherlistfilter = this.otherlist;
            }else if(this.coupon.condition === 'defalut'){
                this.udonlistfilter = this.udonlist;
                this.tempuralistfilter = this.tempuralist;
                this.toppinglistfilter = this.toppinglist;
                this.otherlistfilter = this.otherlist;
            }else{
                this.udonlistfilter = this.udonlist;
                this.tempuralistfilter = this.tempuralist;
                this.toppinglistfilter = this.toppinglist.map(it => {
                    if(it.name.indexOf(this.coupon.condition) === -1){
                        return  {
                            name : it.name,
                            price : it.price,
                            in_allergy : it.in_allergy,
                            allergy : it.allergy
                        }
                    }else{
                        return  {
                            name : it.name,
                            price : it.price - this.coupon.price,
                            in_allergy : it.in_allergy,
                            allergy : it.allergy
                        }
                    }
                })
                this.otherlistfilter = this.otherlist.map(it => {
                    if(it.name.indexOf(this.coupon.condition) === -1){
                        return  {
                            name : it.name,
                            price : it.price,
                            in_allergy : it.in_allergy,
                            allergy : it.allergy
                        }
                    }else{
                        return  {
                            name : it.name,
                            price : it.price - this.coupon.price,
                            in_allergy : it.in_allergy,
                            allergy : it.allergy
                        }
                    }
                })
            }
        },
        decmoney : function(){
            if(this.money > 200){
                this.money = this.money - 100;
            }
        },
        incmoney : function(){
            if(this.money < 900){
                this.money = this.money + 100;
            }
        }
    }
})