<template>
  <pre>{{ JSON.stringify(jsondata, null, 2) }}</pre>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return { jsondata: null, error: null };
  },
  mounted() {
    this.load();
  },
  methods: {
    async load() {
      try {
        const url = 'https://getallbooks-nerpgolc2q-uc.a.run.app'
        const res = await axios.get(url);
        this.jsondata = res.data;
      } catch (e) {
        this.error = e?.message || 'error';
      }
    }
  }
}
</script>
