<template>
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
</template>

<script>
import Modal from "./Modal.vue";

export default {
	components: {
		Modal,
	},
};
</script>

<style scoped>
/* modal */
.alert-container {
	/* position: absolute; */
	display: flex;
	justify-content: center;
	align-items: center;
}
.alert-update {
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
