<template>
  <div class="swiper">
      <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="v in banners.list" :key="v.title">
            <img width="100%" :src="v.image" :alt="v.title">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
</template>
<script>
import {Swiper, SwiperSlide, directive} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  props:{
    banners:Object
  },
  components:{
    Swiper,
    SwiperSlide
  },
  directives:{
    Swiper:directive
  },
  data(){
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay:{
          delay:2500,
          disableOnInteraction:false
        }
      }
    }
  },
  computed:{
      swiper(){
        return this.$refs.mySwiper.$swiper
      }
  },
  mounted() {
    this.swiper.slideTo(3, 1000, true)
  }
}
</script>

<style>

</style>