<template>
    <div class="first">
      <el-button type="primary" @click="$router.push({ path: `/login` })">点击我退出</el-button>
      <h1>这块内容不需要打印</h1>
      <!--startprint-->
      <div class="content">
        洛杉矶覅文件方面阿斯蒂芬几千万么发阿斯蒂芬
        啊上的纠纷萨拉交电费啦爱上了大家飞机撒低级
        按时的经费爱丽丝大家佛尔螺丝钉解放拉斯达克
        洛杉矶覅文件方面阿斯蒂芬几千万么发阿斯蒂芬
        啊上的纠纷萨拉交电费啦爱上了大家飞机撒低级
        按时的经费爱丽丝大家佛尔螺丝钉解放拉斯达克
        洛杉矶覅文件方面阿斯蒂芬几千万么发阿斯蒂芬
        啊上的纠纷萨拉交电费啦爱上了大家飞机撒低级
        按时的经费爱丽丝大家佛尔螺丝钉解放拉斯达克
      </div>
      <!--endprint-->
      <h1>这块内容不需要打印</h1>
      <button @click="printClick">打印</button>
    </div>
</template>

<script>
  export default {
    name: "first",
    mounted(){
      let _self = this;
      var beforePrint = function() {
        console.log('Functionality to run before printing.');
      };

      var afterPrint = function() {
        window.location.reload()
      };

      if (window.matchMedia) {
        var mediaQueryList = window.matchMedia('print');
        mediaQueryList.addListener(function(mql) {
          if (mql.matches) {
            beforePrint();
          } else {
            afterPrint();
          }
        });
      }

      window.onbeforeprint = beforePrint;
      window.onafterprint = afterPrint;
    },
    methods:{
      logout(){
        this.$router.push({ path: `/login` })
      },
      printClick(){
        let bdhtml=document.getElementsByClassName("content")[0].innerHTML;
        let div = "<div style='height:500px;border:1px solid #ccc;background: red;color:#fff;font-size:30px;'>" +bdhtml +"</div>";
        window.document.body.innerHTML=div;
        window.print()
      }
    }
  }
</script>

<style scoped>

</style>
