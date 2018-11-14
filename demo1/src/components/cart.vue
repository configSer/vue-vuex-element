<template>
  <div>
    <div>{{ obj.name }}</div>
    <div>{{ obj.age }}</div>
    <div>{{ obj.weight }}</div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "cart" ,
    data () {
      return {
        obj: {}
      }
    } ,
    mounted () {
      this.obj = this.$store.state.person;
    }
  }
</script>

<style scoped>

</style>
