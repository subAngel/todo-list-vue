<template>
	<button
		@click.prevent="$emit('click')"
		:style="{ backgroundColor, color }"
		:class="{ circle: applyCircleClass }"
	>
		<slot />
	</button>
</template>

<script>
export default {
	props: {
		type: {
			required: false,
			default: "success",
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
			return options[this.type];
		},
		color() {
			const options = {
				success: "var(--text-color-b)",
				danger: "var(--text-color-w)",
				secondary: "var(--text-color-w)",
			};
			return options[this.type];
		},
		applyCircleClass() {
			return this.circle;
		},
	},
	emits: ["click"],
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

.circle {
	border-radius: 50%;
}
</style>
