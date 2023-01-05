<template>
	<div ref="modal" v-show="show" class="modal">
		<slot name="alert-modal" />
		<!-- Modal content -->
		<div class="modal-content">
			<div class="modal-header">
				<slot name="header" />
			</div>
			<div class="modal-body">
				<slot name="body" />
			</div>
			<div class="modal-footer">
				<slot name="footer" />
			</div>
		</div>
	</div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
// props
const props = defineProps({
	show: {
		default: false,
	},
});
const emit = defineEmits(["close"]);
// variables
const modal = ref(null);
const clickListener = (e) => {
	if (e.target === modal.value) {
		emit("close");
	}
};
const closeOnEscListener = (e) => {
	if (e.key === "Escape") {
		emit("close");
	}
};
onMounted(() => {
	window.addEventListener("click", clickListener);
	window.removeEventListener("keydown", closeOnEscListener);
});
onBeforeUnmount(() => {
	window.removeEventListener("click", clickListener);
	window.removeEventListener("keydown", closeOnEscListener);
});
</script>

<style scoped>
.modal {
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgba(0, 0, 0, 0.4);
	backdrop-filter: blur(10px);
}

/* Modal Content/Box */
.modal-content {
	position: relative;
	background-color: var(--glass-bg-color);
	border-radius: 15px;
	margin: auto;
	margin-top: 10%;
	padding: 0;
	border: 1px solid #888;
	width: 60%;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	animation-name: animatetop;
	animation-duration: 0.4s;
}

.modal-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2px 16px;
	background-color: rgba(0, 0, 0, 0.4);
	color: white;
	border-radius: 15px 15px 0 0;
}

.modal-body {
	padding: 30px 16px;
}

.modal-footer {
	padding: 15px 16px;
	background-color: rgba(0, 0, 0, 0.4);
	color: white;
	border-radius: 0 0 15px 15px;
}

/* The Close Button */
.close {
	color: #aaa;
	float: right;
	font-size: 28px;
	font-weight: bold;
}

.close:hover,
.close:focus {
	color: black;
	text-decoration: none;
	cursor: pointer;
}

/* Add Animation */
@keyframes animatetop {
	from {
		top: -300px;
		opacity: 0;
	}
	to {
		top: 0;
		opacity: 1;
	}
}

/* mediaquerys */
@media (min-width: 47rem) {
	.modal-content {
		width: 40%;
	}
}
@media (min-width: 30rem) {
	.modal-content {
		margin-top: 25%;
		width: 70%;
	}
}
@media (min-width: 56rem) {
	.modal-content {
		margin-top: 10%;
	}
}
</style>
