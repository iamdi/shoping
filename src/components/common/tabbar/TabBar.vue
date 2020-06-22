<template>
  <div class="tag_bar">
      <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.tag_bar{
  display: flex;
  height: 49px;
  background-color: #f6f6f6;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -3px 1px rgba(100,100,100,.06);
  /* align-items: flex-end; */
}
</style>