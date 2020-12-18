<template>
  <div>
    Search for <input v-model="searchInput" @keydown="changeSearch" />
    <div>
      <p>Number of event : {{ result }}</p>
      <p>searchResult : {{ searchResult }}</p>
      <p>newVal : {{ newText }}</p>
      <p>oldVal : {{ oldText }}</p>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  setup() {
    const searchInput = ref("");
    const searchResult = ref("");
    const newText = ref("");
    const oldText = ref("");
    const timeout = ref("");
    const result = ref(0);

    // watchEffect(() => {
    //   result.value = searchInput.value.length;
    // });

    watch(searchResult, (newVal, oldVal) => {
      newText.value = newVal;
      oldText.value = oldVal;
    });

    function changeSearch(e) {
      clearTimeout(timeout.value);
      timeout.value = setTimeout(() => {
        searchResult.value = e.target.value;
      }, 500);
    }
    return {
      searchInput,
      result,
      changeSearch,
      searchResult,
      newText,
      oldText,
    };
  },
};
</script>

<style></style>
