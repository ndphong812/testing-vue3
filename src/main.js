import { createApp } from 'vue'
import App from './App.vue'
import './css/global.css'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state() {
        return {
            tasks: []
        }
    },
    mutations: {
        addTask(state, task) {
            state.tasks.push(task)
        }
    }
})

const app = createApp(App);
app.use(store);
app.mount('#app');