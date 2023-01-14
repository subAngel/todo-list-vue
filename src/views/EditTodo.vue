<template>
	<Spinner class="spinner" v-if="isLoading" />
	<Alert
		:message="alert.message"
		:show="alert.show"
		@close="alert.show = false"
		:variant="alert.variant"
	/>
	<div v-if="todo !== null" class="edit-container">
		<h1>Edit ToDo</h1>
		<form class="edit-todo-form" id="editForm">
			<input
				v-model="todo.title"
				type="text"
				placeholder="Todo Title"
				autocomplete="off"
			/>
			<div class="submit">
				<Btn
					:disabled="isUpdating"
					variant="success"
					class="btn"
					@click.prevent="submit(todo.title)"
				>
					<Loading v-if="isUpdating" smaller />
					<span v-else>Edit</span>
				</Btn>
			</div>
		</form>
	</div>
</template>

<!-- * updateTodo(editTodoForm.todo.title)
@click="editTodoForm.show = false" -->

<script setup>
import { useRoute, useRouter } from "vue-router";
import Btn from "../components/Btn.vue";
import { useFetch } from "../composables/fetch";
import Spinner from "../components/Loading.vue";
import Alert from "../components/Alert.vue";
import { useAlert } from "../composables/alert";
import Loading from "../components/Loading.vue";
import axios from "axios";
import { ref } from "vue";

// propiedades
const props = defineProps(["id"]);

const router = useRouter();

const { alert, showAlert } = useAlert();
const { data: todo, isLoading } = useFetch(`/api/todos/${props.id}`, {
	onError: () => showAlert("Failed loading todo", "danger"),
});
const isUpdating = ref(false);
// metodos

async function submit(title) {
	isUpdating.value = true;
	try {
		if (title === "") {
			showAlert("Required ToDo title");
			return;
		}
		// No se puede actualizar una tarea con algo vacio
		await axios.put(`/api/todos/${props.id}`, todo.value);
		router.push("/");
		//checar que el input no este vacio
	} catch (error) {
		showAlert("Failed updating todo", "warning");
	}
	isUpdating.value = false;
	// this.alertUpdate.show = false;
}
</script>

<style scoped>
/* modal */
.edit-container {
	display: flex;
	justify-content: center;
	flex-direction: column;
	margin-top: 20px;
	align-items: center;
}
h1 {
	text-align: center;
}
.alert-container {
	/* position: absolute; */
	display: flex;
	justify-content: center;
	align-items: center;
}
.alert-update {
	/* position: relative; */
	top: 2%;
	position: fixed;
}
.edit-todo-form {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 30px;
	background-color: rgba(255, 255, 255, 0.2);
	border-radius: 10px;
	backdrop-filter: blur(10px);
	border: 1px solid rgba(255, 255, 255, 0.15);
	box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
	padding: 30px;
}

.edit-todo-form input {
	width: 80%;
	border: none;
	background-color: rgba(255, 255, 255, 0.07);
	color: #e5e5e5;
	border-radius: 3px;
	padding: 10px 10px;
}

.edit-todo-form input:focus {
	border: none;
}

::placeholder {
	color: #e5e5e5;
}

.btn {
	width: 100%;
	height: 35px;
	font-weight: 600;
	border-radius: 5px;
	margin-left: 10px;
}

@media (min-width: 40rem) {
	.edit-todo-form {
		width: 50%;
	}
	.spinner {
		padding-top: 20%;
	}
}

@media (min-width: 20rem) {
	.edit-todo-form {
		width: 90%;
	}
	.spinner {
		padding-top: 20%;
	}
	.btn {
		width: 100px;
	}
}

@media (min-width: 56rem) {
	.edit-todo-form {
		width: 80%;
	}
	.spinner {
		padding-top: 10%;
	}
	.btn {
		width: 200px;
	}
}
</style>
