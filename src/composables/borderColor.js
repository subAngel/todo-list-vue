import { computed } from "vue";

const useBorderColor = (props) => {
	return computed(() => {
		const options = {
			danger: "var(--danger-border-color)",
			info: "var(--info-border-color)",
			warning: "var(--warning-border-color)",
		};
		return options[props.variant];
	});
};

export { useBorderColor };
