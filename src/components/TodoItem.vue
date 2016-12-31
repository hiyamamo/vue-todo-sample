<template>
  <ul>
    <li v-for="todo in todos">{{todo.name}}</li>
  </ul>
</template>

<script>
export default {
  name: 'item',
  data () {
    return {
      name: ''
    }
  }
}
</script>
