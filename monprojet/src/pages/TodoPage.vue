<template>
  <div id="app" class="min-h-screen h-full" style="background: #edf2f7;">
    <div class="flex items-center justify-center">
      <div class="w-full flex items-center justify-center font-sans">
        <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg overflow-y-auto">
          <todo-input />
          <progress-bar/>
          <div>
            <div v-for="todo in this.$store.state.todos" :key="todo.id">
              <task-card :item="todo"/>
            </div>
          </div>
          <get-data-from-api/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoInput from "@/components/ToDoInput";
import ProgressBar from "@/components/ProgressBar";
import TaskCard from "@/components/TaskCard";
import GetDataFromApi from "@/components/GetDataFromApi";

export default {
  name: 'App',
  components: {TaskCard, ProgressBar, TodoInput,GetDataFromApi},
}
</script>
