<template>
  <div>
    <van-tabbar route active-color="#20a884">
          <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
          <van-tabbar-item replace to="/search" icon="apps-o">分类</van-tabbar-item>
          <van-tabbar-item replace to="/search" icon="shopping-cart-o">购物车</van-tabbar-item>
          <van-tabbar-item replace to="/my" icon="contact-o">个人中心</van-tabbar-item>
        </van-tabbar>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item v-for="item,index in banner"><img :src="item.picUrl" alt=""></van-swipe-item>
</van-swipe>
<div class="box">
  <div class="box1"></div>
  <h4>商品列表</h4>
  <div class="box1"></div>
</div>
<ul>
  <li v-for="item,index in list">
    <img :src="item.pic" alt="">
    <div class="top">
      <p>{{ item.name }}</p>
    <div class="bun">
      <div class="zuo">
        <p class="p1"><span>￥</span><b>{{ item.minPrice }}</b></p>
        <p class="p2"><s>￥{{ item.originalPrice }}</s></p>
      </div>
      <div class="you">
        <button>购买</button>
      </div>
    </div>
    </div>
    
  </li>
</ul>
  </div>
</template>

<script lang="ts" setup>
import {bannerAPI,goodsAPI} from '../http/api'
import { ref } from 'vue';
const inof=ref({
  page:1,
  pageSize:10
})

const list=<any>ref([])

const banner:any=ref([])
bannerAPI().then(res=>{
  console.log(res);
  banner.value=res.data.data
})

goodsAPI(inof.value).then(res=>{
  console.log(res);
  list.value=res.data.data.result
})




</script>

<style lang="scss" scoped>
.van-swipe{
  img{
    width: 100%;
    height: 200px;
  }
}
.box{
  display: flex;
  justify-content: center;
  height: 40px;
  line-height: 40px;
  .box1{
    width: 40px;
    height: 10px;
    background-color: #e0dede;
    margin-top: 20px;
  }
  h4{
    margin: 0px 10px;
  }
}

ul{
  display: flex;
  flex-wrap: wrap;
  padding: 10px 10px;
  li{
    width: 50%;
    img{
      width: 100%;
    }
    .top{
      padding: 5px 10px;
      .bun{
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        .zuo{
          display: flex;
          .p1{
            color: #24a786;
            span{
              font-size: 15px;
            }
          }
          .p2{
            font-size: 12px;
            margin-top: 4px;
            color: #989595;
          }
        }
        .you{
          button{
            border: 1px solid #24a786;
            color: #24a786;
            border-radius: 5px;
            padding: 3px 7px;
          }
        }
      }
    }
  }
}
</style>