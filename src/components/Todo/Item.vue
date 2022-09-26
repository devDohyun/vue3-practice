<script lang="ts" setup>
import type { TodoItem } from '@/types'
import { reactive, watch } from 'vue'

const emit = defineEmits<{ (e: 'edit', payload: TodoItem): void }>()

const { item } = defineProps<{ item: TodoItem }>()
const draft = reactive({ ...item })

const onCheckboxChange = (e: Event) => {
  const { target } = e

  draft.isDone = (target as HTMLInputElement).checked as boolean
}

watch(draft, (newValue) => {
  emit('edit', newValue)
})
</script>

<template>
  <div class="todo_item">
    <input type="checkbox" :selected="draft.isDone" @change="onCheckboxChange" />
    <input type="text" v-model="draft.title" />
  </div>
</template>

<style scoped>
.todo_item {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
}

input[type='checkbox'] {
  width: 30px;
  height: 30px;

  margin-right: 5px;
}
input[type='text'] {
  flex-grow: 1;

  padding: 5px 10px;

  font-size: 16px;
}
</style>
