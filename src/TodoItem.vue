<template>
  <li>{{ todo.text }}</li>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    item: Object,
  },
  setup(props) {
    const todo = ref(props.item);
    return { todo };
  },
};
</script>

<style></style>
