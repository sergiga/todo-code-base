import TodoForm from '@/components/TodoForm';
import { shallow } from 'vue-test-utils';

describe('TodoForm.vue', () => {
  let wrapper;
  let vm;

  beforeEach(() => {
    wrapper = shallow(TodoForm);
    vm = wrapper.vm;
  });

  it('displays the todo form container', () => {
    expect(vm.$el.tagName)
      .to.equal('DIV');

    expect(vm.$el.className)
      .to.equal('form-container');
  });

  it('displays the todo form', () => {
    expect(wrapper.find('form'))
      .to.exist;
  });

  it('displays an input', () => {
    expect(wrapper.find('input'))
      .to.exist;
  });

  it('displays a label with the content "Introduce una tarea..."', () => {
    expect(wrapper.find('label').text())
      .to.equal('Introduce una tarea...');
  });

  it('displays a button', () => {
    expect(wrapper.find('button'))
      .to.exist;
  });

  it('initializes description data to "\'\'"', () => {
    expect(vm.description).to.equal('');
  });

  it('should emit addTodo with todo on submit if todo is not empty', (done) => {
    vm.description = 'Testing...';

    vm.$on('addTodo', (val) => {
      expect(val).to.deep.equal({ description: vm.description });
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
  }).timeout(100);

  it('clears the input when the submit button is clicked', () => {
    vm.description = 'Testing...';

    const button = wrapper.find('button');
    button.trigger('click');

    expect(vm.description).to.equal('');
  });

  it('adds the \'has-text\' class to the input when it has text', () => {
    wrapper.setData({
      description: 'Testing...',
    });

    expect(wrapper.find('input#todo-input').hasClass('has-text')).to.be.true;
  });
});
