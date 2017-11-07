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
.filter-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.filter-item {
  flex: 1;
  padding: 10px 0;
  cursor: pointer;
  font-size: 1.4em;
  font-weight: bold;
  text-transform: uppercase;
  text-align: left;
  color: #7C7C7C;
}

.filter-item.selected {
  color: #4FC08D;
}

.filter-item:hover {
  text-decoration: underline;
}

@media (max-width: 1100px) {
  .filter-list {
    display: flex;
  }

  .filter-item {
    text-align: center;
  }
}

@media (max-width: 768px) {
  .filter-list {
    display: initial;
  }

  .filter-item {
    padding: 0 0 10px 0;
    font-size: 1em;
  }
}
</style>
