import Vue from 'vue'
import Vuex from 'vuex'
import router from "@/router";
import axios from "axios";

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    todos: [],
    currentTodo:{}
  },
  getters: {
    storepercentageDone: state => {
      return `${state.todos.length > 0 ? (((state.todos.filter(todo => todo.done)).length / state.todos.length) * 100).toFixed(2) : 0}%`;
    }
  },
  mutations: {
    async addTodo(state,description) {
      if (description) {
        await axios
            .post('http://localhost:3000/api/v1/todos/',{query: {description: description}})
            .then(
                async () => {
                  await this.dispatch('actionGetTodoFromApi')
                }
            )
      }
    },
    async deleteTodo(state,id){
      await axios
          .delete(`http://localhost:3000/api/v1/todos/${id}`)
          .then(
              async () => {
                await this.dispatch('actionGetTodoFromApi')
              }
          )
    },
    editTodo(state,id){
      router.push(`/edit/${id}`)
    },
    async toggleDone(state,id){
      await axios
          .patch(`http://localhost:3000/api/v1/todos/toggleDone/${id}`)
          .then(
              async () => {
                await this.dispatch('actionGetTodoFromApi')
              }
          )

      const todoToEdit = state.todos.find(todo => todo.id === id);
      if (todoToEdit) {
        todoToEdit.done = !todoToEdit.done;
      }
    },
    getTodoFromApi(state){
      axios
          .get('http://localhost:3000/api/v1/todos/')
          .then(async (response)=>{
            state.todos = [];
            response.data.forEach((element)=>{
              state.todos.push(element)
            });
          })
    },
    getOneTodoFromApi(state,id){
        axios
            .get(`http://localhost:3000/api/v1/todos/${id}`)
            .then(async (response)=>{
                state.currentTodo = response.data
                });
    },
      updateTodo(state,payload){
          axios
              .patch(`http://localhost:3000/api/v1/todos/${payload.id}`,{query: {description: payload.description}})
              .then(async ()=>{
                  router.push(`/todo`)
              });
    },
  },
  actions: {
    actionDeleteTodo({commit},payload){
      commit('deleteTodo',payload.id)
    },
    actionToggleDone({commit},payload){
      commit('toggleDone',payload.id)
    },
    actionAddTodo({commit},payload){
      commit('addTodo',payload.description)
    },
    actionEditTodo({commit},payload){
      commit('editTodo',payload.id)
    },
    actionGetTodoFromApi({commit}){
      commit('getTodoFromApi')
    },
  actionGetOneTodoFromApi({commit},payload){
      commit('getOneTodoFromApi',payload)
  },
  actionUpdateTodo({commit},payload){
      commit('updateTodo',payload)
  },
  }
})
