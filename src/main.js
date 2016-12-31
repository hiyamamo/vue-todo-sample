// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

new Vue({
  el: '#app',
  data: {
    newItem: '',
    todos: [],
    selected: 'all'
  },
  methods: {
    add: function(event) {
      this.todos.push({ task: this.newItem, completed: false })
      this.newItem = ''
    },
    remove: function(index) {
      this.todos.splice(index, 1)
    },
    complete: function(index, event) {
      const newValue = {
        task: this.todos[index].task,
        completed: event.target.checked
      }
      this.todos.splice(index, 1, newValue)
    },
    show: function(value) {
      if (this.selected === 'all' ||
          value.completed === (this.selected === 'completed')) {
        return true
      }

      return false
    }
  }
})
