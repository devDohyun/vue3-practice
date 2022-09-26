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
