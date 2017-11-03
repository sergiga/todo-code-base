<template>
  <form @submit.prevent="onSubmit">
    <input 
      type="text"
      placeholder="Introduce una tarea..."
      v-model="body">

    <button type="submit">Añadir</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      body: '',
    };
  },
  methods: {
    onSubmit() {
      if (this.body) {
        this.$emit('addTodo', this.body);
      }
    },
  },
};
</script>

<style>
</style>
