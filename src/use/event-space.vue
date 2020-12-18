<script>
import { computed, reactive, toRefs } from "vue";

export default function useEventSpace() {
  const event = reactive({
    capacity: 4,
    attending: ["Tim", "Bob", "Joe"],
    spacesLeft: computed(() => {
      return event.capacity - event.attending.length;
    }),
  });

  function IncreaseCapacity() {
    event.capacity++;
  }

  return { ...toRefs(event), IncreaseCapacity };
}
</script>
