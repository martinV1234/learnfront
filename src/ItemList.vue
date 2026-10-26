<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const importanceClasses = {
  high: 'has-text-danger',
  medium: 'has-text-warning-dark',
  low: 'has-text-success',
};
</script>

<template>
  <h1>{{ props.title }}</h1>
  <ul>
    <li v-for="item in props.items" :key="item.id">
      <span :class="importanceClasses[item.importance]">{{ item.text }}</span>
      <input v-model="item.isDone" type="checkbox" />
    </li>
  </ul>
</template>
