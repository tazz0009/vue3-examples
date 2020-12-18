<template>
  <PropsProvideC />
</template>

<script>
import PropsProvideC from "./PropsProvideC";
import { provide, ref } from "vue";

export default {
  components: ["PropsProvideC"],
  setup() {

    const age = ref(30);

    const updateAge = () => age.value++;

    provide('age', age);
    provide('updateAge', updateAge);
    return { PropsProvideC };
  },
}
</script>

<style>

</style>