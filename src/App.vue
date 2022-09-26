<script lang="ts">
import Todo from '@/components/Todo/index.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
    Todo,
  },
})
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Todo />
</template>
