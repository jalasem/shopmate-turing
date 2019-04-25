import Vue from 'vue'

Vue.mixin({
  filters: {
    truncate: text => {
      return (text.length < 100) ? text : text.slice(0, 100) + '...'
    },
    money: amount => {
      return '$' + amount
    }
  }
})
