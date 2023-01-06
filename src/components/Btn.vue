<template>
	<button
		:style="{ backgroundColor, color }"
		:class="{ circle: applyCircleClass }"
		v-bind="$attrs"
	>
		<slot />
	</button>
</template>

<script setup>
import { computed } from "vue";
import { useBackgroundColorBtn } from "../composables/backgroundColor";
import { useColor } from "../composables/color";

const props = defineProps({
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
});

const backgroundColor = useBackgroundColorBtn(props);
const color = useColor(props);

const applyCircleClass = computed(() => {
	return props.circle;
});
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
	cursor: no-drop;
}

.circle {
	border-radius: 50%;
}
</style>
