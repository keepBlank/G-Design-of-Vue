import Vue from 'vue';
import Button from './button.vue';
import GIcon from './icon.vue';
import GButtonGroup from './g-button-group.vue';
import {expect} from 'chai';

// 全局注册组件
Vue.component('g-button', Button);
Vue.component('g-icon', GIcon);
Vue.component('g-button-group', GButtonGroup);

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

import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies)
// 单元测试按钮有icon
{
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'setting'
        }
    });
    // mount到内存中
    vm.$mount();
    let useElement = vm.$el.querySelector('use');
    let href = useElement.getAttribute('xlink:href');
    expect(href).to.eq('#i-setting');
    vm.$el.remove();
    vm.$destroy();
}

// 单元测试按钮有loading状态
{
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData: {
            icon: 'setting',
            loading: true
        }
    });
    // mount到内存中
    button.$mount();
    let useElement = button.$el.querySelector('use');
    let href = useElement.getAttribute('xlink:href');
    expect(href).to.eq('#i-loading');
    button.$el.remove();
    button.$destroy();
}
try {
// 单元测试svg的样式order
    {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon: 'setting'
            }
        });
        // mount到内存中
        vm.$mount(div);
        let svg = vm.$el.querySelector('svg');
        let order = window.getComputedStyle(svg).order;
        expect(order).to.eq('1');
        vm.$el.remove();
        vm.$destroy();
    }

// 单元测试按钮的iconPosition
    {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon: 'setting',
                iconPosition: 'right'
            }
        });
        // mount到内存中
        vm.$mount(div);
        let svg = vm.$el.querySelector('svg');
        let order = window.getComputedStyle(svg).order;
        expect(order).to.eq('2');
        vm.$el.remove();
        vm.$destroy();
    }

// 单元测试 监听按钮的click事件
    {
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon: 'setting',
                iconPosition: 'right'
            }
        });
        vm.$mount();
        let spy = chai.spy(function () {
        })
        vm.$on('click', spy);
        let button = vm.$el;
        button.click();
        expect(spy).to.have.been.called()
    }
}catch (error){
    window.errors = [error]
}finally {
    window.errors&&window.errors.forEach((error)=>{
        console.error(error.message);
    })
}