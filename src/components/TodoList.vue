<template>
  <div>
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
  top: 2px; 
  left: 4px;
  font-size: 1.3em;
  line-height: 0.9;
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
</style>
