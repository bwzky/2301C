<template>
    <div>
        <van-tabbar route active-color="#20a884">
          <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
          <van-tabbar-item replace to="/search" icon="apps-o">分类</van-tabbar-item>
          <van-tabbar-item replace to="/search" icon="shopping-cart-o">购物车</van-tabbar-item>
          <van-tabbar-item replace to="/my" icon="contact-o">个人中心</van-tabbar-item>
        </van-tabbar>
        <div class="top">
            <div class="zuo">
                <div class="tou">

                </div>
                <!-- <img src="" alt=""> -->
            </div>
            <div class="you">
                <h2>登录/注册</h2>
            </div>
        </div>
        <div class="fen">
            <ul>
                <li>
                    <p>--</p>
                    <p>积分</p>
                </li>
                <li>
                    <p>--</p>
                    <p>优惠卷</p>
                </li>
                <li>
                    <p>--</p>
                    <p>积分</p>
                </li>
            </ul>
        </div>
        <div class="ding">
            <div class="t">
                <p>我得订单</p>
                <p>全部订单></p>
            </div>
            <ul>
                <li>
                    <p><van-icon name="pending-payment" size="25"/></p>
                    <p>待支付</p>
                </li>
                <li>
                    <p><van-icon name="tosend" size="25"/></p>
                    <p>代发货</p>
                </li>
                <li>
                    <p><van-icon name="logistics" size="25"/></p>
                    <p>待收货</p>
                </li>
                <li>
                    <p><van-icon name="comment-o" size="25"/></p>
                    <p>评价</p>
                </li>
                <li>
                    <p><van-icon name="after-sale" size="25"/></p>
                    <p>退款/售后</p>
                </li>
            </ul>
        </div>

        <div class="chang">
            <div class="t">
                <p>我得订单</p>
                <p>全部订单></p>
            </div>
            <ul>
                <li>
                    <p><van-icon name="balance-o" size="25"/></p>
                    <p>我的钱包</p>
                </li>
                <li>
                    <p><van-icon name="gift-o" size="25"/></p>
                    <p>积分兑换</p>
                </li>
                <li>
                    <p><van-icon name="coupon-o" size="25"/></p>
                    <p>优惠卷</p>
                </li>
                <li>
                    <p><van-icon name="location-o" size="25"/></p>
                    <p>地址</p>
                </li>
                <li>
                    <p><van-icon name="setting-o" size="25"/></p>
                    <p>设置</p>
                </li>
                <li>
                    <p><van-icon name="aim" size="25"/></p>
                    <p>主题</p>
                </li>
                <li>
                    <p><van-icon name="user-circle-o" size="25"/></p>
                    <p>我的设备</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.top{
    height: 180px;
    background-color: #20a884;
    display: flex;
    line-height: 180px;
    .zuo{
        width: 30%;
        display: flex;
        justify-content: center;
        margin-top: 50px;
        .tou{
            height: 80px;
            width: 80px;
            border-radius: 50px;
            background-color: #fff;
            
        }
    }
    .you{
        width: 70%;
        color: #fff;
    }
}
.fen{
    margin-top: 20px;
    ul{
       text-align: center;
        display: flex;
        justify-content: space-around;
        li{
            .van-icon{
                font-size: 20px;
            }
        }
    }
}
.ding{
    margin-top: 25px;
    .t{
        padding: 0px 25px;
        display: flex;
        justify-content: space-between;
    }
    ul{
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
        li{
            text-align: center;

        }
    }
    
}
.chang{
    margin-top: 25px;
    .t{
        padding: 0px 25px;
        display: flex;
        justify-content: space-between;
    }
    ul{
        display: flex;
        margin-top: 20px;
        flex-wrap: wrap;
        li{
            width: 25%;
            margin-top: 5px;
            text-align: center;

        }
    }
}
</style>