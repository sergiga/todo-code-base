<template>
  <div>
    <filter-selector :filters="filters" @filterSelected="filterSelected" />
    <todo-form @addTodo="addTodo" />
    <ul class="list-container">
      <li v-for="todo in todos"
        :key="todo.id"
        class="list-item">
        <input
          type="checkbox"
          :id="`completed-${ todo.id }`"
          class="completed"
          checked="false"
          v-model="todo.completed">
        <label :for="`completed-${ todo.id }`">
          <div class="box"></div>
        </label>
        <span class="todo-description">{{ todo.description }}</span>
        <button class="todo-action-remove" @click="removeTodo(todo.id)"></button>
      </li>
    </ul>
  </div>
</template>

<script>
import FilterSelector from '@/components/FilterSelector';
import TodoForm from '@/components/TodoForm';

export default {
  name: 'todo-list',
  components: {
    FilterSelector,
    TodoForm,
  },
  data() {
    return {
      nextId: 0,
      todos: [],
      filters: [
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
      ],
      filteredBy: 0,
    };
  },
  methods: {
    addTodo(todo) {
      const newTodo = Object.assign({}, todo, {
        id: this.nextId,
        completed: false,
      });
      this.todos.push(newTodo);
      this.nextId += 1;
    },
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id);
    },
    filterSelected(id) {
      this.filteredBy = id;
    },
  },
};
</script>

<style scoped>
.list-container {
  list-style: none;
  padding: 0;
  margin: 0;
}

.list-item {
  display: flex;
  align-items: center;
  font-size: 1.4em;
  padding: 10px 0;
  user-select: none;
}

.completed {
  display: none;
}

.completed + label {
  position: relative;
  display: inherit;
  top: 0;
  left: 0;
  margin-right: 20px;
}

[type="checkbox"] + label::after {
  content: '';
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 1.3em;
  line-height: 0.8;
  color: #4FC08D;
}

[type="checkbox"]:not(:checked) + label::after {
  content: '';
}

[type="checkbox"]:checked + label:after {
  content: '✔';
}

label .box {
  display: inline-block;
  width: 26px;
  height: 26px;
  border-radius: 2px;
  border: 2px solid #AEAEAE;
}

[type="checkbox"]:checked + label .box {
  border: 2px solid #4FC08D;
}

.todo-description {
  flex: 1;
}

.todo-action-remove {
  height: 30px;
  border: none;
  cursor: pointer;
  background-color: transparent;
}

.todo-action-remove::after {
  content: '\2718';
  position: relative;
  top: 2px;
  font-size: 2em;
  line-height: 0.8;
  color: #F44336;
}
</style>
