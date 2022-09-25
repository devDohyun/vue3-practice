<template>
  <div class="todo_container">
    <h2>Vue 3 Todo app</h2>
    <TodoForm />
    <div class="list_container">
      <template v-for="item in todoList" :key="item.timestamp">
        <TodoItem />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue'
import type { ITodoItem } from '@/types'

import TodoItem from './Item.vue'
import TodoForm from './Form.vue'

const LOCAL_STORAGE_KEY = 'todo_item'

export default defineComponent({
  components: { TodoItem, TodoForm },
  setup() {
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

    onMounted(fetchLocalStorageData)
    watch(todoList, (newValue) => setLocalStorageData(newValue ?? []))

    return { todoList }
  },
})
</script>

<style scoped>
.list_container {
  margin-top: 50px;
}
</style>
