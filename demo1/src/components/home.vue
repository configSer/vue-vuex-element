<template>
  <div class="hello flex flex-v">
    <div class="tab flex flex-hsb flex-vc">
      <router-link to="/index/home/first">first</router-link>
      <router-link to="/index/home/second">second</router-link>
      <router-link to="/index/home/third">third</router-link>
    </div>
    <div class="flex1 second_page">
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App' ,
      }
    } ,
    methods: {} ,
    components: {} ,

  }
</script>

<style scoped>
  .hello {
    height: 100%;
  }

  .tab {
    height: 5rem;
    border-bottom: 1px solid #999;
  }

  .tab a:not(:first-child) {
    border-left: 1px solid #999;
  }

  .tab a {
    flex: 1;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
  }
.second_page>div{
  height:100%;
}
  .router-link-active {
    color: blue;
  }
</style>
