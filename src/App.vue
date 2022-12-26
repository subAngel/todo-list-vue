<script>
export default {
	data() {
		return {
			todoTitle: "",
			todos: [],
		};
	},
	methods: {
		addTodo() {
			this.todos = this.todos.concat([todoTitle]);
		},
		removeTodo(todoTitle) {
			this.todos = this.todos.filter((todo) => todo !== todoTitle);
		},
	},
};
</script>

<template>
	<nav class="nav">
		<img src="./assets/logo.svg" width="60" />
		<div class="brand">TODO list App</div>
	</nav>
	<main class="container">
		<section>
			<form class="add-todo-form">
				<input v-model="todoTitle" type="text" placeholder="Todo Title" />

				<button @click.prevent="addTodo">Add todo</button>
			</form>
		</section>
		<section class="todos">
			<div v-for="todo in todos" class="todo">
				<p>{{ todo }}</p>
				<div>
					<button @click="removeTodo(todoTitle)" class="remove-todo-btn">
						&times;
					</button>
				</div>
			</div>
		</section>
	</main>
</template>

<style scoped>
.nav {
	display: flex;
	align-items: center;
	background-color: var(--nav-bg);
	padding: 20px;
}

.brand {
	font-size: 2rem;
	font-weight: 500;
	margin-left: 20px;
}

.add-todo-form {
	display: flex;
	justify-content: space-between;
	margin-top: 30px;
	background-color: rgba(255, 255, 255, 0.1);
	border-radius: 10px;
	backdrop-filter: blur(10px);
	border: 1px solid rgba(255, 255, 255, 0.15);
	box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
	padding: 30px;
}

.add-todo-form input {
	width: 80%;
	border: none;
	background-color: rgba(255, 255, 255, 0.07);
	color: #e5e5e5;
	border-radius: 3px;
	padding: 10px 10px;
}

.add-todo-form input:focus {
	border: none;
}
::placeholder {
	color: #e5e5e5;
}

.add-todo-form button {
	width: 17%;
	background-color: rgb(112, 255, 112);
	border: none;
	border-radius: 5px;
	color: #28151f;
	font-weight: bold;
	padding: 5px;
	margin-left: 10px;
}
button:hover {
	cursor: pointer;
}

/* Card todo */

.todo {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: rgba(255, 255, 255, 0.4);
	border: 1px solid rgba(255, 255, 255, 0.45);
	box-shadow: 0 15px 15px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
	backdrop-filter: blur(10px);
	margin-top: 30px;
	padding: 0 20px 0 20px;
}

.remove-todo-btn {
	border-radius: 50%;
	border: none;
	grid-template: 40px;
	width: 40px;
	font-size: 30px;
	color: white;
	background-color: #ff1f71;
}

.update-todo-btn {
	border-radius: 50%;
	border: none;
	grid-template: 40px;
	width: 40px;
	font-size: 30px;
	color: white;
	background-color: #2db2ff;
}

.todos {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	margin: 0;
}

@media (min-width: 40rem) {
	.todo {
		width: 70%;
	}
}

@media (min-width: 56rem) {
	.todo {
		width: 33.333%;
	}
}
</style>
