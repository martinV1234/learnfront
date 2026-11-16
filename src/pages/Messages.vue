<script setup>
import Message from '../components/Message.vue';
</script>

<template>
  <div class="container content mt-3">
    <h1 class="title">Messages</h1>
    <Message title="Information" type="info">
      This is a reusable message component with a validated type.
    </Message>
    <Message title="Success" type="success">
      Your changes have been saved.
    </Message>
    <Message title="Warning" type="warning">
      Check the details before continuing.
    </Message>
    <Message title="Error" type="danger">
      Something went wrong. Please try again.
    </Message>
    <Message>
      A message can also be displayed without a title.
    </Message>
  </div>
</template>
