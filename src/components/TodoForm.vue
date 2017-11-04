<template>
  <div class="form-container">
    <form @submit.prevent="onSubmit">

    <div class="form-control">
      <input
        id="todo-input"
        type="text"
        v-model="todo">

      <label for="todo-input">Introduce una tarea...</label>

      <button type="submit">Añadir</button>
    </div>
  </form>
  </div>
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

<style scoped>
.form-control {
  position: relative;
  display: flex;
}

input, button {
  height: 45px;
  margin: 15px 0px;
  font-size: 1em;
  color: #555;
  border: 1px solid #7C7C7C;
}

input {
  flex: 1 1 auto;
  padding: 10px 20px 0 20px;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  border-right: none;
  box-sizing: border-box;
}

input:focus, input:focus ~ button {
  outline: none;
  border-color: #4FC08D;
}

label {
  font-weight: 100;
  font-size: 1em;
  position: absolute;
  pointer-events: none;
  left: 20px;
  top: 29px;
  -webkit-transition: all .18s ease;
  -o-transition: .18s ease all;
  transition: all .18s ease;
  color: #AEAEAE;
}

input:focus + label {
  top: 20px;
  bottom: 10px;
  left: 20px;
  font-size: .55em;
  opacity: 1;
}

button {
  flex: 0;
  min-width: 75px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left: none;
  color: #FFF;
  background-color: #4FC08D;
}
</style>
