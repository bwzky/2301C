<template>
  <div class="home">
    <div class="box">
      <div class="uimg">
        <img src="../assets//Snipaste_2023-11-07_10-46-20.png" alt="">
      </div>
      <h3>~今天我需要做的事情~</h3>
      <div class="tian">
        <input type="text" v-model="value" placeholder="请输入未完成的list">
        <button @click="arr">添加</button>
      </div>


      <div class="bun">
        <p @click="">3事项</p>
        <p @click="about=1,zhuang=true" :class="about==1?'ys':''" >查看所有</p>
        <p @click="about=2,zhuang=false" :class="about==2?'ys':''" >待完成</p>
        <p @click="about=3,zhuang=null" :class="about==3?'ys':''" >已完成</p>
        <p @click="about=4" :class="about==4?'ys':''" >清空所有</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
 data() {
   return {
    list:JSON.parse(localStorage.getItem('list')) || [],
    xia:'',
    about:0,
    zhuang:false,
    value:''
   };
 },
 methods: {
  arr(){
    this.list.push({name:this.value,flag:false})
  },
 
 },
 computed: {},
 filters: {},
 watch: {
  list:{
    deep:true,
    handler(val){
      localStorage.setItem('list',JSON.stringify(val))
    }
  }
 }
};
</script>

<style lang="scss" scoped>
.home{
  background-color: #f2b8b4;
  display: flex;
  align-content: center;
  justify-content: center;
  height: 100vh;
  .box{
    height: 600px;
    width: 300px;
    border-radius: 5px;
    margin-top: 50px;
    background-color: #fff;
    padding: 10px 30px;
    
    .uimg{
      display: flex;
      justify-content: center;
      align-content: center;
    img{
      width: 200px;
      height: 100px;
    }
    }
    h3{
      text-align: center;
    }
    .tian{
      input{
        width: 215px;
        border: none;
        border-bottom: 3px dashed #ea7a52;
      }
      ::-webkit-input-placeholder{
        color: #ccc;
      }
      button{
        border-radius: 5px;
        padding: 3px 15px;
        margin-left: 15px;
      }
    }
    .bun{
      display: flex;
      justify-content: space-between;
      p{
        font-size: 12px;
      }
    }
    
  }
}
.ys{
  background-color: #ea7a52;
  padding: 2px 10px;
  color: #fff;
  border-radius: 5px;
}
</style>