<template>
  <div>
    <h1>Content details</h1>
    <h2>ID: {{ id }}</h2>
    <h2>Content: {{ content }}</h2>
  </div>
</template>

<script setup>
// ====================
// Import
// ====================
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';


// ====================
// Const
// ====================
const route = useRoute();
const id = ref();
const content = ref();

// ====================
// Functions
// ====================
async function getItemDetail(id) {
  const url = `http://localhost:3000/api/images/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
}


// ====================
// Life cycle
// ====================
onMounted( async () => {
  id.value = route.params.id;
  const item = await getItemDetail(id.value);
  content.value = item.content;
});

</script>
