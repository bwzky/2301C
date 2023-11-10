<template>
  <div class="home">
    <div class="box">
      <div class="uimg">
        <img src="../assets//Snipaste_2023-11-07_10-46-20.png" alt="">
      </div>
      <h3>~今天我需要做的事情~</h3>
      <div class="tian">
        <input type="text" v-model="value" placeholder="请输入未完成的list">
        <button class="but" @click="arr">添加</button>
      </div>
      <!-- 循环list数据显示全部，null显示全部 -->
      <ul v-show="zhuang==null">
          <li v-for="item,index in list" >
            <div class="tob">
              <input type="checkbox" v-model="item.flag" >
          {{ item.name }}
            </div>
          <p @click="del(index)">X</p>
        </li>
        
        
      </ul>
  <!-- 循环list数据显示带完成，false显示未完成 -->
      <ul v-show="zhuang==false">
        <li v-for="item,index in list" v-show="item.flag==false">
          <div class="tob">
              <input type="checkbox" v-model="item.flag" @click="true">
          {{ item.name }}
            </div>
          <p @click="del(index)">X</p>
        </li>
      </ul>

        <!-- 循环list数据显示已完成，true显示已完成 -->
        <ul v-show="zhuang==true">
        <li v-for="item,index in list" v-show="item.flag==true">
          <!-- 根据flag判断在哪里显示 -->
          <div class="tob">
              <input type="checkbox" v-model="item.flag" @click="false">
          {{ item.name }}
            </div>
          <p @click="del(index)">X</p>
        </li>
      </ul>
      

      <div class="bun">
        <p @click="">无事项</p>
        <!-- 点击查看所有 -->
        <p @click="about=1,zhuang=null" :class="about==1?'ys':''" >查看所有</p>
        <!-- 点击待完成 -->
        <p @click="about=2,zhuang=false" :class="about==2?'ys':''" >待完成</p>
        <!-- 点击已完成 -->
        <p @click="about=3,zhuang=true" :class="about==3?'ys':''" >已完成</p>
        <!-- 点击清空所有 -->
        <p @click="about=4,list=[]" :class="about==4?'ys':''" >清空所有</p>
      </div>

    </div>
  </div>
</template>

<script>
import '../assets/index.css'
export default {
 data() {
   return {
    list:JSON.parse(localStorage.getItem('list')) || [],
    xia:'',
    about:0,
    zhuang:false,
    value:'',
    ass:false,
   };
 },
 methods: {
  arr(){
    this.list.push({name:this.value,flag:false})
    this.value=''
  },
  del(index){
    this.list.splice(index, 1)
  }

 },
 computed: {},
 filters: {},
 watch: {
  //监听list数据本地存储
  list:{
    deep:true,
    handler(val){
      localStorage.setItem('list',JSON.stringify(val))
    }
  }
 }
};
</script>
