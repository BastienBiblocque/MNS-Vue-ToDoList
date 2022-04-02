<template>
<div>
  <div class="bg-white rounded-lg shadow p-6 m-4 w-full overflow-y-auto">
    <div v-if="this.$store.state.last3todos.length > 0">
      <div v-for="todo in this.$store.state.last3todos" :key="todo.id">
        <task-card :item="todo"/>
      </div>
    </div>
    <div v-else>
      Vous n'avez pas d'item dans la todo list vous pouvez en ajouter depuis <router-link class="link link-accent" to="/todo">ici</router-link>
    </div>

  </div>
</div>

</template>

<script>

import TaskCard from "@/components/TaskCard";

export default {
  name: 'last-todo',
  components: {TaskCard},
  async mounted() {
    await this.$store.dispatch('actionGetLast3TodoFromApi');
  },
}

</script>