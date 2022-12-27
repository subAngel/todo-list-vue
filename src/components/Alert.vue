<template>
	<div
		v-if="show"
		class="alert"
		:style="{
			backgroundColor,
			borderColor,
		}"
	>
		<div>{{ message }}</div>
		<div @click="$emit('close')" class="close-alert">&times;</div>
	</div>
</template>

<script>
export default {
	props: {
		message: {
			required: true,
			type: String,
		},
		show: {
			required: true,
			type: Boolean,
		},
		type: {
			default: "danger",
			validator(value) {
				return ["danger", "info", "warning"].includes(value);
			},
		},
	},
	emits: ["close"],
	computed: {
		backgroundColor() {
			const options = {
				danger: "var(--danger-color)",
				info: "var(--info-color)",
				warning: "var(--warning-color)",
			};
			return options[this.type];
		},
		borderColor() {
			const options = {
				danger: "var(--danger-border-color)",
				info: "var(--info-border-color)",
				warning: "var(--warning-border-color)",
			};
			return options[this.type];
		},
	},
	methods: {},
};
</script>

<style scoped>
.alert {
	display: flex;
	justify-content: space-between;
	width: 250px;
	height: 50px;
	margin: 0 auto;
	align-items: center;
	border: 1px solid;
	box-shadow: 0 15px 15px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
	backdrop-filter: blur(10px);
	margin-top: 30px;
	padding: 0 20px 0 20px;
}

.close-alert {
	font-size: xx-large;
	cursor: pointer;
	width: 1.8ch;
	font-weight: 500;
	text-align: center;
	border-radius: 50%;
	transition: 0.3s ease-in;
}

.close-alert:hover {
	background-color: #ff1f71;
}
</style>
