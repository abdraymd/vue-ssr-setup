<template>
	<ul class="user-list">
		<li v-for="(user, i) in users" :key="i" class="user-list__item">
			{{ user.name }} {{ user.surname }}
		</li>
	</ul>
</template>

<script>
export default {
	name: 'UserList',
	props: {
		users: {
			type: Array,
			default: () => []
		}
	}
}
</script>

<style lang="scss" scoped>
.user-list {
	&__item {
		margin-bottom: 12px;

		&:last-child {
			margin-bottom: 0;
		}
	}
}
</style>
