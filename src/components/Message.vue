<script setup>
defineProps({
  type: {
    type: String,
    default: 'info',
    validator(value) {
      return ['primary', 'link', 'info', 'success', 'warning', 'danger'].includes(value);
    },
  },
  title: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <article class="message" :class="`is-${type}`">
    <div v-if="title" class="message-header">
      <p>{{ title }}</p>
    </div>
    <div class="message-body">
      <slot />
    </div>
  </article>
</template>
