<template>
  <div>
    <nav-bar class="nav-bar">
        <span slot="center">首页</span>
    </nav-bar>
    <div>
        <swiper :banners="banner" />
        <recommend :recommends="recommend" />
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Swiper from './childComps/Swiper'
import  Recommend from './childComps/Recommend'
import {getHomeMultidata} from 'network/home.js'
export default {
    name:'Home',
    data(){
        return {
            // result:null,
            banner:{},
            recommend:{},
        }
    },
    components:{
        NavBar,
        Swiper,
        Recommend
    },
    created(){
        getHomeMultidata().then(res=>{
            console.log(res)
            this.banner = res.data.banner;
            this.recommend = res.data.recommend;
        }).catch(err=>{
            console.log(err)
        })
    },
    methods:{
        // addUser(){
        //     this.$store.dispatch('aUpdateUser').then(data =>{
        //         console.log(data);
        //     }).catch(err =>{
        //         console.log(err);
        //     })
        // }
    }
}
</script>

<style>
.nav-bar{
    background: var(--color-tint);
    color: #fff;
    font-weight: 400;
}
</style>