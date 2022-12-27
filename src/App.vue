<script>
import Alert from "./components/Alert.vue";
import Navbar from "./components/Navbar.vue";
import AddTodoForm from "./components/AddTodoForm.vue";
import Todo from "./components/Todo.vue";

export default {
	components: {
		Alert,
		Navbar,
		AddTodoForm,
		Todo,
	},
	data() {
		return {
			todoTitle: "",
			todos: [],
			showAlert: false,
		};
	},
	methods: {
		addTodo(title) {
			if (title === "") {
				this.showAlert = true;
				return;
			}

			this.todos.push({
				title,
				id: Math.floor(Math.random() * 1000),
			});
		},
		removeTodo(todoTitle) {
			this.todos = this.todos.filter((todo) => todo !== todoTitle);
		},
	},
};
</script>

<template>
	<Navbar />
	<main class="container">
		<Alert
			:show="showAlert"
			@close="showAlert = false"
			message="TODO Title is required"
		/>
		<section>
			<AddTodoForm @submit="addTodo" />
		</section>

		<Todo :todos="todos" @delete="removeTodo" />
	</main>
</template>

<!-- * STYLE -->
<style scoped>
/* Card todo */
</style>
