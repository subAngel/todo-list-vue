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
import EditTodoForm from "@/components/EditTodoForm.vue";
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

function showEditTodoForm(todo) {
	editTodoForm.show = true;
	// copia de los valores del todo
	editTodoForm.todo = { ...todo };
}

async function addTodo(title) {
	if (title === "") {
		showAlert("Todo title is required");
		return;
	}
	isPostingTodo.value = true;
	const res = await axios.post("/api/todos", { title });
	isPostingTodo.value = false;
	todos.value.push(res.data);
}

async function removeTodo(id) {
	await axios.delete(`/api/todos/${id}`);
	todos.value = todos.value.filter((todo) => todo.id !== id);
	// fetchTodos();
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
		showAlert("Failed updating todo", "warning");
	}
	editTodoForm.show = false;
	// this.alertUpdate.show = false;
}
</script>

<template>
	<!-- <Navbar /> -->
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
		<AddTodoForm :isLoading="isPostingTodo" @add="addTodo" />
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
