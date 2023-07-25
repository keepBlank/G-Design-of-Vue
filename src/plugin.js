import GToast from './g-toast.vue';

export default {
    install(Vue,options){
        // 实现toast方法
        Vue.prototype.$toast =  (message,toastOptions)=>{
            const Constructor = Vue.extend(GToast)
            let toast = new Constructor({
                propsData: toastOptions
            })
            toast.$slots.default = [message];
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}