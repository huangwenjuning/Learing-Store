<template>
<div class="goods">
  <div class="menu-wrapper">goods</div>
  <div class="foods-wrapper">foods</div>
</div>
</template>
<script>
export default {
  name: 'goods'
}
</script>
<style lang="stylus" scoped>
  .goods
    display flex
    position absolute
    top 174px
    bottom 46px
    width 100%
    overflow hidden
    .menu-wrapper
      flex: 0 0 80px
      width 80px
      background: #f3f5f7
    .food-wrapper
      flex: 0 0 80px;
</style>
