<template>
	<nav class="nav">
		<div class="logo">
			<img src="../assets/logo.svg" width="60" />
			<div class="brand">
				<RouterLink to="/" class="brand">ToDo App</RouterLink>
			</div>
		</div>
		<div class="links">
			<ul>
				<li><RouterLink to="/">Home</RouterLink></li>
				<li><RouterLink to="/about">About</RouterLink></li>
			</ul>
		</div>
	</nav>
</template>

<style scoped>
.nav {
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: var(--nav-bg);
	padding: 20px;
}

.logo,
.links {
	display: flex;
	justify-content: center;
	align-items: center;
}

.links ul {
	display: flex;
	align-items: center;
}

li {
	list-style: none;
}

a {
	text-decoration: none;
	color: var(--text-color-w);
}
a.router-link-active {
	color: var(--btn-success-color);
}
.brand {
	font-size: 2rem;
	font-weight: 500;
	margin-left: 20px;
}

@media (min-width: 40rem) {
	.links ul {
		margin-right: 50%;
	}
	li:not(:last-child) {
		margin-right: 10px;
	}
	a {
		font-size: 20px;
		font-weight: 600;
	}
}

@media (min-width: 20rem) {
	.links ul {
		margin-right: 10%;
	}
	li:not(:last-child) {
		margin-right: 10px;
	}
	a {
		font-size: 20px;
		font-weight: 500;
	}
}

@media (min-width: 56rem) {
	.links ul {
		margin-right: 100%;
	}
	li:not(:last-child) {
		margin-right: 60px;
	}
	a {
		font-size: 20px;
		font-weight: 600;
	}
}
</style>
