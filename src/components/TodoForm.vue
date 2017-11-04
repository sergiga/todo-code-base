<template>
  <form @submit.prevent="onSubmit">
    <input 
      type="text"
      placeholder="Introduce una tarea..."
      v-model="todo">

    <button type="submit">Añadir</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      todo: '',
    };
  },
  methods: {
    onSubmit() {
      if (this.todo) {
        this.$emit('addTodo', this.todo);
        this.todo = '';
      }
    },
  },
};
</script>

<style>
</style>
