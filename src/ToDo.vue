<script setup>
import { computed, ref } from 'vue';
import ItemList from './ItemList.vue';
import { items } from './items.js';

const newItem = ref('');
const newImportance = ref('medium');
const importanceOrder = { high: 0, medium: 1, low: 2 };
let nextId = Math.max(...items.value.map((item) => item.id)) + 1;

function sortByImportance(itemList) {
  return [...itemList].sort(
    (a, b) => importanceOrder[a.importance] - importanceOrder[b.importance],
  );
}

function add() {
  if (newItem.value.trim() !== '') {
    items.value.push({
      id: nextId++,
      text: newItem.value.trim(),
      isDone: false,
      importance: newImportance.value,
    });
  }

  newItem.value = '';
}

const sortedItems = computed(() => sortByImportance(items.value));
const doneItems = computed(() => sortByImportance(items.value.filter((item) => item.isDone)));
const toDoItems = computed(() => sortByImportance(items.value.filter((item) => !item.isDone)));
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
        <div class="select">
          <select v-model="newImportance" aria-label="Item importance">
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
      </div>

      <div class="control">
        <button class="button is-info" @click="add">Add</button>
      </div>
    </div>

    <ItemList title="All items" :items="sortedItems" />
    <ItemList title="Done items" :items="doneItems" />
    <ItemList title="To do items" :items="toDoItems" />
  </div>
</template>

<style></style>
