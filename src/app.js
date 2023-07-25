import Vue from 'vue';
import GButton from './g-button.vue';
import GIcon from './g-icon.vue';
import GButtonGroup from './g-button-group.vue';
import GInput from './g-input.vue';
import './svg'
import GRow from './g-row.vue';
import GCol from './g-col.vue';
import GHeader from './g-header.vue';
import GLayout from './g-layout.vue';
import GSider from './g-sider.vue';
import GContent from './g-content.vue';
import GFooter from './g-footer.vue';
import GToast from './g-toast.vue';
import plugin from './plugin';

// 全局注册组件
Vue.component('g-button', GButton);
Vue.component('g-icon', GIcon);
Vue.component('g-button-group', GButtonGroup);
Vue.component('g-input',GInput)
Vue.component('g-row',GRow)
Vue.component('g-col',GCol)
Vue.component('g-header',GHeader)
Vue.component('g-layout',GLayout)
Vue.component('g-sider',GSider)
Vue.component('g-content',GContent)
Vue.component('g-footer',GFooter)
Vue.component('g-toast',GToast)
Vue.use(plugin)

new Vue({
    el: '#app',
    data() {
        return {
            loading1: false,
            loading2: false,
            loading3: false,
            message:'test v-model'
        };
    },
    created() {
    },
    methods:{
       showToast(){
           this.$toast('我是 toast')
       }
    }
});

