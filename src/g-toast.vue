<template>
  <div class="toast">
    <slot v-if="!enableHtml"></slot>
    <div v-else v-html="$slots.default[0]">xxx</div>
    <div class="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">
      {{ closeButton.text }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'g-toast',
  props: {
    autoClose: {
      type: Boolean,
      default: false
    },
    autoCloseDelay: {
      type: Number,
      default: 50
    },
    closeButton: {
      type: Object,
      // 如果用户不传，那么选项的默认值是下面的default
      default: () => {
        return {
          text: '关闭',
          callback: undefined
        };
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    }
  },
  created() {
    console.log('enableHtml',this.enableHtml);
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close();
      }, this.autoCloseDelay * 1000);
    }
  },
  methods: {
    close() {
      this.$el.remove();
      this.$destroy();
    },
    onClickClose() {
      this.close();
      // 防止用户不传closeButton
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        // callback中可以回传比较重要的参数
        this.closeButton.callback(this);   // this === toast实例
      }
    },
    log() {
      console.log('toast组件的log方法');
    }
  }
};
</script>

<style scoped lang="scss">
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, .75);
.toast {position: fixed;top: 0;left: 50%;transform: translateX(-50%);font-size: $font-size;line-height: 1.8;
  height: $toast-height;display: flex;justify-content: center;align-items: center;background: $toast-bg;
  color: #fff;border-radius: 4px;box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);padding: 0 16px;

  .line {
    border-left: 1px solid #666;
    height: 100%;
    margin: 0 16px;
  }
}
</style>