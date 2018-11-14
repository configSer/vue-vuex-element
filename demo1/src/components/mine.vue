<template>
    <div>
      <div>{{ $store.state.count }}</div>
      <el-button type="danger" @click="$store.commit('increment')">点击++</el-button>
      <el-button type="default" @click="$store.commit('decrement')">点击 - -</el-button>
      <el-button type="default" @click="$store.commit('incrementAsync')">点击异步++</el-button>
      <div>{{ $store.getters.doneTodos }}</div>
      <div>{{ $store.getters.retDone }}</div>
    </div>
</template>

<script>
  export default {
    name: "mine",
  }
</script>

<style scoped>

</style>
