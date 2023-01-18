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
const { data: todos, isLoading } = useFetch(
	"https://todo-api-adp0.onrender.com/todos",
	{
		onError: () => showAlert(alert, "Failed lading todos"),
	}
);

// * metodos
const { alert, showAlert } = useAlert();

async function addTodo(todo) {
	// console.log(todo);
	if (todo.title === "" || todo.description === "" || todo.date === "") {
		showAlert("Todo info is required");
		return;
	}
	isPostingTodo.value = true;
	const res = await axios.post("http://todo-api-adp0.onrender.com//todos", todo);
	// console.log(res);
	isPostingTodo.value = false;
	todos.value.push(res.data);
}

async function removeTodo(id) {
	await axios.delete(`https://todo-api-adp0.onrender.com/todos/${id}`);
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
				:description="todo.description"
				:date="todo.date"
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
	max-width: 1200px;
	margin: 0 auto;
	display: grid;
	gap: 0.2rem;
	grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
}

@media (min-width: 40rem) {
	.todo {
		width: 250px;
	}
	.spinner-loading {
		margin-top: 10%;
	}
}
@media (max-width: 1116px) {
	.todo {
		width: 100%;
	}
	.todos {
		width: 90%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
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
		width: 400px;
	}
	.spinner-loading {
		margin-top: 10%;
	}
	.todos {
		justify-content: space-around;
	}
}
@media (min-width: 1440px) {
	.todos {
		display: flex;
		justify-content: center;
		column-gap: 50px;
		align-items: center;
	}
}
@media (max-width: 1440px) {
	.todos {
		display: flex;
		justify-content: center;
		column-gap: 50px;
		align-items: center;
	}
}
/* modal */
</style>
