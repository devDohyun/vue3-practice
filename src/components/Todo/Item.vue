<script lang="ts" setup>
import type { TodoItem } from '@/types'
import { reactive, watch } from 'vue'

const emit = defineEmits<{
  (e: 'edit', payload: TodoItem): void
  (e: 'delete', payload: TodoItem): void
}>()

const { item } = defineProps<{ item: TodoItem }>()
const draft = reactive({ ...item })

watch(draft, (newValue) => {
  emit('edit', newValue)
})

const onDeleteButtonClick = () => {
  emit('delete', item)
}
</script>

<template>
  <div class="todo_item">
    <input type="checkbox" v-model="draft.isDone" />
    <input type="text" v-model="draft.title" />
    <button type="button" @click="onDeleteButtonClick">삭제</button>
  </div>
</template>

<style scoped>
.todo_item {
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 5px;

  width: 100%;
}

input[type='checkbox'] {
  width: 30px;
  height: 30px;
}
input[type='text'] {
  flex-grow: 1;

  padding: 5px 10px;

  font-size: 16px;

  border: 1px solid black;
}
button {
  padding: 5px 10px;

  border: none;

  background-color: black;
  color: white;
}
</style>
