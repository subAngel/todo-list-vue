<template>
	<header>
		<!-- <a href="" class="logo"> <i class="uil uil-estate"></i>Home </a> -->
		<RouterLink to="/" class="logo">
			<i class="fa-brands fa-vuejs"></i>
			<span> ToDo App</span>
		</RouterLink>

		<ul class="navbar" v-bind:class="[openMenu ? openClass : '']">
			<li>
				<RouterLink to="/" class="active">
					<i class="fa-solid fa-house-chimney"></i>
					<span> Home</span></RouterLink
				>
			</li>
			<li>
				<RouterLink to="/todos/new"
					><i class="fa-solid fa-square-plus"></i> Create Todo</RouterLink
				>
			</li>
			<li>
				<RouterLink to="/about"
					><i class="fa-solid fa-circle-user"></i> About</RouterLink
				>
			</li>
		</ul>

		<div class="main">
			<!-- <RouterLink to="" class="user">
				<i class="fa-solid fa-user"></i>
				<span>Sign In</span>
			</RouterLink>
			<RouterLink to="">
				<span>Register</span>
			</RouterLink> -->
			<div
				class="bx bx-menu"
				id="menu-icon"
				@click="abrirMenu"
				v-bind:class="[openX ? xClass : '']"
			></div>
			<!-- <span id="menu-icon">
				<i class="fa-solid fa-bars"></i>
			</span> -->
		</div>
	</header>
</template>

<script setup>
import { ref } from "vue";

const openMenu = ref(false);
const openX = ref(false);
const openClass = ref("open");
const xClass = ref("bx-x");

function abrirMenu() {
	openMenu.value = !openMenu.value;
	openX.value = !openX.value;
}
</script>

<style scoped>
header {
	position: sticky;
	width: 100%;
	top: 0;
	right: 0;
	z-index: 100;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #8c268c70;
	backdrop-filter: blur(20px);
	padding: 20px 11%;
	transition: all 0.5s ease;
}

.logo {
	display: flex;
	align-items: center;
}
.logo i {
	color: rgb(81, 212, 81);
	font-size: 32px;
	margin-right: 4px;
}

.logo span {
	color: #fff;
	font-size: 1.8rem;
	font-weight: 600;
}

.navbar {
	display: flex;
}

.navbar a {
	color: white;
	font-size: 1.1rem;
	font-weight: 500;
	padding: 5px 0;
	margin: 0 30px;
	transition: all 0.5s ease;
}
.navbar a:hover {
	color: rgb(81, 212, 81);
}
.navbar a.router-link-active {
	color: rgb(81, 212, 81);
}
.main {
	display: flex;
	align-items: center;
}

.main a {
	margin-right: 25px;
	margin-left: 10px;
	color: white;
	font-size: 1.1rem;
	font-weight: 500;
	transition: all 0.5s ease;
}
.main a:hover {
	color: rgb(81, 212, 81);
}

.user {
	/* display: flex; */
	align-items: center;
}

.user i {
	color: rgb(81, 212, 81);
	font-size: 28px;
	margin-right: 7px;
}
#menu-icon {
	font-size: 30px;
	color: #fff;
	cursor: pointer;
	z-index: 10001;
	display: none;
}

/* media querys */
@media (max-width: 1440px) {
	.main {
		display: none;
	}
	header {
		padding: 14px 2%;
		transition: 0.2s;
	}
	.navbar a {
		padding: 5px 0;
		margin: 0 20px;
	}
}
@media (min-width: 1440px) {
	.main {
		display: none;
	}
}
@media (max-width: 1090px) {
	.main {
		display: block;
	}
	#menu-icon {
		display: block;
	}

	.navbar {
		position: absolute;
		top: 100%;
		right: 100%;
		opacity: 0;
		width: 270px;
		min-height: 20%;
		background-color: rgb(81, 212, 81);
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		border-radius: 10px;
		transition: all 0.5s ease;
	}
	.navbar a {
		display: block;
		margin: 8px 0;
		padding: 0 20px;
		transition: all 0.5s ease;
	}

	.navbar a:hover {
		color: rgb(116, 224, 116);
		transform: translateY(5px);
	}
	.navbar a.router-link-active {
		color: rgb(39, 59, 39);
	}

	.navbar.open {
		opacity: 1;
		right: 2%;
		/* display: block; */
	}
}
</style>
