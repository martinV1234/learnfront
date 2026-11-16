<script setup>
import { computed } from 'vue';
import ItemList from '../ItemList.vue';
import { items } from '../items.js';

const importantItems = computed(() =>
  items.value.filter((item) => item.importance === 'high'),
);
</script>

<template>
  <div class="container content mt-3">
    <ItemList title="Important items" :items="importantItems" />
  </div>
</template>
