import { ref } from "vue";

export default function usePromise(fn) {
  const results = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const createPromise = async () => {
    loading.value = true;
    error.value = null;
    results.value = null;

    try {
      const { data } = await fn();
      console.log("data : ", data);
      results.value = data;
    } catch (err) {
      error.value = err;
    } finally {
      setTimeout(() => {
        loading.value = false;
        console.log("aa");
      }, 2000);
    }
  };

  return { results, loading, error, createPromise };
}
