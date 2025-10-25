<template>
  <pre>{{ pretty }}</pre>
</template>

<script>
import axios from 'axios'

export default {
  name: 'GetAllBookAPI',
  data() {
    return {
      jsondata: null,
      error: null
    }
  },
  computed: {
    pretty() {
      return this.jsondata ? JSON.stringify(this.jsondata, null, 2) : ''
    }
  },
  mounted() {
    this.getAllBooksAPI()
  },
  methods: {
    async getAllBooksAPI() {
      try {
        const url = 'https://us-central1-week7-hechang.cloudfunctions.net/getAllBooks'
        const res = await axios.get(url)
        this.jsondata = res.data
        this.error = null
      } catch (e) {
        console.error('Error fetching all books:', e)
        this.error = 'Error fetching all books'
        this.jsondata = null
      }
    }
  }
}
</script>
