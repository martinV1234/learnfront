<script setup>
import { computed, ref } from 'vue';
import ItemList from './ItemList.vue';

let i = 0;

const items = ref([
  { id: i++, text: 'Piim', isDone: false },
  { id: i++, text: 'Viin', isDone: true },
  { id: i++, text: 'Sai', isDone: false },
  { id: i++, text: 'Mac', isDone: true },
]);

const newItem = ref('');

function add() {
  if (newItem.value.trim() !== '') {
    items.value.push({
      id: i++,
      text: newItem.value.trim(),
      isDone: false,
    });
  }

  newItem.value = '';
}

const doneItems = computed(() => items.value.filter((item) => item.isDone));
const toDoItems = computed(() => items.value.filter((item) => !item.isDone));
</script>

<template>
  <div class="container content mt-3">
    <div class="field has-addons">
      <div class="control is-expanded">
        <input
          v-model="newItem"
          class="input"
          type="text"
          placeholder="Add an item"
          @keydown.enter="add"
        />
      </div>

      <div class="control">
        <button class="button is-info" @click="add">Add</button>
      </div>
    </div>

    <ItemList :items="items" />
    <h2>Done items: {{ doneItems.length }}</h2>
    <h2>To do items: {{ toDoItems.length }}</h2>
  </div>
</template>

<style></style>
