import { computed } from "vue";

function useColor(props) {
	return computed(() => {
		const options = {
			success: "var(--text-color-b)",
			danger: "var(--text-color-w)",
			secondary: "var(--text-color-w)",
		};
		return options[props.variant];
	});
}

export { useColor };
