<template>
    <TaskItem v-for="(task, index) in tasks" :key="index" :task="task" />
</template>


<script>
import { mapState } from 'vuex'
import TaskItem from './TaskItem.vue'

export default {
    components: {
        TaskItem
    },
    computed: {
        ...mapState(['tasks'])
    }
};

</script>

<style scoped></style>