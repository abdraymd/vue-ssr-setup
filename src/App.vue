<template>
	<div class="content">
		<!-- header -->
		<header class="header">
			<div class="container">
				<nav class="nav">
					<ul class="nav__list">
						<li class="nav__item">
							<router-link to="/" class="nav__link">Main</router-link>
						</li>
						<li class="nav__item">
							<router-link to="/about" class="nav__link">About</router-link>
						</li>
					</ul>
				</nav>
			</div>
		</header>

		<!-- view -->
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'App'
}
</script>

<style lang="scss" scoped>
.header {
	padding: 15px 0;
	background-color: #d3d5d9;
}

.nav {
	&__list {
		display: flex;
	}

	&__item {
		margin-right: 16px;

		&:last-child {
			margin-right: 0;
		}
	}

	&__link {
		font-size: 18px;
		font-weight: 500;
		color: #333;
		transition: color 0.2s;

		&:hover {
			color: #808080;
		}
	}
}
</style>
