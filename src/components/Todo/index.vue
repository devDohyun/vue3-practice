<script lang="ts" setup>
import type { ITodoItem } from '@/types'
import { onMounted, watch, ref } from 'vue'
import Form from '@/components/Todo/Form.vue'
import Item from '@/components/Todo/Item.vue'

const LOCAL_STORAGE_KEY = 'todo_item'

const todoList = ref<ITodoItem[] | null>(null)

const getLocalStorageData = (): ITodoItem[] | null => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY)

  if (!data) return null

  return JSON.parse(data)
}
const setLocalStorageData = (data: ITodoItem[]) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data))
}
const fetchLocalStorageData = () => (todoList.value = getLocalStorageData() || [])

const onFormSubmit = (payload) => {
  console.log(payload)
}

onMounted(fetchLocalStorageData)
watch(todoList, (newValue) => setLocalStorageData(newValue ?? []))
</script>

<template>
  <div class="todo_container">
    <h2>Vue 3 Todo app</h2>
    <Form />
    <div class="list_container">
      <template v-for="item in todoList" :key="item.timestamp">
        <Item />
      </template>
    </div>
  </div>
</template>

<style scoped>
.list_container {
  margin-top: 50px;
}
</style>
