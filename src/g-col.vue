<template>
  <div class="col" :class="[span &&`col-${span}`,offset && `offset-${offset}`]" :style="{paddingLeft: gutter/2 + 'px',paddingRight: gutter/2 + 'px'}">
    <div style="border: 2px solid green;height: 80px">
      <slot></slot>
    </div>
  </div>
</template>


<script>
export default {
  name: 'g-col',
  props: {
    span: {
      type: [Number, String]
    },
    offset:{
      type: [Number, String]
    },
  },
  data(){
    return{
      gutter:0
    }
  },
};

</script>


<style scoped lang="scss">
.col {
  width: 50%;
  height: 100px;
  $class-prefix: col-;
  //.col.col-1
  //.col.col-2
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width:  calc($n / 24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left:  calc($n / 24) * 100%;
    }
  }

}

</style>