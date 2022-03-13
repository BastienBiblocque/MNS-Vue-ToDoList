import Vue from 'vue'

import VueRouter from "vue-router";
import TodoPage from "@/pages/TodoPage";
import HomePage from "@/pages/HomePage";
import EditPage from "@/pages/EditPage";


Vue.use(VueRouter)

const routes = [
    {name:'home', path: '/', component:HomePage},
    {name:'home', path: '/todo', component:TodoPage},
    {name:'home', path: '/edit/:id', component:EditPage}
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router;

