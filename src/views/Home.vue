<script setup>
// * librerias
import axios from "axios";
import { ref, reactive, onMounted } from "vue";

// * components
import Alert from "@/components/Alert.vue";
// import Navbar from "./components/Navbar.vue";
import AddTodoForm from "@/components/AddTodoForm.vue";
import { stringify } from "flatted/cjs";

import Todo from "@/components/Todo.vue";
import Loading from "@/components/Loading.vue";
import { useFetch } from "@/composables/fetch";
import { useAlert } from "@/composables/alert";

// variables

// cargar las tareas
const datos = ref("hola");
// fetchTodos();
const { data: todos, isLoading } = useFetch(
	`https://todo-api-adp0.onrender.com/todos`,
	{
		onError: () => showAlert(alert, "Failed lading todos"),
	}
);

// * metodos
const { alert, showAlert } = useAlert();

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
	max-width: 1440px;
	margin: 0 auto;
	display: grid;
	gap: 1rem;
}

@media (min-width: 20rem) {
	.spinner-loading {
		margin-top: 20%;
	}
}
@media (min-width: 900px) {
	.todos {
		grid-template-columns: repeat(2, 1fr);
	}
	.spinner-loading {
		margin-top: 20%;
	}
}
@media (min-width: 1280px) {
	.todos {
		grid-template-columns: repeat(3, 1fr);
	}
	.spinner-loading {
		margin-top: 20%;
	}
}
@media (min-width: 1440px) {
	.todos {
		grid-template-columns: repeat(3, 1fr);
	}
	.spinner-loading {
		margin-top: 20%;
	}
}
/* @media (min-width: 40rem) {
	.todo {
		width: 100%;
	}
	.spinner-loading {
		margin-top: 10%;
	}
} */

/* @media (max-width: 1116px) {
	.todo {
		width: 100%;
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
		width: 400px;
	}
	.spinner-loading {
		margin-top: 10%;
	}

} */

/* modal */
</style>
