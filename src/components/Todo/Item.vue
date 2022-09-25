<template>
  <div class="todo_item">{{ item }}</div>
</template>

<script lang="ts" setup>
import { ITodoItem } from '@/types'
import { defineProps } from 'vue'

const { item } = defineProps<{ item: ITodoItem }>()
</script>
