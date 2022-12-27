<template>
	<div class="todo">
		<p>{{ title }}</p>
		<div>
			<button @click="$emit('delete')" class="remove-todo-btn">&times;</button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			required: true,
			type: String,
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
</style>
