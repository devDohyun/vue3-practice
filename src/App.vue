<script lang="ts">
import Todo from '@/components/Todo/index.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
    Todo,
  },
})
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    <p class="quote">
      Vue 3로 만든 Todo app !<br />
      CRUD의 기능을 localStorage와 함께 합니다.<br />
      추가, 삭제, 수정 후 새로고침을 마음껏 해보세요 !<br />
    </p>
  </div>
  <Todo />
</template>

<style scoped>
.quote {
  display: inline-block;

  padding: 10px;

  border: dashed 1px black;
}
</style>
