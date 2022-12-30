<template>
	<div class="loader-container">
		<div class="loader" :class="{ smaller: applySmallerClass }"></div>
	</div>
</template>

<script>
export default {
	props: {
		smaller: {
			default: false,
			type: Boolean,
		},
	},

	computed: {
		applySmallerClass() {
			return this.smaller;
		},
	},
};
</script>

<style scoped>
.loader-container {
	display: flex;
	justify-content: center;
}

*,
*:before,
*:after {
	box-sizing: border-box;
}

.loader {
	width: 100px;
	height: 100px;
	position: relative;
	background: rgba(255, 255, 255, 0.13);
	animation-duration: 2.5s;
	animation-name: animSpin;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
}

@keyframes animSpin {
	50% {
		transform: rotateZ(180deg) scale(0.94);
	}
	100% {
		transform: rotateZ(360deg) scale(1);
	}
}

.loader,
.loader:before,
.loader:after {
	border-radius: 50%;
}

.loader:before,
.loader:after {
	content: "";
	position: absolute;
	border: 8px solid transparent;
}

.loader:before {
	width: 75%;
	height: 75%;
	background: rgba(58, 139, 105, 0.13);
	left: 12.5%;
	top: 12.5%;
	border-left: 8px solid rgba(65, 184, 131, 0.972);
	border-bottom: 8px solid rgba(65, 184, 131, 0.972);
}

.loader:after {
	width: 40%;
	height: 40%;
	left: 30%;
	top: 30%;
	border-right: 8px solid rgb(96, 201, 239);
	border-left: 8px solid rgb(96, 201, 239);
	border-bottom: 8px solid rgb(96, 201, 239);
}

.smaller {
	width: 20px;
	height: 20px;
}
</style>
