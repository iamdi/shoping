<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="isActive">
            <slot name="item-icon"></slot>
        </div>
        <div v-else>
            <slot name="item-icon-active"></slot>
        </div>
        <div :style="isColor">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:"TabBarItem",
    props:{
        pathRoute:String,
        activeColor:{
            type:String,
            default:'HotPink '
        },
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.pathRoute) == -1
        },
        isColor(){
            return !this.isActive ? {color:this.activeColor}:{}
        }
    },
    methods:{
        itemClick(){
            if(this.$route.path.indexOf(this.pathRoute) == -1){
                this.$router.push(this.pathRoute)
            }
        }
    },
}
</script>

<style>
.tab-bar-item{
  flex: 1;
  height: 49px;
  width: 50px;
  text-align: center;
  font-size: 14px;
}
.tab-bar-item img{
    height: 24px;
    vertical-align:top;
}
</style>