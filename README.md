# vue-cli - vuex - element
**从零开始搭建的一个demo，只是粗糙的实现功能而已，没有做具体的模块**

```
vue init webpack demo1
```

Use ESLint to lint your code? (Y/n) n
```
Should we run `npm install` for you after the project has been created? (recommended) (Use arrow keys)
Yes, use NPM
Yes, use Yarn
>No, I will handle that myself
```
使用淘宝镜像安装依赖
```
cd demo1 && cnpm i 
npm run dev
```
安装需要用到的模块vuex element-ui axios md5 

```
cnpm i --save vuex element-ui axios js-md5 
```

App.vue  只留下一个视口为一级路由做准备
```
<template>
  <div id="app">
    <router-view/>
  </div>
</template>
```
src/components/index下新建index.vue文件
```
<template>
  <div id="app" class="flex flex-v">
    <header class="flex flex-hc flex-vc"><h1>{{msg}}</h1></header>
    <main class="flex1">
      <div class="mainall">
        <router-view/>
      </div>
    </main>
    <footer class="flex flex-hsb flex-vc">
      <router-link to="/index/home">home</router-link>
      <router-link to="/index/cart">cart</router-link>
      <router-link to="/index/order">order</router-link>
      <router-link to="/index/mine">mine</router-link>
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
```
并创建相应的二级路由的文件home、cart、order、mine，其中class名为自己写的弹性盒子布局兼容性类名
-----------
src/login创建login.vue文件，并在router中配置为一级路由

...........................................................................




