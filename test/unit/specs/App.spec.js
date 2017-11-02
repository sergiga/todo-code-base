import App from '@/App';
import { shallow } from 'vue-test-utils';

describe('App.vue', () => {
  it('should display the app header', () => {
    const wrapper = shallow(App);
    const { vm } = wrapper;

    expect(vm.$el.querySelector('h1').textContent)
      .to.equal('¿Qué Hacer?');
  });
});
