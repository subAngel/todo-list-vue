<template>
	<div class="todo">
		<div class="todo-info">
			<h3 class="title">{{ title }}</h3>
			<p class="desc">{{ description }}</p>
			<p class="date">{{ moment(date).format("YYYY/MM/DD") }}</p>
		</div>

		<div>
			<Btn
				@click="$emit('update')"
				class="update-todo-btn"
				variant="secondary"
				circle
			>
				<Pencil />
			</Btn>
			<Btn
				@click="$emit('delete')"
				class="remove-todo-btn"
				variant="danger"
				circle
			>
				<Trash />
			</Btn>
		</div>
	</div>
</template>

<script setup>
import Btn from "./Btn.vue";
import Pencil from "./icons/Pencil.vue";
import Trash from "./icons/Trash.vue";
import moment from "moment";

const props = defineProps({
	title: {
		required: true,
		type: String,
	},
	description: {
		type: String,
	},
	date: {
		type: String,
	},
});

const emit = defineEmits(["delete", "update"]);
</script>

<style scoped>
.todo {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: rgba(255, 255, 255, 0.4);
	border: 1px solid rgba(255, 255, 255, 0.45);
	box-shadow: 0 15px 15px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
	backdrop-filter: blur(10px);
	margin-top: 30px;
	padding: 0 20px 0 20px;
}

.todo-info {
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	margin-left: 20px;
}

.title {
	font-size: 30px;
	margin-top: 20px;
	margin-bottom: 0;
}
.desc {
	font-weight: 500;
}
.date {
	font-style: italic;
	font-weight: 700;
}
.remove-todo-btn {
	width: 40px;
	height: 40px;
	font-size: 30px;
}

.update-todo-btn {
	width: 40px;
	height: 40px;
	font-size: 30px;
	margin-right: 10px;
}

.todo > div {
	display: flex;
}
</style>
