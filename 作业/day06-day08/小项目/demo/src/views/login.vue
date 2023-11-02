<template>
    <div class="login">
        <div class="top" v-if="flag==true">
    <h2>账号密码登录</h2>
    <p class="p1">为了你的账号安全，请使用手机登录</p>
    <van-form @submit="onSubmit">
  <van-cell-group inset>
    <van-field
      v-model="inof.username"
      name="中国+86"
      label="中国+86"
      placeholder="请输入手机号"
      :rules="[{ required: true, message: '手机号错误' }]"
    />
    <van-field
      v-model="inof.password"
      type="password"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button style="background-color:#98cfbe ; border: none;"  block type="primary" native-type="submit">
      登录
    </van-button>
  </div>
</van-form>
<div class="box">
    <p @click="flag=false">验证码登录</p>
    <div class="box1">
    <p class="wang">忘记密码</p>
    <p @click="zc">免费注册</p>
    </div>
</div>
        </div>





        <div class="top" v-if="flag==false">
    <h2>验证码登录</h2>
    <p class="p1">为了你的账号安全，请使用手机登录</p>
    <van-form @submit="zhuce">
  <van-cell-group inset>
    <van-field
      v-model="name"
      name="中国+86"
      label="中国+86"
      placeholder="请输入手机号"
      :rules="[{ required: true, message: '手机号错误' }]"
    />
    <van-field
      v-model="yzm"
      type="password"
      placeholder="请输入4位验证码"
      :rules="[{ required: true, message: '验证码错误' }]"
    >
    <template #button>
        <p>发送验证码</p>
      <!-- <van-button size="small" type="primary">发送验证码</van-button> -->
    </template>
    </van-field>
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button style="background-color:#98cfbe ; border: none;"  block type="primary" native-type="submit">
      登录
    </van-button>
  </div>
</van-form>
<div class="box">

    <p @click="flag=true">密码登录</p>
    <p @click="zc">免费注册</p>

</div>
        </div>
        <div class="buttom">
           <div class="butt">
        <van-checkbox v-model="checked" checked-color="#17a783"></van-checkbox>
        <p>阅读并同意<span>《用户协议》</span>和<span>《隐私政策》</span></p>
    </div> 
        </div>
    
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import {loginAPI} from '../http/api'
import { ref } from 'vue';
const router=useRouter()
const flag=ref(false)
const inof=ref({
  username:'',
  password:'',
  // deviceId:'16983106199973322818',
  // deviceName:'pc'
})
const username =ref('')
const password=ref('')
const name=ref('')
const yzm=ref('')
const checked=ref(false)
const onSubmit=()=>{
  loginAPI(inof.value).then(res=>{
    console.log(res);
    
  })
}

const zhuce=()=>{

}

const zc=()=>{
    router.push('/zhuce')
}
</script>

<style lang="scss" scoped>
.login{
    padding: 20px;
    // height: 100vh;
}
h2{
    margin-bottom: 10px;
}
.p1{
    color: #939191;
}

.van-form{
    padding: 0px;
    .van-field{
        p{
    color: #5b93ef;
}
    }
}
.box{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    color: #7fb1f0;
    .box1{
        display: flex;
        justify-content: space-around;
        .wang{
            margin-right: 10px;
        }
    }
}
.buttom{
    position: fixed;
    bottom: 0px;
}
.butt{
    display: flex;
    justify-content: center;
    margin-left: 50px;
    p{
        margin-left: 5px;
        span{
            color: #82b1e9;
        }
    }
}
</style>