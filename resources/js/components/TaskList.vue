<template>
    <div class="max-w-7xl m-auto px-5">
        <div class="flex justify-between items-center my-10">
            <h1 class="text-3xl font-bold">Task Manager</h1>
            <router-link to="/tasks/create"
                ><button
                    class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Add Task
                </button></router-link
            >
        </div>
        <div
            v-if="tasks.length === 0"
            class="flex justify-center items-center min-h-full flex-col"
        >
            <p class="text-2xl font-semibold">No tasks</p>
            <p class="text text-slate-600">Take a rest or add new tasks</p>
        </div>
        <ul v-else>
            <li
                v-for="task in tasks"
                :key="task.id"
                class="p-10 bg-slate-200 shadow-sm rounded-md my-5"
            >
                <div class="flex justify-between items-start">
                    <div>
                        <span class="text-xs text-gray-600">{{
                            task.due_date
                        }}</span>
                        <p class="text-semibold text-xl font-medium">
                            {{ task.title }}
                        </p>
                    </div>
                    <div class="flex gap-2 items-center">
                        <router-link :to="`/tasks/${task.id}`"
                            ><button
                                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Edit
                            </button></router-link
                        >
                        <button
                            class="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                            @click="deleteTask(task.id)"
                        >
                            Delete
                        </button>
                    </div>
                </div>
                <p>{{ task.description }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            tasks: [],
        };
    },

    async created() {
        const response = await axios.get("/api/tasks");
        this.tasks = response.data;
    },

    methods: {
        async deleteTask(id) {
            await axios.delete(`/api/tasks/${id}`);
            this.tasks = this.tasks.filter((task) => task.id !== id);
        },
    },
};
</script>
