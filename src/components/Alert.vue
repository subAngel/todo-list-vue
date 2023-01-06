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
		<div @click="close" class="close-alert">&times;</div>
	</div>
</template>

<script setup>
import { useBackgroundColorGlass } from "../composables/backgroundColor";
import { useBorderColor } from "../composables/borderColor";

const props = defineProps({
	message: {
		required: true,
		type: String,
	},
	show: {
		required: true,
		type: Boolean,
	},
	variant: {
		default: "danger",
		validator(value) {
			return ["danger", "info", "warning"].includes(value);
		},
	},
});

const emit = defineEmits(["close"]);

// * computed properties
const backgroundColor = useBackgroundColorGlass(props);
const borderColor = useBorderColor(props);

function close() {
	emit("close");
}
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
	font-weight: 400;
	text-align: center;
	border-radius: 50%;
}

.close-alert:hover {
	font-weight: 700;
}
</style>
