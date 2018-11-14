<template>
  <div id="app" class="flex flex-v">
    <header class="flex flex-hc flex-vc"><h1>{{ $store.state.msg }}</h1></header>
    <main class="flex1">
      <div class="mainall">
        <router-view/>
      </div>
    </main>
    <footer class="flex flex-hsb flex-vc">
      <router-link to="/index/home" @click.native="changehead">home</router-link>
      <router-link to="/index/cart" @click.native="changehead">cart</router-link>
      <router-link to="/index/order" @click.native="changehead">order</router-link>
      <router-link to="/index/mine" @click.native="changehead">mine</router-link>
    </footer>
  </div>
</template>

<script>

  export default {
    name: 'App' ,
    data () {
      return {
        msg: 'test'
      }
    } ,
    mounted () {
      let path = this.$route.path;
      if ( path.indexOf( "/home" ) !== -1 ) {
        this.$store.state.msg = "home"
      }else if ( path.indexOf( "/cart" ) !== -1 ) {
        this.$store.state.msg = "cart"
      }else if ( path.indexOf( "/order" ) !== -1 ) {
        this.$store.state.msg = "order"
      }else if ( path.indexOf( "/mine" ) !== -1 ) {
        this.$store.state.msg = "mine"
      }

    } ,
    methods: {
      changehead ( val ) {
        let str = val.currentTarget.innerHTML;
        this.$store.state.msg = str
      }
    }
  }
</script>

<style>
  html, body {
    height: 100%;
  }

  #app {
    height: 100%;
  }

  header {
    height: 5rem;
    border-bottom: 1px solid #999;
  }

  main {
    overflow: auto;
  }

  main::-webkit-scrollbar {
    display: none;
  }
.mainall{
  height:100%;
}
  footer {
    height: 5rem;
    border-top: 1px solid #999;
    /*padding:0 1.2rem;*/
  }

  footer a:not(:first-child) {
    border-left: 1px solid #999;
  }

  footer a {
    -webkit-box-flex: 1; /* OLD - iOS 6-, Safari 3.1-6 */
    -moz-box-flex: 1; /* OLD - Firefox 19- */
    -webkit-flex: 1; /* Chrome */
    -ms-flex: 1; /* IE 10 */
    flex: 1; /* NEW, Spec - Opera 12.1, Firefox 20+ */
    text-align: center;
  }
  .router-link-active{
    color:red;
  }
</style>

