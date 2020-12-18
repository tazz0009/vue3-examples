<template>
  <div class="p-2">
    Search for :
    <input v-model="searchInput" @keydown="changeSearch" class="border border-black rounded-md" />
    <div class="mt-2">
      <p>Loading: {{ getEvents.loading.value }}</p>
      <p>Error: {{ getEvents.error.value }}</p>
      <p>Number of events: {{ getEvents.results.data }}</p>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import axios from "axios";
import usePromise from "./UsePromise";

export default {
  setup() {
    const timeout = ref("");
    const searchInput = ref("");

    const getEvents = usePromise(() =>
      axios.get(`https://reqres.in/api/users?page=2`)
    );

    // function changeSearch() {
    //   clearTimeout(timeout.value);
    //   timeout.value = setTimeout(() => {
    //     getEvents.createPromise();
    //   }, 500);
    // }
    // onMounted(async () => {
    //   const { data } = await axios.get(`https://reqres.in/api/users?page=2`);
    //   state.users = data;
    // });

    watch(searchInput, () => {
      clearTimeout(timeout.value);
      timeout.value = setTimeout(() => {
        getEvents.createPromise();
      }, 500);
    });
    return { getEvents, searchInput };
  },
};
</script>

<style></style>
