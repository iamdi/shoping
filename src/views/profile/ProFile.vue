<template>
  <div>
      个人中心{{count}}
      <div>
          <button @click="addState">增加</button>
      </div>
  </div>
</template>

<script>
export default {
    computed:{
      count(){
        return this.$store.state.count
      }
    },
    methods:{
      addState(){
        this.$store.commit('increment')
      }
    }
}
</script>

<style>

</style>