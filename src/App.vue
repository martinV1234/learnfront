<script setup>
import { ref } from 'vue';

const isPrimary = ref(true);
const text = ref('');
</script>

<template>
  <main class="container">
    <button
      class="button"
      :class="{ 'is-primary': isPrimary, 'is-warning': !isPrimary }"
      @click="isPrimary = !isPrimary"
    >
      Click me!
    </button>

    <input v-model="text" class="input" type="text" />
    <h1>{{ text.split('').reverse().join('') }}</h1>
  </main>
</template>
