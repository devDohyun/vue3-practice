<script lang="ts" setup>
import type { TodoItem } from '@/types'

const { item } = defineProps<{ item: TodoItem }>()
</script>

<template>
  <div class="todo_item">{{ item }}</div>
</template>
