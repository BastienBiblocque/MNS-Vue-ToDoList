<script>

export default {
  name: 'TodoInput',
  data: function () {
    return {
      description:'',
    }
  },
  methods: {
    saveTodo() {
      this.$store.dispatch('actionAddTodo',  {description:this.description})
      this.description = "";
    },
  },
}
</script>

<template>
  <div class="mb-4">
    <h1 class="text-3xl text-gray-900">Ma Todo</h1>
    <div class="flex mt-4">
      <input v-model="description" class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-700" v-on:keyup.enter="saveTodo" placeholder="Add Todo">
      <button @click="saveTodo" class="flex p-2 border-2 rounded text-blue-500 border-blue-500 hover:text-white hover:bg-blue-500">Ajouter</button>
    </div>
  </div>
</template>

