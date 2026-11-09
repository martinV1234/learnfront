<script setup>
import { ref } from 'vue';
import Tabs from './tabs.vue';

import ToDo from './ToDo.vue';
import Modals from './Modals.vue';
import Important from './pages/Important.vue';
import Buttons from './Buttons.vue';

let tabTitles = ref([
  'ToDo',
  'Modals',
  'Important',
  'Buttons',
]);
let activeTab = ref(0);
let contents = [
  ToDo,
  Modals,
  Important,
  Buttons,
];
</script>

<template>
  <Tabs :titles="tabTitles" :active="activeTab" @change="activeTab = $event"></Tabs>
  <div class="container content mt-3">
    <component :is="contents[activeTab]"></component>
  </div>
</template>

<style></style>