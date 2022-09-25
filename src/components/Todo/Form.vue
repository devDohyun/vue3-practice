<template>
  <form @submit.prevent="onSubmit">
    <input type="text" />
    <button type="submit">Submit</button>
  </form>
</template>

<script lang="ts">
import { ITodoItem } from '@/types'
import { defineComponent, defineEmits, ref } from 'vue'

type FormPayload = Pick<ITodoItem, 'title' | 'timestamp'>

const emit = defineEmits<{ (e: 'submit', payload: FormPayload): void }>()

export default defineComponent({
  setup() {
    const userInput = ref({ title: '' })

    const onSubmit = () => {
      emit('submit', { title: userInput.value.title, timestamp: Date.now() })
    }

    return {
      onSubmit,
    }
  },
})
</script>

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
