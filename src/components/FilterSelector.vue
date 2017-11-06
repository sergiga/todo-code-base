<template>
  <div class="filter-container">
    <ul class="filter-list">
      <li v-for="(filter, i) in filters"
        :key="filter.id"
        :class="['filter-item', selected === i ? 'selected' : '']">
        {{ filter.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'filter-selector',
  props: {
    filters: Array,
  },
  data() {
    return {
      selected: -1,
    };
  },
};
</script>

<style scoped>
</style>
