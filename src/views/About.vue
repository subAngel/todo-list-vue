<template>
	<!-- glassmorphic card -->
	<div class="container-02">
		<Tilt parallax="true">
			<div class="glassmorphic-card">
				<div class="imgBox">
					<img
						src="../../public/297494974_358014906483732_6573233404605369796_n.jpg"
						alt="Angel Jesús Zorrilla Cuevas"
						class="round"
					/>
				</div>
				<div class="contentBox">
					<h3>Angel Jesús Zorrilla Cuevas</h3>
					<h6>Oaxaca de Juárez, Oax.</h6>
					<p>Student and developer on <br />the way to full stack</p>
					<div class="buttons">
						<a href="https://github.com/subAngel"
							><i class="fa-brands fa-github"></i
						></a>
						<a href="https://www.instagram.com/who.agl/ "
							><i class="fa-brands fa-instagram"></i
						></a>
					</div>
					<div class="skills">
						<h6>Skills</h6>
						<ul>
							<li>Front End Developer</li>
							<li>Backend Developer</li>
							<li>Node</li>
							<li>Python</li>
							<li>Html</li>
							<li>Javascript</li>
							<li>React</li>
							<li>Vue</li>
							<li>Java</li>
							<li>DBA</li>
							<li>MongoDB</li>
						</ul>
					</div>
				</div>
			</div>
		</Tilt>
		<footer>
			<p>
				2022 - Created with <i class="fa fa-heart"></i> by
				<a target="_blank" href="https://github.com/subAngel">Angel</a>
				- Developed with
				<a target="_blank" href="https://vuejs.org/">Vue.js</a>
			</p>
		</footer>
	</div>
</template>

<script setup>
import Tilt from "vanilla-tilt-vue";
import { reactive } from "vue";

const tiltOptions = reactive({
	max: 35,

	startX: 0, // the starting tilt on the X axis, in degrees.

	startY: 0, // the starting tilt on the Y axis, in degrees.

	perspective: 1000,

	scale: 1, // 2 = 200%, 1.5 = 150%, etc..

	speed: 300, // Speed of the enter/exit transition
	transition: true, // Set a transition on enter/exit.
	axis: null, // What axis should be disabled. Can be X or Y.
	reset: true, // If the tilt effect has to be reset on exit.
	easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
	glare: false, // if it should have a "glare" effect
	"max-glare": 1, // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
	"glare-prerender": false,
	"mouse-event-element": null,
	gyroscope: true,
	gyroscopeMinAngleX: -45,
	gyroscopeMaxAngleX: 45,
	gyroscopeMinAngleY: -45,
	gyroscopeMaxAngleY: 45,
});
</script>

<style scoped>
h6 {
	margin: 10px 0;
	text-transform: uppercase;
}
.round {
	border: 1px solid #03bfcb;
	border-radius: 50%;
	padding: 7px;
	width: 50%;
}

.skills {
	text-align: center;
	/* padding: 15px; */
	margin-top: 10px;
	align-items: center;
}
.skills ul {
	list-style: none;
	margin: 0;
	padding: 0;
}
.skills ul li {
	border: 1px solid #2d2747;
	border-radius: 2px;
	display: inline-block;
	font-size: 9px;
	margin: 0 7px 7px 0;
	padding: 7px;
}
footer {
	display: inline-block;
	/* background-color: var(--nav-bg); */
	color: white;
	font-size: 14px;
	bottom: 0;
	width: 100%;
	left: 0;
	right: 0;
	text-align: center;
	z-index: 999;
}
footer p {
	margin: 10px 0;
}

footer i {
	color: red;
}

footer a {
	color: #3c97bf;
	text-decoration: none;
}
/* glassmorphic */
.buttons {
	display: flex;
	justify-content: space-evenly;
}
.container-02 {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	/* height: 100vh; */
	width: 50%;
	margin: 0 auto;
	/* background: #161616; */
}
.container-02 h2 {
	position: relative;
	width: 50%;
	text-align: center;
	z-index: 11;
	color: #fff;
	font-weight: 700;
	text-align: center;
	padding: 5px 8px;
	font-size: 1rem;
	border-radius: 15px;
	border-top: 1px solid rgba(255, 255, 255, 0.5);
	backdrop-filter: blur(5px);
	border-left: 1px solid rgba(255, 255, 255, 0.5);
	background: rgba(255, 255, 255, 0.05);
}

.container-02 .glassmorphic-card {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	z-index: 1;
	width: 320px;
	height: 470px;
	padding: 20px 30px;
	margin: 28px;
	box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
	border-radius: 15px;
	border-top: 1px solid rgba(255, 255, 255, 0.5);
	border-left: 1px solid rgba(255, 255, 255, 0.5);
	background: rgba(255, 255, 255, 0.1);
	backdrop-filter: blur(5px);
	overflow: hidden;
	transform: translateZ(20px);
}
.container-02 .glassmorphic-card:before {
	content: "";
	position: absolute;
	width: 50%;
	height: 100%;
	top: 0;
	left: 0;
	font-size: 9em;
	background: rgba(255, 255, 255, 0.05);
	pointer-events: none;
}
.container-02 .glassmorphic-card .imgBox {
	position: relative;
	text-align: center;
}
.container-02 .glassmorphic-card .imgBox i {
	font-size: max(80px);
	color: rgba(255, 255, 255, 0.1);
}
.container-02 .glassmorphic-card .contentBox {
	position: relative;
	margin-top: 10px;
	text-align: center;
	transition: 0.5s;
}
.container-02 .glassmorphic-card .contentBox:before {
	content: "DEV";
	position: absolute;
	top: -50px;
	left: -125px;
	width: 100%;
	font-size: 4em;
	text-transform: uppercase;
	font-weight: 500;
	letter-spacing: 2px;
	transform: rotate(-90deg);
	color: rgba(0, 0, 0, 0.2);
}
.container-02 .glassmorphic-card .contentBox h3 {
	font-size: 1.2em;
	color: #fff;
	z-index: 1;
}
.container-02 .glassmorphic-card .contentBox p {
	font-size: 0.8em;
	color: #fff;
	font-weight: 300;
}
.container-02 .glassmorphic-card .contentBox a {
	position: relative;
	display: inline-block;
	padding: 8px 20px;
	margin-top: 5px;
	background: rgba(255, 255, 255, 0.698);
	border-top: 1px solid rgba(255, 255, 255, 0.1);
	border-left: 1px solid rgba(255, 255, 255, 0.1);
	color: #000;
	border-radius: 20px;
	text-decoration: none;
	font-weight: 500;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
	transition: all 0.5s ease;
}
.container-02 .glassmorphic-card .contentBox a:hover {
	background-color: #24f760a6;
	color: white;
}
.container-02 p {
	z-index: 12;
	margin: 15px auto 10px;
	position: relative;
	color: #fff;
}
.container-02 p span {
	font-weight: 700;
}
</style>
