<template>
  <div>
    <todo-form @addTodo="addTodo" />
    <ul>
      <li v-for="todo in todos"
        :key="todo.id"
        class="list-item">
        {{ todo.description }}
      </li>
    </ul>
  </div>
</template>

<script>
import TodoForm from '@/components/TodoForm';

let nextId = 0;

export default {
  name: 'todo-list',
  components: {
    TodoForm,
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    addTodo(todo) {
      const newTodo = Object.assign({}, todo, { id: nextId });
      this.todos.push(newTodo);
      nextId += 1;
    },
  },
};
</script>

<style>
</style>
