<template>
  <div class="filter-container">
    <ul class="filter-list">
      <li v-for="filter in filters"
        :key="filter.id"
        :class="isSelected(filter.id)"
        @click="filterSelected(filter.id)">
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
      selected: 0,
    };
  },
  methods: {
    filterSelected(id) {
      this.selected = id;
      this.$emit('filterSelected', this.selected);
    },
    isSelected(id) {
      const className = this.selected === id
        ? ['filter-item', 'selected']
        : ['filter-item'];
      return className;
    },
  },
};
</script>

<style scoped>
</style>
