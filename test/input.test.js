import sinon from 'sinon';

const expect = chai.expect;
import Vue from 'vue';
import Input from '../src/g-input.vue';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.ok;
    });
    describe('props', () => {
        const Constructor = Vue.extend(Input);
        let vm;
        afterEach(() => {
            vm.$destroy();
        });
        it('接收value', () => {
            vm = new Constructor({
                propsData: {
                    value: 'test value'
                }
            }).$mount();
            const inputElement = vm.$el.querySelector('input');
            expect(inputElement.value).to.equal('test value');
        });
        it('接收disabled', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount();
            const inputElement = vm.$el.querySelector('input');
            expect(inputElement.disabled).to.equal(true);
        });
        it('接收readonly', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount();
            const inputElement = vm.$el.querySelector('input');
            expect(inputElement.readOnly).to.equal(true);
        });
        it('接收error', () => {
            vm = new Constructor({
                propsData: {
                    error: 'errorMessage'
                }
            }).$mount();
            const useElement = vm.$el.querySelector('use');
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error');
            const errorMessage = vm.$el.querySelector('.error-message');
            expect(errorMessage.innerText).to.equal('errorMessage');
        });
    });
    describe('events', () => {
        const Constructor = Vue.extend(Input);
        let vm;
        it('支持 change/input/focus/blur 事件', () => {
            ['change', 'input', 'focus', 'blur'].forEach((eventName) => {
                vm = new Constructor({}).$mount();
                const callback = sinon.fake();
                vm.$on(eventName, callback);
                // 触发input的change事件
                let event = new Event(eventName);
                Object.defineProperty(event, 'target',
                    {
                        value: {value: 'hi'},
                        enumerable: true
                    }
                );
                let inputElement = vm.$el.querySelector('input');
                inputElement.dispatchEvent(event);
                expect(callback).to.have.been.calledWith('hi');
            });
        });
    });
});