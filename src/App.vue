<script setup>
// * librerias
import axios from "axios";

// * components
import Alert from "./components/Alert.vue";
import Navbar from "./components/Navbar.vue";
import AddTodoForm from "./components/AddTodoForm.vue";
import Todo from "./components/Todo.vue";
import Loading from "./components/Loading.vue";
import EditTodoForm from "./components/EditTodoForm.vue";
import { ref, reactive } from "vue";

// variables
const todos = ref([]);
const alert = reactive({
	show: false,
	message: "",
	variant: "danger",
});
const isLoading = ref(false);
const isPostingTodo = ref(false);
const editTodoForm = reactive({
	show: false,
	todo: {
		id: 0,
		title: "",
	},
});

// cargar las tareas
fetchTodos();

// * metodos
function showAlert(alert, message, type = "danger") {
	alert.show = true;
	alert.message = message;
	alert.variant = type;
}
function showEditTodoForm(todo) {
	editTodoForm.show = true;
	// copia de los valores del todo
	editTodoForm.todo = { ...todo };
}

async function fetchTodos() {
	isLoading.value = true;
	try {
		const res = await axios.get("/api/todos");
		todos.value = res.data;
	} catch (error) {
		showAlert(alert, "Failed loading todos", "warning");
	}
	isLoading.value = false;
}

async function addTodo(title) {
	if (title === "") {
		showAlert(alert, "Todo title is required");
		return;
	}
	isPostingTodo.value = true;
	const res = await axios.post("/api/todos", { title });
	isPostingTodo.value = false;
	todos.value.push(res.data);
}

async function removeTodo(id) {
	// this.todos = this.todos.filter((todo) => todo.id !== id);
	await axios.delete(`/api/todos/${id}`);
	fetchTodos();
}

async function updateTodo() {
	try {
		const { id, title } = editTodoForm.todo;

		// No se puede actualizar una tarea con algo vacio

		await axios.put(`/api/todos/${id}`, { title });

		const todo = todos.value.find((todo) => todo.id === editTodoForm.todo.id);
		//checar que el input no este vacio

		todo.title = editTodoForm.todo.title;
	} catch (error) {
		showAlert(alert, "Failed updating todo", "warning");
	}
	editTodoForm.show = false;
	// this.alertUpdate.show = false;
}
</script>

<template>
	<Navbar />
	<main class="container">
		<EditTodoForm
			:show="editTodoForm.show"
			@close="editTodoForm.show = false"
			@submit="updateTodo(editTodoForm.todo.title)"
			v-model="editTodoForm.todo.title"
		/>
		<Alert
			:show="alert.show"
			@close="alert.show = false"
			:message="alert.message"
			:variant="alert.variant"
		/>
		<section>
			<AddTodoForm :isLoading="isPostingTodo" @submit="addTodo" />
		</section>

		<section class="todos-container">
			<Loading v-if="isLoading" class="spinner-loading" />
			<div v-else class="todos">
				<Todo
					v-for="todo in todos"
					:key="todo.id"
					:title="todo.title"
					@delete="removeTodo(todo.id)"
					@update="showEditTodoForm(todo)"
					class="todo"
				/>
			</div>
		</section>
	</main>
</template>

<!-- * STYLE -->
<style scoped>
/* Card todo */
.todos {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
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
}

@media (min-width: 56rem) {
	.todo {
		width: 50%;
	}
	.spinner-loading {
		margin-top: 10%;
	}
}

/* modal */
</style>
