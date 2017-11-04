import TodoForm from '@/components/TodoForm';
import { shallow } from 'vue-test-utils';

describe('TodoForm.vue', () => {
  let wrapper;
  let vm;

  beforeEach(() => {
    wrapper = shallow(TodoForm);
    vm = wrapper.vm;
  });

  it('displays the todo form', () => {
    expect(vm.$el.tagName)
      .to.equal('FORM');
  });

  it('displays an input', () => {
    expect(vm.$el.querySelector('input'))
      .to.exist;
  });

  it('displays a button', () => {
    expect(vm.$el.querySelector('button'))
      .to.exist;
  });

  it('initializes todo data to "\'\'"', () => {
    expect(vm.todo).to.equal('');
  });

  it('should emit addTodo with todo on submit if todo is not empty', (done) => {
    vm.todo = 'Testing...';

    vm.$on('addTodo', (val) => {
      expect(val).to.equal(vm.todo);
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

  it('clears the input when the submit button is clicked', () => {
    vm.todo = 'Testing...';

    const button = wrapper.find('button');
    button.trigger('click');

    expect(vm.todo).to.equal('');
  });
});
