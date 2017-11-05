import Vue from 'vue';
import TodoList from '@/components/TodoList';
import TodoForm from '@/components/TodoForm';
import { shallow } from 'vue-test-utils';

describe('TodoList.vue', () => {
  let wrapper;
  let vm;

  beforeEach(() => {
    wrapper = shallow(TodoList);
    vm = wrapper.vm;
  });

  it('renders itself', () => {
    expect(wrapper.name())
      .to.equal('todo-list');
  });

  it('initializes the todos data with empty array', () => {
    const defaultData = TodoList.data();
    expect(defaultData.todos).to.be.an('array').that.is.empty;
  });

  it('initializes the nextId data with 0', () => {
    const defaultData = TodoList.data();
    expect(defaultData.nextId).to.equal(0);
  });

  it('renders the TodoForm component', () => {
    expect(wrapper.contains(TodoForm))
      .to.be.true;
  });

  it('adds a "todo" on addTodo event', () => {
    const todoFormWrapper = wrapper.find(TodoForm);
    todoFormWrapper.vm.$emit('addTodo', { description: 'Testing...' });

    expect(vm.todos[0]).to.deep.equal({
      id: 0,
      description: 'Testing...',
      completed: false,
    });
  });

  it('adds an automated incremented id on addTodo event', () => {
    const todoFormWrapper = wrapper.find(TodoForm);
    todoFormWrapper.vm.$emit('addTodo', { description: 'Testing...' });
    todoFormWrapper.vm.$emit('addTodo', { description: 'Testing...' });

    expect(vm.todos[0]).to.deep.equal({
      id: 0,
      description: 'Testing...',
      completed: false,
    });

    expect(vm.todos[1]).to.deep.equal({
      id: 1,
      description: 'Testing...',
      completed: false,
    });
  });

  it('renders the todo items in "li" items', () => {
    const Constructor = Vue.extend(TodoList);
    vm = new Constructor({
      data: {
        todos: [
          {
            id: 0,
            description: 'Testing 0...',
            completed: false,
          },
          {
            id: 1,
            description: 'Testing 1...',
            completed: false,
          },
        ],
      },
    }).$mount();

    const els = Array.from(vm.$el.querySelectorAll('li.list-item'));

    els.forEach((el, i) => {
      expect(el.querySelector('input.completed')).to.exist;
      expect(el.querySelector('span').innerHTML.trim())
        .to.equal(`Testing ${i}...`);
      expect(el.querySelector('label')).to.exist;
    });
  });
});
