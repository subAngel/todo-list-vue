<script>
// * librerias
import axios from "axios";

// * components
import Alert from "./components/Alert.vue";
import Navbar from "./components/Navbar.vue";
import AddTodoForm from "./components/AddTodoForm.vue";
import Todo from "./components/Todo.vue";
import Modal from "./components/Modal.vue";
import Btn from "./components/Btn.vue";
import Loading from "./components/Loading.vue";

export default {
	components: {
		Alert,
		Navbar,
		AddTodoForm,
		Todo,
		Modal,
		Btn,
		Loading,
	},
	data() {
		return {
			todoTitle: "",
			todos: [],
			alert: {
				show: false,
				message: "",
				type: "danger",
			},
			alertUpdate: {
				show: false,
				message: "",
				type: "warning",
			},
			isLoading: false,
			isPostingTodo: false,
			editTodoForm: {
				show: false,
				todo: {
					id: 0,
					title: "",
				},
			},
		};
	},

	created() {
		this.fetchTodos();
	},

	methods: {
		async fetchTodos() {
			this.isLoading = true;
			try {
				const res = await axios.get("/api/todos");
				this.todos = res.data;
			} catch (error) {
				this.showAlert(this.alert, "Failed loading todos");
			}
			this.isLoading = false;
		},
		async addTodo(title) {
			if (title === "") {
				this.showAlert(this.alert, "Todo title is required");
				return;
			}
			this.isPostingTodo = true;
			const res = await axios.post("/api/todos", { title });
			this.isPostingTodo = false;
			this.todos.push(res.data);
		},

		async removeTodo(id) {
			// this.todos = this.todos.filter((todo) => todo.id !== id);
			await axios.delete(`/api/todos/${id}`);
			this.fetchTodos();
		},

		showEditTodoForm(todo) {
			this.editTodoForm.show = true;
			// copia de los valores del todo
			this.editTodoForm.todo = { ...todo };
		},

		async updateTodo(title) {
			try {
				const { id, title } = this.editTodoForm.todo;

				// No se puede actualizar una tarea con algo vacio
				if (title === "") {
					this.showAlert(
						this.alertUpdate,
						"Todo title is required",
						"warning"
					);
					return;
				}
				await axios.put(`/api/todos/${id}`, { title });

				const todo = this.todos.find(
					(todo) => todo.id === this.editTodoForm.todo.id
				);
				//checar que el input no este vacio

				todo.title = this.editTodoForm.todo.title;
			} catch (error) {
				this.showAlert(this.alert, "Failed updating todo", "warning");
			}
			this.editTodoForm.show = false;
			this.alertUpdate.show = false;
		},
		showAlert(alert, message, type = "danger") {
			alert.show = true;
			alert.message = message;
			alert.type = type;
		},
	},
};
</script>

<template>
	<Navbar />
	<main class="container">
		<Modal
			v-show="editTodoForm.show"
			@close="
				editTodoForm.show = false;
				alertUpdate.show = false;
			"
			class="modal"
		>
			<template #alert-modal>
				<div class="alert-container">
					<Alert
						:show="alertUpdate.show"
						@close="alertUpdate.show = false"
						:message="alertUpdate.message"
						:type="alertUpdate.type"
						class="alert-update"
					/>
				</div>
			</template>
			<template v-slot:header>
				<h2>Edit TODO</h2>
				<Btn
					type="blank"
					@click="editTodoForm.show = false"
					circle
					class="close-modal"
					>&times;</Btn
				>
			</template>

			<template #body>
				<form class="form-modal">
					<div>
						<label for="todotitle">Todo title:</label>
					</div>
					<input
						type="text"
						id="todotitle"
						v-model="editTodoForm.todo.title"
						placeholder="Todo Title"
					/>
				</form>
			</template>

			<template #footer>
				<div class="footer-modal">
					<Btn
						class="modal-submit"
						@click="updateTodo(editTodoForm.todo.title)"
						variant="success"
						>Submit</Btn
					>
				</div>
			</template>
		</Modal>

		<Alert
			:show="alert.show"
			@close="alert.show = false"
			:message="alert.message"
			:type="alert.type"
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

.close-modal {
	background-color: transparent;
	font-size: 40px;
	width: 40px;
	height: 40px;
	transition: 0.2s ease-in;
}

.close-modal:hover {
	font-weight: 600;
}

/* Form modal */
.form-modal {
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.form-modal > input {
	align-content: center;
	background-color: var(--glass-bg-color);
	color: white;
	border: none;
	padding: 5px 10px;
	margin-top: 10px;
	border-radius: 5px;
}

.form-modal > input:focus {
	outline: none;
}

.form-modal > input::placeholder {
	color: rgb(188, 188, 188);
}

/* modal footer */
.footer-modal {
	display: flex;
	align-items: center;
	justify-content: center;
}

.modal-submit {
	border-radius: 5px;
	background-color: var(--glass-bg-color);
	font-weight: 500;
}
</style>
