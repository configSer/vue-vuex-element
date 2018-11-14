<template>
    <div>
      <div>
        {{ $store.state.count }}
      </div>
      <el-button type="success" @click="add">按钮</el-button>
      <el-button type="success" @click="del">按钮</el-button>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: "order",
    data(){
      return {

      }
    },
    methods:{
      ...mapActions({
        add:'increment',
        del:'decrement'
                    })
    }
  }
</script>

<style scoped>

</style>
