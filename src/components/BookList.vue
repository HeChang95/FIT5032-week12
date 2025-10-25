<template>
  <div>
    <h1>Books with ISBN > 1000 (Top 5, desc)</h1>
    <ul>
      <li v-for="b in books" :key="b.id">
        {{ b.name }} — ISBN: {{ b.isbn }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import db from '../firebase/init.js'
import { collection, query, where, getDocs } from 'firebase/firestore'

export default {
  setup() {
    const books = ref([])

    const fetchBooks = async () => {
      try {
        const q = query(collection(db, 'books'), where('isbn', '>', 1000))
        const querySnapshot = await getDocs(q)
        const booksArray = []
        querySnapshot.forEach((doc) => {
          booksArray.push({ id: doc.id, ...doc.data() })
        })
        books.value = booksArray
      } catch (error) {
        console.error('Error fetching books: ', error)
      }
    };

    onMounted(() => {
      fetchBooks()
    })

    return {
      books
    };
  }
};
</script>
