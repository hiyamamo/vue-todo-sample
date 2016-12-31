<template>
  <ul>
  </ul>
</template>

<script>
import Item from './TodoItem.vue'
export default {
  name: 'list',
  data() {
    return {
      item: []
    },
    components: {
      Item
    }
  }
</script>
