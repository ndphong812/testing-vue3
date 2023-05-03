<script>
import NewTask from './components/NewTask.vue'
import TaskItem from './components/TaskItem.vue'
import TaskList from './components/TaskList.vue'

export default {
  components: {
    NewTask,
    TaskItem,
    TaskList
  },
  computed: {
    count() {
      return this.$store.state.count
    }
  }

}
</script>

<template>
  <div class="my-app">
    <h1 class="title">Tasks Management App</h1>
    <NewTask />
    <TaskList />
  </div>
</template>

<style scoped>
.my-app {
  width: 40%;
  margin: 0px auto;
  border: 1px solid #e3e3e3;
  padding: 20px 20px;
  border-radius: 5px;
  min-height: 500px;
  max-height: 100vh;
}

.title {
  margin: 20px;
  text-align: center;
}
</style>