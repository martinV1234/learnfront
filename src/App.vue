<script setup>
import { ref } from 'vue';
import Tabs from './tabs.vue';

import ToDo from './ToDo.vue';
import Modals from './Modals.vue';
import Important from './pages/Important.vue';

let tabTitles = ref([
  'ToDo',
  'Modals',
  'Important',
]);
let activeTab = ref(0);
let contents = [
  ToDo,
  Modals,
  Important,
];
</script>

<template>
  <Tabs :titles="tabTitles" :active="activeTab" @change="activeTab = $event"></Tabs>
  <div class="container content mt-3">
    <component :is="contents[activeTab]"></component>
  </div>
</template>

<style></style>