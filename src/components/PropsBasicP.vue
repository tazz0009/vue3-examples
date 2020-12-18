<template>
  <PropsBasicC :age="20" />
</template>

<script>
import PropsBasicC from "./PropsBasicC";

export default {
  components: ["PropsBasicC"],
  setup() {
    return { PropsBasicC };
  },
}
</script>

<style>

</style>