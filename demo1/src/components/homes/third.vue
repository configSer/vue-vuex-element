<template>
  <div class="page">
    <div class="header">
      <div class="left">div1</div>
      <div class="right">div2</div>
    </div>
    <div class="main">
      <div class="left">div3</div>
      <div class="right">div4</div>
    </div>
    <div class="bottom">
      <div class="left">
        <div>div5</div>
        <div>div6</div>
      </div>
      <div class="right">
        <div>div8</div>
        <div>div9</div>
        <div>div10</div>
      </div>
      <div class="center">div7</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "third"
  }
</script>

<style scoped lang="scss">
  * {
    margin: 0;
    padding: 0;
    text-align: center;
  }
  .header .left,.main .left ,.header .right, .main .right,.center,.left>div,.right>div{
    border:2px solid #fff;
    box-sizing:border-box;
  }
  .left,.right,.center{
    background:#00ff00;
    height:100%;
    display:inline-block;
  }
  .header{
    height:50px;
    line-height:50px;
  }
  .main {
    height:100px;
    line-height:100px;
  }
  .left{
    width:30%;
  }
  .right{
    width:70%;
    float:right;
  }
  .bottom{
    height:300px;
   .left{
     width:30%;
     line-height:150px;
     >div{
       height:50%;
     }
   }
    .right{
      width:40%;
      float:right;
      line-height:100px;
      >div{
        height:33.3333333%;
      }
    }
    .center{
      width:30%;
      float:right;
      line-height:300px;
    }
  }

</style>
