<template>
    <div>
<img :src="list.pic" alt="">
<div class="bun">
    <p class="p1">￥<span>{{ list.amountSingleBase }}.00</span></p>
<p class="p2">价格 <s>{{ list.amountSingle }}.00</s></p>
<p class="p3"><b>{{ list.goodsName }}</b> </p>
<p class="p4">{{ list.property }}</p>
<div class="box">
    <p>运费/包邮</p>
    <p>剩余{{ list.amount }}</p>
</div>
</div>

<van-action-bar>
  <van-action-bar-icon icon="thumb-circle-o" text="首页" />
  <van-action-bar-icon icon="chat-o" text="客服" />
  <van-action-bar-icon icon="shop-o" text="店铺" />
  <van-action-bar-button color="#daf6f0" type="warning" text="加入购物车" />
  <van-action-bar-button color="#20a884" type="danger" text="立即购买" />
</van-action-bar>

    </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import{reputation} from '../http/api'
import { ref } from 'vue';
const route=useRoute()
const list:any=ref({})
const inof:any=ref({
    goodsId:route.query.id,
    page:1,
    pageSize:1
})

reputation(inof.value).then(res=>{
    console.log(res);
    list.value=res.data.data.result[0].goods
    console.log(list);
    
})

</script>

<style lang="scss" scoped>
img{
    width: 100%;
}
.p1{
    color: #12a37e;
    span{
        font-size: 25px;
    }
}
.p2{
    color: #bcbcbc;
    font-size: 15px;
}
.p3{
    margin-top: 10px;
}
.p4{
    color: #bcbcbc;
    margin-top: 5px;
}
.box{
    display: flex;
    justify-content: space-between;
    color: #bcbcbc;
    margin-top: 20px;
}
.bun{
    padding: 0px 15px;
}
</style>