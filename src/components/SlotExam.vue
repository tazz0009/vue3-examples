<template>
  <NamedSlot>
    <template #header>
      Header
    </template>
    aaaaa
    <template #footer>
      Footer
    </template>
  </NamedSlot>
</template>

<script>
import NamedSlot from "./NamedSlot";
export default {
  components: ["NamedSlot"],
  setup() {
    return { NamedSlot };
  },
};
</script>

<style></style>
