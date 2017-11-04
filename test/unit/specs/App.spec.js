import App from '@/App';
import TodoList from '@/components/TodoList';
import { shallow } from 'vue-test-utils';

describe('App.vue', () => {
  it('should display the app header', () => {
    const wrapper = shallow(App);

    expect(wrapper.find('h1').text())
      .to.equal('¿Qué Hacer?');
  });

  it('renders the TodoList component', () => {
    const wrapper = shallow(App);

    expect(wrapper.contains(TodoList))
      .to.be.true;
  });
});
