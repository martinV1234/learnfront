<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <h1>All items</h1>
  <ul>
    <li v-for="item in props.items" :key="item.id">
      {{ item.text }}
      <input v-model="item.isDone" type="checkbox" />
    </li>
  </ul>
</template>
