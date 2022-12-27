<template>
	<section class="todos">
		<div v-for="todo in todos" class="todo" :key="todo.id">
			<p>{{ todo.title }}</p>
			<div>
				<button @click="$emit('delete', todo)" class="remove-todo-btn">
					&times;
				</button>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {};
	},
	props: {
		todos: {
			type: Array,
		},
	},
	emits: ["delete"],
};
</script>

<style scoped>
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

.remove-todo-btn:hover {
	cursor: pointer;
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
