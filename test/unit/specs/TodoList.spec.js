import Vue from 'vue';
import TodoList from '@/components/TodoList';
import FilterSelector from '@/components/FilterSelector';
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

  it('initializes the filters data with default array', () => {
    const filters = [
      {
        id: 0,
        name: 'All',
      },
      {
        id: 1,
        name: 'Active',
      },
      {
        id: 2,
        name: 'Completed',
      },
    ];
    const defaultData = TodoList.data();
    expect(defaultData.filters).to.be.an('array').that.is.deep.equal(filters);
  });

  it('initializes the filteredBy data with 0', () => {
    const defaultData = TodoList.data();
    expect(defaultData.filteredBy).to.equal(0);
  });

  it('renders the FilterSelector component', () => {
    expect(wrapper.contains(FilterSelector))
      .to.be.true;
  });

  it('changes the filteredBy data on filterSelected event', () => {
    const filterSelectorWrapper = wrapper.find(FilterSelector);
    filterSelectorWrapper.vm.$emit('filterSelected', 1);

    expect(vm.filteredBy).to.equal(1);
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
      expect(el.querySelector('button.todo-action-remove')).to.exist;
    });
  });

  it('removes the todo on remove button click', () => {
    const todo = {
      id: 0,
      description: 'Testing 0...',
      completed: false,
    };
    const Constructor = Vue.extend(TodoList);
    vm = new Constructor({
      data: {
        todos: [todo],
      },
    }).$mount();

    expect(vm.todos).to.deep.equal([todo]);

    const button = vm.$el.querySelector('button.todo-action-remove');

    expect(button).to.exist;

    button.click();

    expect(vm.todos).to.be.an('array').that.is.empty;
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
});
