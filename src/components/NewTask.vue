<template>
    <form class="add-todo" @submit.prevent="addTask">
        <input class="add-todo__input--text" v-model="newTask" />
        <input class="add-todo__input--submit" type="submit" value="Submit" />
    </form>
</template>


<script>
export default {
    data() {
        return {
            newTask: '',
        };
    },
    methods: {
        addTask() {
            this.$store.commit('addTask', this.newTask)
        },
    },
};
</script>

<style scoped>
.add-todo {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.add-todo__input--text {
    padding: 6px 12px;
    margin-right: 20px;
    flex: 1;
    outline: none;
    font-size: 16px;
    border: 2px solid #e4e4e4;
    border-radius: 2px;
}

.add-todo__input--submit {
    background-color: #007bff;
    color: white;
    border-radius: 3px;
    border: 0;
    padding: 10px 20px;
    font-weight: 200;
    font-size: 12px;
}
</style>