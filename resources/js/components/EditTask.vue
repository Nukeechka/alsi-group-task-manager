<template>
    <div
        class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-20"
    >
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form @submit.prevent="updateTask" class="space-y-6">
                <div>
                    <label
                        for="title"
                        class="block text-sm/6 font-medium text-gray-900"
                        >Title</label
                    >
                    <div class="mt-2">
                        <input
                            v-model="task.title"
                            type="text"
                            name="title"
                            id="title"
                            required
                            class="block w-full rounded-md bg-slate-100 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label
                            for="description"
                            class="block text-sm/6 font-medium text-gray-900"
                            >Description</label
                        >
                    </div>
                    <div class="mt-2">
                        <textarea
                            v-model="task.description"
                            name="description"
                            id="description"
                            required
                            class="block w-full rounded-md bg-slate-100 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label
                            for="due-date"
                            class="block text-sm/6 font-medium text-gray-900"
                            >Due date</label
                        >
                    </div>
                    <div class="mt-2">
                        <input
                            type="date"
                            v-model="task.due_date"
                            name="due-date"
                            id="due-date"
                            required
                            class="block w-full rounded-md bg-slate-100 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                    <router-link to="/">
                        <button
                            class="flex w-full justify-center rounded-md mt-2.5 bg-red-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                        >
                            Cancel
                        </button></router-link
                    >
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import { notify } from "@kyvg/vue3-notification";

export default {
    data() {
        return {
            task: {},
        };
    },

    async created() {
        try {
            const response = await axios.get(
                `/api/tasks/${this.$route.params.id}`
            );
            if (response.status === 200) {
                this.task = response.data;
            }
        } catch (error) {
            notify({
                title: "Error",
                text: error.message,
                type: "error",
            });
            console.log(error);
        }
    },

    methods: {
        async updateTask() {
            await axios.put(`/api/tasks/${this.task.id}`, this.task);
            this.$router.push("/");
        },
    },
};
</script>
