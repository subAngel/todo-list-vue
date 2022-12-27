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
		removeTodo(id) {
			this.todos = this.todos.filter((todo) => todo.id !== id);
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
		<section class="todos">
			<Todo
				v-for="todo in todos"
				:key="todo.id"
				:title="todo.title"
				@delete="removeTodo(todo.id)"
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
		width: 33.333%;
	}
}
</style>
