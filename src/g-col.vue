<template>
  <div class="col" :class="[`col-${span}`,offset && `offset-${offset}`]">
    <slot></slot>
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
    }
  }
};

</script>


<style scoped lang="scss">
.col {
  width: 50%;
  height: 100px;
  background: #999;
  border: 1px solid red;

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