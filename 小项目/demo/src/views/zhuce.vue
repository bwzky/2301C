<template>
    <div class="zhuce">
        <h2>免费注册</h2>
        <van-form @submit="onSubmit">
  <van-cell-group inset>
    <van-field
      v-model="username"
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
        <p style="color: #70a5ef;">发送验证码</p>
      <!-- <van-button size="small" type="primary">发送验证码</van-button> -->
    </template>
    </van-field>
    <van-field
      v-model="password"
      type="password"
      placeholder="请设置8-25位(数字)密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <van-field
      v-model="password"
      type="password"
      placeholder="再次确认密码"
      :rules="[{ required: true, message: '请输入密码' }]"
    />
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button style="background-color:#98cfbe ; border: none;"  block type="primary" native-type="submit">
      确定
    </van-button>
  </div>
</van-form>

<div class="buttom">
           <div class="butt">
        <van-checkbox v-model="checked" checked-color="#17a783"></van-checkbox>
        <p>阅读并同意<span>《用户协议》</span>和<span>《隐私政策》</span></p>
    </div> 
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const username =ref('')
const password=ref('')
const yzm=ref('')
const checked=ref(false)
const onSubmit=()=>{

}
</script>

<style lang="scss" scoped>
h2{
    padding: 10px;
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