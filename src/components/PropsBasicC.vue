<template>
  <div class="p-2">I am {{ foo }} years old.</div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    age: {
      type: Number,
      default: 0,
      required: true,
      validator: function(value) {
        return value >= 0;
      },
    },
  },
  setup(props) {
    const foo = ref(props.age);

    return { foo };
  },
};
</script>

<style></style>
