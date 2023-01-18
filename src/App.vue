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
</script>
