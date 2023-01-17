<template>
	<nav>
		<RouterLink to="/" class="logo">
			<i class="fa-brands fa-vuejs"></i>
			<span> ToDo App</span>
		</RouterLink>

		<ul class="navbar">
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
		<div class="burger">
			<div class="line1"></div>
			<div class="line2"></div>
			<div class="line3"></div>
		</div>
	</nav>
</template>

<style scoped>
nav {
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: 10vh;
	background-color: var(--nav-bg);
	padding: 0 7%;
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
	justify-content: space-between;
	width: 30%;
	z-index: 100;
}

.navbar a {
	color: white;
	font-weight: 500;
}
.burger {
	display: none;
}
.burger div {
	width: 25px;
	height: 2px;
	background-color: white;
	border-radius: 10px;
	margin: 5px;
}

@media screen and (max-width: 1024px) {
	.navbar {
		width: 60%;
	}
}

@media screen and (max-width: 768px) {
	nav {
		background-color: rgba(51, 148, 106, 0.4);
		backdrop-filter: blur(20px);
		box-shadow: 0 15px 15px rgba(0, 0, 0, 0.3);
		z-index: 100;
	}
	body {
		overflow-x: hidden;
	}
	.navbar {
		position: absolute;
		right: 0;
		height: 90vh;
		top: 10vh;
		width: 40%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;

		background-color: rgba(51, 148, 106, 0.4);
		/* border: 1px solid rgba(114, 171, 135, 0.45); */
		backdrop-filter: blur(20px);
		box-shadow: 0 15px 15px rgba(0, 0, 0, 0.3);
		transform: translateX(100%);
	}
	.navbar a {
		z-index: 1001;
		font-size: 0.6rem;
	}
}
</style>
