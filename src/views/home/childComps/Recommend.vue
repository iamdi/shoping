<template>
  <div class="recommends">
      <div v-for="item in recommends.list" :key="item.title">
          <a :href="item.link">
              <img width="80%" :src="item.image" :alt="item.title">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name:"Recommends",
    props:['recommends'],

}
</script>

<style>
    .recommends{
        display: flex;
        padding: 10px 0 10px 0;
        border-bottom:8px solid #eeeeee ;
    }
    .recommends div{
        flex: 1;
        text-align: center;
    }
</style>