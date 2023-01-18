<template>
	<Alert
		:message="alert.message"
		:show="alert.show"
		:variant="alert.variant"
		@close="alert.show = false"
	/>
	<div class="container">
		<form class="add-todo-form" id="addForm">
			<div class="form">
				<input
					v-model="todoTitle"
					type="text"
					placeholder="Todo Title"
					autocomplete="off"
					id="title"
				/>
				<textarea
					v-model="todoDesc"
					placeholder="Todo description"
					autocomplete="off"
					id="description"
				/>
				<input v-model="todoDate" type="date" id="date" />
			</div>
			<div class="div-btn">
				<Btn
					@click.prevent="addTodo()"
					:disabled="isLoading"
					variant="success"
					class="btn"
				>
					<Loading v-if="isLoading" smaller />
					<span v-else>Add</span>
				</Btn>
			</div>
		</form>
	</div>
</template>

<script setup>
import Alert from "../components/Alert.vue";
import Loading from "../components/Loading.vue";
import Btn from "../components/Btn.vue";
import { useAlert } from "../composables/alert";

import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import moment from "moment";

const todoTitle = ref("");
const todoDesc = ref("");
const todoDate = ref("");
const isLoading = ref(false);

const router = useRouter();

const emit = defineEmits(["add"]);

const { alert, showAlert } = useAlert();

async function addTodo() {
	// console.log(todo);
	if (todoTitle.value === "" || todoDesc.value === "" || todoDate.value === "") {
		showAlert("Todo info is required");
		return;
	}
	isLoading.value = true;
	const res = await axios.post("https://todo-api-adp0.onrender.com/todos", {
		title: todoTitle.value,
		description: todoDesc.value,
		date: todoDate.value,
	});
	// console.log(res);
	isLoading.value = false;
	router.push("/");
	// todos.value.push(res.data);
}
</script>

<style scoped>
.add-todo-form {
	display: flex;
	justify-content: space-evenly;
	flex-direction: column;
	margin-top: 30px;
	background-color: rgba(255, 255, 255, 0.2);
	border-radius: 10px;
	backdrop-filter: blur(10px);
	border: 1px solid rgba(255, 255, 255, 0.15);
	box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
	padding: 30px;
}

.form {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.div-btn {
	display: flex;
	justify-content: flex-end;
	margin-top: 20px;
	margin-right: 20px;
}

.add-todo-form input,
textarea {
	width: 80%;
	border: none;
	background-color: rgba(255, 255, 255, 0.07);
	color: #e5e5e5;
	border-radius: 5px;
	padding: 10px 10px;
}

.add-todo-form input:focus {
	border: none;
}

::placeholder {
	color: #e5e5e5;
}

#title {
	font-size: 1.6rem;
	margin-bottom: 10px;
}
#description {
	margin-bottom: 10px;
}

.btn {
	width: 17%;
	font-weight: 600;
	border-radius: 5px;
	/* margin-left: 10px; */
}

.loading {
	width: 30;
	height: 30px;
}

@media (min-width: 40rem) {
	.container {
		width: 60%;
	}
}

@media (min-width: 20rem) {
	.container {
		width: 95%;
		margin: 0 auto;
	}
}

@media (min-width: 56rem) {
	.container {
		width: 50%;
	}
}
</style>
