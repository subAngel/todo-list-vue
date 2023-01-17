<template>
	<!-- <Navbar /> -->
	<Nav />
	<!-- <NavBar2 /> -->
	<main class="container">
		<RouterView />
	</main>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Nav from "./components/Nav.vue";
import NavBar2 from "./components/NavBar2.vue";
</script>
