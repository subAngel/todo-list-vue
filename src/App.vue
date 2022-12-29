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

export default {
	components: {
		Alert,
		Navbar,
		AddTodoForm,
		Todo,
		Modal,
		Btn,
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
			try {
				const res = await axios.get("http://localhost:3000/todos");
				this.todos = res.data;
			} catch (error) {
				this.showAlert(
					"Failed loading todos, check your internet connection"
				);
			}
		},
		async addTodo(title) {
			if (title === "") {
				this.showAlert("Todo title is required");
				return;
			}
			const res = await axios.post("http://localhost:3000/todos", { title });
			this.fetchTodos();
		},

		async removeTodo(id) {
			// this.todos = this.todos.filter((todo) => todo.id !== id);
			await axios.delete(`http://localhost:3000/todos/${id}`);
			this.fetchTodos();
		},

		showEditTodoForm(todo) {
			this.editTodoForm.show = true;
			// copia de los valores del todo
			this.editTodoForm.todo = { ...todo };
		},

		updateTodo() {
			const todo = this.todos.find(
				(todo) => todo.id === this.editTodoForm.todo.id
			);
			todo.title = this.editTodoForm.todo.title;
			this.editTodoForm.show = false;
		},
		showAlert(message, type = "danger") {
			this.alert.show = true;
			this.alert.message = message;
			this.alert.type = type;
		},
	},
};
</script>

<template>
	<Navbar />
	<main class="container">
		<Modal
			v-show="editTodoForm.show"
			@close="editTodoForm.show = false"
			class="modal"
		>
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
					<Btn class="modal-submit" @click="updateTodo" variant="success"
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
			<AddTodoForm @submit="addTodo" />
		</section>
		<section class="todos">
			<Todo
				v-for="todo in todos"
				:key="todo.id"
				:title="todo.title"
				@delete="removeTodo(todo.id)"
				@update="showEditTodoForm(todo)"
			/>
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
}

@media (min-width: 20rem) {
	.todo {
		width: 100%;
	}
}

@media (min-width: 56rem) {
	.todo {
		width: 50%;
	}
}

/* modal */

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
