<template>
    <div class="second">
      {{ $store.state.person.name ? $store.state.person.name : '测试名字' }}
    </div>
</template>

<script>
  export default {
    name: "second"
  }
</script>

<style scoped>

</style>
