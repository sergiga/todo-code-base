<template>
  <div id="app">
    <h1>¿Qué Hacer?</h1>
    <todo-list />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList';

export default {
  components: {
    TodoList,
  },
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 1100px;
  margin: auto;
  margin-top: 60px;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@media (max-width: 1100px) {
  #app {
    width: auto;
    margin: 60px 60px 0 60px;
  } 
}

@media (max-width: 768px) {
  #app {
    margin: 60px 20px 0 20px;
  } 
}
</style>
