<script lang="ts" setup>
import type { TodoItem } from '@/types'
import { onMounted, watch, ref } from 'vue'
import Form from '@/components/Todo/Form.vue'
import Item from '@/components/Todo/Item.vue'

const LOCAL_STORAGE_KEY = 'todo_item'

const todoList = ref<TodoItem[] | null>(null)

const getLocalStorageData = (): TodoItem[] | null => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY)

  if (!data) return null

  return JSON.parse(data)
}
const setLocalStorageData = (data: TodoItem[]) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data))
}
const fetchLocalStorageData = () => (todoList.value = getLocalStorageData() || [])

const onFormSubmit = (payload: { title: string; timestamp: number }) => {
  const item = { ...payload, isDone: false }

  todoList.value = [...(todoList.value as TodoItem[]), item]
}

onMounted(fetchLocalStorageData)
watch(todoList, (newValue) => setLocalStorageData(newValue ?? []))
</script>

<template>
  <div class="todo_container">
    <h2>Vue 3 Todo app</h2>
    <Form @submit="onFormSubmit"></Form>
    <div class="list_container">
      <template v-for="item in todoList" :key="item.timestamp">
        <Item :item="item" />
      </template>
    </div>
  </div>
</template>

<style scoped>
.list_container {
  margin-top: 50px;
}
</style>
