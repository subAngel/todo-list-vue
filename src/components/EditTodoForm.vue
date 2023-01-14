<template>
	<Modal
		:show="show"
		@close="
			$emit('close');
			alertUpdate.show = false;
		"
		class="modal"
		id="modal"
	>
		<template #alert-modal>
			<div class="alert-container">
				<Alert
					:show="alert.show"
					@close="alert.show = false"
					:message="alert.message"
					:variant="alert.variant"
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
					autocomplete="off"
				/>
			</form>
		</template>

		<template #footer>
			<div class="footer-modal">
				<Btn
					class="modal-submit"
					:disabled="modelValue == ''"
					@click.prevent="$emit('submit')"
					variant="success"
					>Submit</Btn
				>
			</div>
		</template>
	</Modal>
</template>

<!-- * updateTodo(editTodoForm.todo.title)
@click="editTodoForm.show = false" -->

<script setup>
import Modal from "./Modal.vue";
import Btn from "./Btn.vue";
import Alert from "./Alert.vue";
import { onBeforeUnmount, onMounted, reactive } from "vue";
import { useAlert } from "../composables/alert";
//variables
const alertUpdate = reactive({
	show: false,
	message: "",
	variant: "warning",
});
//props
const props = defineProps(["modelValue", "show"]);
const { alert, showAlert } = useAlert();

//emits
const emit = defineEmits(["close", "submit", "update:modelValue"]);
// metodos
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
