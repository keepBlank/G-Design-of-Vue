import Vue from 'vue';
import GButton from './g-button.vue';
import GIcon from './g-icon.vue';
import GButtonGroup from './g-button-group.vue';
import GInput from './g-input.vue';
import './svg'


// 全局注册组件
Vue.component('g-button', GButton);
Vue.component('g-icon', GIcon);
Vue.component('g-button-group', GButtonGroup);
Vue.component('g-input',GInput)

new Vue({
    el: '#app',
    data() {
        return {
            loading1: false,
            loading2: false,
            loading3: false
        };
    }
});

