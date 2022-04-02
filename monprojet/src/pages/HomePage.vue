<template>
  <div id="app" class="min-h-screen h-full" style="background: #edf2f7;">
    <div class="flex items-center justify-center">
        <LastTodo />
    </div>
  </div>
</template>

<script>

import LastTodo from "@/components/LastTodo";
export default {
  name: 'App',
  components: {LastTodo},
}
</script>
