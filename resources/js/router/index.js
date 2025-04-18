import { createRouter, createWebHistory } from "vue-router";
import TaskList from "../components/TaskList.vue";
import EditTask from "../components/EditTask.vue";
import CreateTask from "../components/CreateTask.vue";

const routes = [
    {
        path: "/",
        component: TaskList,
    },
    {
        path: "/tasks/create",
        component: CreateTask,
    },
    {
        path: "/tasks/:id",
        component: EditTask,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
