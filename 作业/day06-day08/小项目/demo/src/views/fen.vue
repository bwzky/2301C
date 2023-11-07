<template>
    <div>
    <van-tabbar route active-color="#20a884">
      <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/fen" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item replace to="/search" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/my" icon="contact-o">个人中心</van-tabbar-item>
    </van-tabbar>
    <van-row>
  <van-col span="6">
    <ul class="ul1">
        <li v-for="item,index in zuo"><p :class="apic==index?'ys':''" @click="add(index,item.id)">{{ item.name }}</p></li>
    </ul>
  </van-col>
  <van-col span="18">
    <ul class="zong">
        <li v-for="item,index in list">
            <img :src="item.pic" alt="">
            <p>{{ item.name }}</p>
            <p class="p1">￥ <b>{{ item.minPrice }}</b></p>
        </li>
    </ul>
  </van-col>
</van-row>


    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {allAPI,categoryAPI} from '../http/api'
const zuo:any=ref([])
const apic=ref(0)
const list=<any>ref({})

allAPI().then(res=>{
    console.log(res);
    zuo.value=res.data.data
})

let uid=ref(272693)

const add=(index:any,id:any)=>{
    apic.value=index
    uid.value=id
}

categoryAPI(uid.value).then(res=>{
        console.log(res.data.data.result);
        list.value=res.data.data.result
    })






</script>

<style lang="scss" scoped>
.ys{
border-left: 4px solid #1da784;
}

.ul1{
    li{
        margin-top: 20px;
        padding-left: 10px;
        p{
            padding-left: 5px;
        }
    }
}
.zong{
 display: flex;
 flex-wrap: wrap;   
 margin-bottom: 100px;
    li{
        width: 49%;
        margin-left: 2px;
        img{
            width: 100%;
            
        }
        .p1{
            color: #1da784;
        }
    }
}
</style>