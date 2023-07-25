import GToast from './g-toast.vue';

export default {
    install(Vue,options){
        Vue.prototype.$toast = function (message){
            const Constructor = Vue.extend(GToast)
            let toast = new Constructor()
            toast.$slots.default = message
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}