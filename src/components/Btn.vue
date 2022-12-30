<template>
	<button
		:style="{ backgroundColor, color }"
		:class="{ circle: applyCircleClass }"
		v-bind="$attrs"
	>
		<slot />
	</button>
</template>

<script>
export default {
	props: {
		variant: {
			required: false,
			default: "blank",
			validator(value) {
				return ["success", "danger", "secondary", "blank"].includes(value);
			},
		},
		circle: {
			default: false,
			type: Boolean,
		},
	},
	computed: {
		backgroundColor() {
			const options = {
				success: "var(--btn-success-color)",
				danger: "var(--btn-remove-color)",
				secondary: "var(--btn-update-color)",
				blank: "",
			};
			return options[this.variant];
		},
		color() {
			const options = {
				success: "var(--text-color-b)",
				danger: "var(--text-color-w)",
				secondary: "var(--text-color-w)",
			};
			return options[this.variant];
		},
		applyCircleClass() {
			return this.circle;
		},
	},
};
</script>

<style scoped>
button {
	color: var(--text-color-w);
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px;
}

button:hover {
	cursor: pointer;
}

button:disabled {
	opacity: 0.7;
}

.circle {
	border-radius: 50%;
}
</style>
