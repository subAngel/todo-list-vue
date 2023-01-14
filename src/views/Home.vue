<script setup>
// * librerias
import axios from "axios";
import { ref, reactive } from "vue";

// * components
import Alert from "@/components/Alert.vue";
// import Navbar from "./components/Navbar.vue";
import AddTodoForm from "@/components/AddTodoForm.vue";
import Todo from "@/components/Todo.vue";
import Loading from "@/components/Loading.vue";
import { useFetch } from "@/composables/fetch";
import { useAlert } from "@/composables/alert";

// variables
// const todos = ref([]);
// const isLoading = ref(false);
const isPostingTodo = ref(false);
const editTodoForm = reactive({
	show: false,
	todo: {
		id: 0,
		title: "",
	},
});

// cargar las tareas
// fetchTodos();
const { data: todos, isLoading } = useFetch("/api/todos", {
	onError: () => showAlert(alert, "Failed lading todos"),
});

// * metodos
const { alert, showAlert } = useAlert();

async function addTodo(todo) {
	// console.log(todo);
	if (todo.title === "" || todo.description === "" || todo.date === "") {
		showAlert("Todo info is required");
		return;
	}
	isPostingTodo.value = true;
	const res = await axios.post("/api/todos", todo);
	// console.log(res);
	isPostingTodo.value = false;
	todos.value.push(res.data);
}

async function removeTodo(id) {
	await axios.delete(`/api/todos/${id}`);
	todos.value = todos.value.filter((todo) => todo._id !== id);
	// fetchTodos();
}
</script>

<template>
	<!-- <Navbar /> -->

	<Alert
		:show="alert.show"
		@close="alert.show = false"
		:message="alert.message"
		:variant="alert.variant"
	/>
	<!-- <section>
		<AddTodoForm :isLoading="isPostingTodo" @add="addTodo" />
	</section> -->

	<section class="todos-container">
		<Loading v-if="isLoading" class="spinner-loading" />
		<div v-else class="todos">
			<Todo
				v-for="todo in todos"
				:key="todo._id"
				:title="todo.title"
				@delete="removeTodo(todo._id)"
				@update="$router.push(`/todos/${todo._id}/edit`)"
				class="todo"
			/>
		</div>
	</section>
</template>

<!-- * STYLE -->
<style scoped>
/* Card todo */
.todos {
	display: flex;
	flex-wrap: wrap;

	margin: 0;
}

@media (min-width: 40rem) {
	.todo {
		width: 100%;
	}
	.spinner-loading {
		margin-top: 10%;
	}
}

@media (min-width: 20rem) {
	.todo {
		width: 100%;
	}
	.spinner-loading {
		margin-top: 20%;
		align-self: center;
	}
	.todos {
		width: 90%;
		margin: 0 auto;
	}
}

@media (min-width: 56rem) {
	.todo {
		width: 50%;
	}
	.spinner-loading {
		margin-top: 10%;
	}
	.todos {
		justify-content: space-around;
	}
}

/* modal */
</style>
