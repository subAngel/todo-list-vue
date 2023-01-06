import { computed } from "vue";
function useBackgroundColorGlass(props) {
	return computed(() => {
		const options = {
			danger: "var(--danger-color)",
			info: "var(--info-color)",
			warning: "var(--warning-color)",
		};
		return options[props.variant];
	});
}

function useBackgroundColorBtn(props) {
	return computed(() => {
		const options = {
			success: "var(--btn-success-color)",
			danger: "var(--btn-remove-color)",
			secondary: "var(--btn-update-color)",
			blank: "",
		};
		return options[props.variant];
	});
}

export { useBackgroundColorBtn, useBackgroundColorGlass };
