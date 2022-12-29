<template>
	<form class="add-todo-form">
		<input v-model="todoTitle" type="text" placeholder="Todo Title" />

		<Btn
			@click.prevent="
				$emit('submit', todoTitle);
				todoTitle = '';
			"
			variant="success"
			class="btn"
			>Add</Btn
		>
	</form>
</template>

<script>
import Btn from "./Btn.vue";

export default {
	components: { Btn },
	data() {
		return {
			todoTitle: "",
		};
	},
	emits: ["submit"],
};
</script>

<style scoped>
.add-todo-form {
	display: flex;
	justify-content: space-between;
	margin-top: 30px;
	background-color: rgba(255, 255, 255, 0.2);
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

.btn {
	width: 17%;
	font-weight: 600;
	border-radius: 5px;
	margin-left: 10px;
}
</style>
