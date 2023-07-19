const expect = chai.expect;
import Vue from 'vue';
import Row from '../src/g-row.vue';
import Col from '../src/g-col.vue';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Row', () => {
    it('存在', () => {
        expect(Row).to.exist;
    });
    it('接收 gutter 属性', () => {
        Vue.component('g-row', Row);
        Vue.component('g-col', Col);
        const div = document.createElement('div');
        document.body.appendChild(div)
        div.innerHTML =  `
            <g-row gutter="20">
                <g-col span="12"></g-col>
                <g-col span="12"></g-col>
            </g-row>
        `
        const vm = new Vue({
            el: div
        })
        console.log(vm.$el.outerHTML)
    });

});