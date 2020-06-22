<template>
  <tab-bar>
    <tab-bar-item  pathRoute="/home">
      <div slot="item-text">首页</div>
      <div slot="item-icon">
        <img src="~assets/img/tabbar/home.svg" alt="">
      </div>
      <div slot="item-icon-active">
        <img src="~assets/img/tabbar/home-active.svg" alt="">
      </div>
    </tab-bar-item>
    <tab-bar-item pathRoute="/category">
      <div slot="item-text">分类</div>
      <div slot="item-icon">
        <img src="~assets/img/tabbar/favoriteslist.svg" alt="">
      </div>
      <div slot="item-icon-active">
        <img src="~assets/img/tabbar/favoriteslist-active.svg" alt="">
      </div>
    </tab-bar-item>
    <tab-bar-item pathRoute="'/cart">
      <div slot="item-text">购物车</div>
      <div slot="item-icon">
        <img src="~assets/img/tabbar/cart.svg" alt="">
      </div>
      <div slot="item-icon-active">
        <img src="~assets/img/tabbar/cart-active.svg" alt="">
      </div>
    </tab-bar-item>
    <tab-bar-item  pathRoute="/profile">
      <div slot="item-text">我的</div>
      <div slot="item-icon">
        <img src="~assets/img/tabbar/relationship.svg" alt="">
      </div>
      <div slot="item-icon-active">
        <img src="~assets/img/tabbar/relationship-active.svg" alt="">
      </div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  name: 'MainTabBar',
  components:{
    TabBar,
    TabBarItem
  },
}
</script>

<style scoped>

</style>
