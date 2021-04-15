<template>
	<main class="main">
		<div class="container">
			<h1 class="main__heading heading">Main</h1>
			<user-list :users="getUsers" />
		</div>
	</main>
</template>

<script>
import UserList from '@/components/UserList.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'Main',
	metaInfo: {
		title: 'Main | Vue SSR'
	},
	components: {
		UserList
	},
	computed: {
		...mapGetters(['getUsers'])
	},
	serverPrefetch() {
		return this.fetchUsers()
	},
	mounted() {
		if (!this.getUsers.length) {
			this.fetchUsers()
		}
	},
	methods: {
		...mapActions(['fetchUsers'])
	}
}
</script>
