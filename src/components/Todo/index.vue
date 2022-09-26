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

const onItemEdit = (payload: TodoItem) => {
  todoList.value = (todoList.value as TodoItem[]).map((x) => (x.timestamp === payload.timestamp ? payload : x))
}
const onItemDelete = (payload: TodoItem) => {
  todoList.value = (todoList.value as TodoItem[]).filter((x) => x !== payload)
}
</script>

<template>
  <div class="todo_container">
    <h2>Vue 3 Todo app</h2>
    <Form @submit="onFormSubmit"></Form>
    <div class="content_container">
      <div class="list_container">
        <template v-for="item in todoList" :key="item.timestamp">
          <Item @edit="onItemEdit" @delete="onItemDelete" :item="item" />
        </template>
      </div>
      <div class="code_block">
        <div>
          [
          <template v-for="item in todoList" :key="item.timestamp">
            <div>{{ item }}</div></template
          >
          ]
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content_container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  grid-gap: 20px;

  margin-top: 50px;
  padding: 20px;
}
.list_container {
  width: 100%;
}
.code_block {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;

  font-size: 14px;

  background-color: #333333;
  color: white;
}

@media (max-width: 767px) {
  .content_container {
    grid-template-columns: auto;
    grid-template-rows: repeat(2, auto);
  }
}
</style>
