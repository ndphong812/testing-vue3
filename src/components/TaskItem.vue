<template>
    <div class="todo-item">
        <p class="todo-item__title">
            {{ task }}
        </p>
        <button class="todo-item__button todo-item__button--delete">
            Delete
        </button>
        <button class="todo-item__button todo-item__button--edit">
            Edit
        </button>
        <button class="todo-item__button todo-item__button--primary">
            Complete
        </button>
    </div>
</template>

<script>
export default {
    props: {
        task: {
            type: String,
            required: true
        }
    }
};
</script>

<style scoped>
.todo-item {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: flex-end;
    margin-top: 10px;
}

.todo-item__button {
    display: hidden;
    color: white;
    border-radius: 3px;
    border: 0;
    padding: 8px 12px;
    font-weight: 200;
    font-size: 12px;
    display: block;
    margin-left: 15px;
}

.todo-item__button--delete {
    background-color: #dc3545;
}

.todo-item__button--edit {
    background-color: #ffc107;
}

.todo-item__button--primary {
    background-color: #007bff;
}

.todo-item__title {
    flex: 1;
    text-align: left;
    border-bottom: 1px solid #e4e4e4;
    padding: 15px 15px;
    font-size: 20px;
}
</style>

