<template>
  <div class="home">
    <div class="box">
      <div class="uimg">
        <img src="../assets//Snipaste_2023-11-07_10-46-20.png" alt="">
      </div>
      <h3>~今天我需要做的事情~</h3>
      <div class="tian">
        <input type="text" placeholder="请输入未完成的list">
        <button>添加</button>
      </div>


      <div class="bun">
        <p v-for="item,index in list" @click="add(index)" :class="xia==index?'ys':''" >{{ item.name }}</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
 data() {
   return {
    list:[{name:'3事项'},{name:'查看所有'},{name:'待完成'},{name:'已完成'},{name:'清空所有'}],
    xia:'',
   };
 },
 methods: {
  add(index){
    this.xia=index
  }
 },
 computed: {},
 filters: {},
 watch: {}
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