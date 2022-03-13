<script>
export default {
  name: 'TaskCard',
  props: ['item'],
  methods:{
    _toggleDone(id){
      this.$store.dispatch('actionToggleDone',  {id:id})
    },
    async _deleteTodo(id) {
      await this.$store.dispatch('actionDeleteTodo', {id: id})
    },
    _edit(id) {
      this.$store.dispatch('actionEditTodo',  {id:id})
    }
  }
}

</script>

<template>
  <div class="flex mb-4 items-center">
    <p class="w-full text-gray-900" :class="{
                      'line-through': item.done
                    }">{{item.description}}</p>
    <button @click="_edit(item._id)"  class="flex p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-500">Editer</button>
    <button @click="_toggleDone(item._id)" v-if="!item.done" class="flex p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-500">Fait</button>
    <button @click="_toggleDone(item._id)" v-else-if="item.done" class="flex p-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-500 border-gray-500 hover:bg-gray-500">Pas fait</button>
    <button @click="_deleteTodo(item._id)" class="flex p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500">Supprimer</button>
  </div>
</template>



