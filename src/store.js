import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            tasks: [],
        }
    },
    getters: {
        getTasks(state) {
            return state.tasks;
        },
    },
    mutations: {
        addTask(state, payload) {
            state.tasks.push(payload);
        },
        loadTasks(state, payload) {
            state.tasks = payload;
        },
    },
    actions: {
        async loadAllTasks(context) {
            const response = await fetch("https://todolist-5199e-default-rtdb.europe-west1.firebasedatabase.app/tasks.json");
            const responseData = await response.json();
            const tasks = [];
            for (const key in responseData) {
                const task = {
                    id: key,
                    description: responseData[key].description,
                    status: responseData[key].status,
                    date: responseData[key].date,
                }
                tasks.push(task);
            }

            context.commit("loadTasks", tasks);
        },
        async createNewTask(context, data) {
            await fetch(`https://todolist-5199e-default-rtdb.europe-west1.firebasedatabase.app/tasks.json`, {
                method: 'POST',
                body: JSON.stringify(data),
            });
            context.commit("addTask", data);
        },
        async changeTaskStatus(context, data) {
            await fetch(`https://todolist-5199e-default-rtdb.europe-west1.firebasedatabase.app/tasks/${data.id}/status.json`, {
                method: "PUT",
                body: JSON.stringify(data.status),
            });
        },
    }
});

export default store;