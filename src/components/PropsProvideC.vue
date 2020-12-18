<template>
  <div class="p-2 flex flex-col">
    <span> I am {{ foo }} years old. </span>
    <button @click="updateAge" class="border border-black p-2">update age</button>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  setup() {
    const foo = inject("age");
    const updateAge = inject("updateAge");

    return { foo, updateAge };
  },
};
</script>

<style></style>
