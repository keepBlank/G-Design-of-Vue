<!--suppress HtmlUnknownAttribute -->
<script>

export default ({
    name:'g-icon',
    props:['name']
})
</script>

<template>
<!--    为了防止与组件外面叫icon的名字冲突，所以叫g-icon，表示组件中的样式-->
    <svg class="g-icon">
        <use :xlink:href=`#i-${name}`></use>
    </svg>
</template>

<style lang="scss" scoped >
.g-icon {
  width: 1.5em;
  height: 1.5em;
}
</style>