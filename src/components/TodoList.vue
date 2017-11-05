<template>
  <div>
    <todo-form @addTodo="addTodo" />
    <ul class="list-container">
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

export default {
  name: 'todo-list',
  components: {
    TodoForm,
  },
  data() {
    return {
      nextId: 0,
      todos: [],
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
  font-size: 1.4em;
  padding: 10px;
}
</style>
