<template>
  <div class="m-2">
    <p>count: {{ count }}</p>
    <button @click="count++" class="border border-black rounded-md px-2">
      count update
    </button>
    <p>list: {{ list }}</p>
    <button
      @click="updateList(list)"
      class="border border-black rounded-md px-2"
    >
      list push
    </button>
    <p>readOnlyCount: {{ readOnlyCount }}</p>
    <button
      @click="readOnlyCount++"
      class="border border-black rounded-md px-2"
    >
      count update
    </button>
    <hr />
    <p>failCount: {{ failCount }}</p>
    <button @click="failCount++" class="border border-black rounded-md px-2">
      count update
    </button>
    <p>failList: {{ failList }}</p>
    <button
      @click="updateList(failList)"
      class="border border-black rounded-md px-2"
    >
      list push
    </button>
    <hr />
    <h1>출입문</h1>
    <p>{{ welcomMessage }}</p>
    <button @click="leave" class="border border-black rounded-md px-2">
      떠나기
    </button>
  </div>
</template>

<script>
// Reactivity API(reactive, ref, toRefs, readonly)
import {
  ref, // ref는 단순값(숫자, 문자열, 불린과 같은)을 담당한다.
  reactive, // reactive는 객체와 배열, 셋(Set) 과 같은 형태의 데이터들을 담당한다.
  readonly, // readonly의 경우 명칭 그대로 값이 바뀌지 않아야 하는 상황에 지정하며, Reactivity API로 감싸진 항목에 대해서만 작동한다.
  computed,
  watch,
} from "vue";

export default {
  setup() {
    // setup (prop, { attribute, slots, emit }) {
    const count = ref(0);
    const list = reactive([]);
    const readOnlyCount = readonly(count);

    const failCount = reactive(0); // 단순값을 지정해야 할 곳에 reactive를 사용했다. 값이 반영되지 않는다.
    const failList = ref([]); // 배열에 ref를 사용했다. 값이 반영되지 않는다.

    const state = reactive({
      name: "Dooly",
      visitCount: 0,
    });

    const updateList = (base) => base.push(Math.random());
    const welcomMessage = computed(() => `${state.name}님 환영합니다.`);
    const leave = () => (state.visitCount = 1);
    // const enter = () => (state.visitCount++);

    watch(
      () => state.visitCount,
      (value, prev) => {
        console.log(`${state.name}님 ${value}회 방문 ${prev}`);
      }
    );

    return {
      count,
      updateList,
      list,
      readOnlyCount,
      failCount,
      failList,
      welcomMessage,
      state,
      leave,
      //   enter,
    };
  },
};
</script>

<style></style>
