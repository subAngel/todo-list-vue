import { ref, watch } from "vue";
import axios from "axios";
import { stringify, toJSON } from "flatted";

function useFetch(url, options = { onError: null }) {
	const data = ref(null);
	const error = ref(null);
	const isLoading = ref(true);

	let stopErrorWatcher = null;
	// si pasan la opcion on error se ejecuta lo siguiente
	if (options.onError) {
		stopErrorWatcher = watch(error, (e) => options.onError(e));
	}

	axios
		.get(url)
		.then((res) => {
			// console.log("fetch");
			console.log(res.data.message);
			data.value = res.data.message;
			// console.log(data.value.todos);
		})
		.catch((err) => (error.value = err))
		.finally(() => {
			isLoading.value = false;
			// si stopErrorWatcher es distinto de nulo se detiene el watch
			if (stopErrorWatcher) {
				stopErrorWatcher();
			}
		});

	return {
		data,
		error,
		isLoading,
	};
}

export { useFetch };
