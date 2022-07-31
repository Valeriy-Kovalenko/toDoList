import { createRouter, createWebHistory } from 'vue-router';
import ToDoList from './components/ToDoList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: ToDoList }
    ]
});

export default router;