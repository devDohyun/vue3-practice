<template>
  <div class="todo_item">{{ item }}</div>
</template>

<script lang="ts">
import { ITodoItem } from '@/types'
import { defineComponent, defineProps } from 'vue'

const props = defineProps<{ item: ITodoItem }>({
  item: { required: true },
})

export default defineComponent({
  setup() {
    return { item: props.item }
  },
})
</script>
