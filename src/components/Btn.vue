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
				return ["success", "remove", "update"].includes(value);
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
				remove: "var(--btn-remove-color)",
				update: "var(--btn-update-color)",
			};
			return options[this.type];
		},
		color() {
			const options = {
				success: "var(--text-color-b)",
				remove: "var(--text-color-w)",
				update: "var(--text-color-w)",
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
}
button:hover {
	cursor: pointer;
}

.circle {
	border-radius: 50%;
}
</style>
