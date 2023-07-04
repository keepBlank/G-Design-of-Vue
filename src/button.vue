<template>
    <button class='g-button' :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
        <g-icon name="loading" v-if="loading" class="loading icon"></g-icon>
        <g-icon v-if="icon && !loading" :name="icon" class="icon"></g-icon>
        <span class="content">
            <slot></slot>
        </span>
    </button>
</template>

<script>
export default {
    props: {
        icon: {},
        loading:{
          type: Boolean,
          default: false
        },
        iconPosition:{
            type: String,
            default: 'left',
            validator(value) {
                return !(value !== 'left' && value !== 'right');
            }
        }
    }
}
</script>

<style lang="scss">
@keyframes spin {
    0%{transform: rotate(0deg);}
    100%{transform: rotate(360deg)}
}
.g-button {
  font-size: var(--font-size);height: var(--button-height);
  padding: 0 .7em;border-radius: var(--border-radius);
  border: 1px solid var(--border-color);background: var(--button-bg);
  display: inline-flex;justify-content: center;align-items: center;vertical-align: middle;

  &:hover {border-color: var(--border-color-hover);}
  &:active {background-color: var(--border-active-bg);}
  &:focus {
    outline: none;
  }
  > .icon{order: 1;margin-right: .1em}
  > .content{order: 2;}
  &.icon-right {
      > .icon{order: 2;margin-right:0;margin-left: .1em}
      > .content{order: 1;}
  }
  .loading{
    animation: spin 1.5s linear infinite;
  }
}
</style>