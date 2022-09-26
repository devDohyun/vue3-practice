<script lang="ts" setup>
import type { TodoItem } from '@/types'
import { ref } from 'vue'

type FormPayload = Pick<TodoItem, 'title' | 'timestamp'>

const emit = defineEmits<{ (e: 'submit', payload: FormPayload): void }>()

const userInput = ref({ title: '' })

const onSubmit = () => {
  emit('submit', { title: userInput.value.title, timestamp: Date.now() })
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <input type="text" />
    <button type="submit">Submit</button>
  </form>
</template>

<style scoped>
input {
  height: 50px;

  padding: 10px;

  font-size: 18px;
}

button {
  height: 50px;

  margin-left: 5px;
  padding: 10px;

  font-size: 18px;

  border: none;

  color: white;
  background-color: rgb(100, 182, 135);

  cursor: pointer;
}
</style>
