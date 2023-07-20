const expect = chai.expect;
import Vue from 'vue';
import Col from '../src/g-col.vue';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Col', () => {
    it('存在', () => {
        expect(Col).to.exist;
    });
    it('接收 span 属性',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData:{
                span: 1
            }
        }).$mount(div)
        console.log(vm.$el)
        expect(vm.$el.classList.contains('col-1')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 offset 属性',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData:{
                offset: 1
            }
        }).$mount(div)
        expect(vm.$el.classList.contains('offset-1')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 ipad 属性',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData:{
                ipad: {span:1,offset:2}
            }
        }).$mount(div)
        expect(vm.$el.classList.contains('col-ipad-1')).to.equal(true)
        expect(vm.$el.classList.contains('offset-ipad-2')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 narrowPc 属性',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData:{
                narrowPc: {span: 4,offset: 1}
            }
        }).$mount(div)
        expect(vm.$el.classList.contains('col-narrow-pc-4')).to.equal(true)
        expect(vm.$el.classList.contains('offset-narrow-pc-1')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 pc 属性',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData:{
                pc: {span:6,offset:2}
            }
        }).$mount(div)
        expect(vm.$el.classList.contains('col-pc-6')).to.equal(true)
        expect(vm.$el.classList.contains('offset-pc-2')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 widePc 属性',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData:{
                widePc: {span:8,offset:4}
            }
        }).$mount(div)
        console.log(vm.$el)
        expect(vm.$el.classList.contains('col-wide-pc-8')).to.equal(true)
        expect(vm.$el.classList.contains('offset-wide-pc-4')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
});