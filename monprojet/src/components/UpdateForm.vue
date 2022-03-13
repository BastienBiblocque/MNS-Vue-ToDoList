<script>

export default {
  name: 'UpdateForm',
  data: function () {
    return {
      description:'',
      id:'',
    }
  },
  mounted() {
    this.description = this.$store.state.currentTodo.description;
    this.id = this.$route.params.id;
  },
  methods:{
    _updateTodo(){
      this.$store.dispatch('actionUpdateTodo',  {description:this.description,id : this.id })
    }
  },
}
</script>

<template>
  <div class="min-h-screen h-full" style="background: #edf2f7;">
    <div class="flex items-center justify-center">
      <div class="w-full flex items-center justify-center font-sans">
        <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg overflow-y-auto">
          <div class="mb-4">
            <h1 class="text-3xl text-gray-900">Mettre à jour</h1>
            <div class="grid grid-cols-1 gap-4 mt-4">
              <div class="space-y-2">
                <label>Description</label>
                <input v-model="description" class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-700" v-on:keyup.enter="saveTodo" >
              </div>
              <input type="button" @click="_updateTodo" class="cursor-pointer shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-700" value="Mettre à jour">
            </div>
          </div>
          </div>
      </div>
    </div>

  </div>

</template>

