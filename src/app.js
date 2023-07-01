import Vue from "vue";
import Button from "./button.vue";
import Icon from "./icon.vue";

// 全局注册组件
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)

new Vue({
    el: '#app'
})