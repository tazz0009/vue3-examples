<template>
  <div class="flex flex-col">
    <PropsProvideP />
  </div>
</template>

<script>
import PropsProvideP from "./components/PropsProvideP";
// import PropsBasicP from "./components/PropsBasicP";
// import CompoApi from "./components/CompoApi";
// import SlotExam from "./components/SlotExam";
// import UserList from "./components/UserList";
// import Watch from "./components/Watch";
// import LifeCycle from "./components/LifeCycle";

export default {
  components: ["PropsProvideP"],
  setup() {
    return { PropsProvideP };
  },
};
</script>

<style></style>
