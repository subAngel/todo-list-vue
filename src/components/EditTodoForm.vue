<template>
	<Modal
		:show="show"
		@close="
			$emit('close');
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
					:variant="alertUpdate.variant"
					class="alert-update"
				/>
			</div>
		</template>
		<template v-slot:header>
			<h2>Edit TODO</h2>
			<Btn type="blank" @click="$emit('close')" circle class="close-modal"
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
					:value="modelValue"
					@input="$emit('update:modelValue', $event.target.value)"
					placeholder="Todo Title"
				/>
			</form>
		</template>

		<template #footer>
			<div class="footer-modal">
				<Btn
					class="modal-submit"
					:disabled="modelValue == ''"
					@click="$emit('submit')"
					variant="success"
					>Submit</Btn
				>
			</div>
		</template>
	</Modal>
</template>

<!-- * updateTodo(editTodoForm.todo.title)
@click="editTodoForm.show = false" -->

<script>
import Modal from "./Modal.vue";
import Btn from "./Btn.vue";
import Alert from "./Alert.vue";

export default {
	components: {
		Modal,
		Btn,
		Alert,
	},
	data() {
		return {
			alertUpdate: {
				show: false,
				message: "",
				variant: "warning",
			},
		};
	},

	props: ["modelValue", "show"],
	emits: ["close", "submit", "update:modelValue"],
	methods: {
		validar() {
			if (this.modelValue == "") {
				this.alertUpdate.show = true;
				this.alertUpdate.message = "Please enter a todo title";
				return true;
			}
			this.alertUpdate.show = false;
			return false;
		},
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

.modal-submit:disabled {
	opacity: 0.7;
}
</style>
