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

      <ul v-show="zhuang==null">
          <li v-for="item,index in list" >
          <input type="checkbox" v-model="item.flag" >
          {{ item.name }}
        </li>
        
        
      </ul>

      <ul v-show="zhuang==false">
        <li v-for="item,index in list" v-show="item.flag==false">
          <input type="checkbox" v-model="item.flag" @click="flag=true">
          {{ item.name }}
        </li>
      </ul>

      
        <ul v-show="zhuang==true">
        <li v-for="item,index in list" v-show="item.flag==true">
          <input type="checkbox" v-model="item.flag" @click="flag=false">
          {{ item.name }}
        </li>
      </ul>
      

      <div class="bun">
        <p @click="">无事项</p>
        <p @click="about=1,zhuang=null" :class="about==1?'ys':''" >查看所有</p>
        <p @click="about=2,zhuang=false" :class="about==2?'ys':''" >待完成</p>
        <p @click="about=3,zhuang=true" :class="about==3?'ys':''" >已完成</p>
        <p @click="about=4,list=[]" :class="about==4?'ys':''" >清空所有</p>
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
    value:'',
    ass:false,
   };
 },
 methods: {
  arr(){
    this.list.push({name:this.value,flag:false})
    this.value=''
  },
  ji(){
    this.ass=!this.ass
  }
 
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
    position: absolute;
    
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
      height: 40px;
      
      input{
        width: 200px;
        border: none;
        border-bottom: 3px dashed #ea7a52;
        height: 100%;
      }
      ::-webkit-input-placeholder{
        color: #ccc;
      }
      .but{
        border-radius: 5px;
        padding: 2px 10px;
        margin-left: 15px;
        position: relative;
        right: 10px;
        top: 10px;
      }
      .but:hover{
        font-size: 20px;
        transform: rotate(5deg);
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
ul{
  li{
    margin-top: 10px;
    padding: 10px 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
}
.tab{
  width: 100px;
}

</style>