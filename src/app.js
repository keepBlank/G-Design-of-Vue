import Vue from "vue";
import Button from "./button.vue";
import Icon from "./icon.vue";
import GButtonGroup from "./g-button-group.vue";

// 全局注册组件
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group',GButtonGroup)

new Vue({
    el: '#app',
    data() {
        return {
            loading1: false,
            loading2: false,
            loading3: false
        }
    }
})