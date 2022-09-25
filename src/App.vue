<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Todo />
</template>
<script>
import Todo from './components/Todo/index.vue'

export default {
  name: 'App',
  components: {
    Todo,
  },
}
</script>
