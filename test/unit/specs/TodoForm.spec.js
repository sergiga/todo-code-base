import TodoForm from '@/components/TodoForm';
import { shallow } from 'vue-test-utils';

describe('TodoForm.vue', () => {
  let wrapper;
  let vm;

  beforeEach(() => {
    wrapper = shallow(TodoForm);
    vm = wrapper.vm;
  });

  it('should display the todo form', () => {
    expect(vm.$el.tagName)
      .to.equal('FORM');
  });

  it('should display an input', () => {
    expect(vm.$el.querySelector('input'))
      .to.exist;
  });

  it('should display a button', () => {
    expect(vm.$el.querySelector('button'))
      .to.exist;
  });

  it('should initialize body data to "\'\'"', () => {
    expect(vm.body).to.equal('');
  });

  it('should emit addTodo with body on submit if todo is not empty', (done) => {
    vm.body = 'Testing...';

    vm.$on('addTodo', (val) => {
      expect(val).to.equal(vm.body);
      done();
    });

    const button = wrapper.find('button');
    button.trigger('click');
  });

  it('should not emit addTodo on submit if todo is empty', (done) => {
    setTimeout(done, 5);
    vm.$on('addTodo', () => {
      done(new Error('addTodo should not be called'));
    });
    const button = wrapper.find('button');
    button.trigger('click');
  }).timeout(10);
});
