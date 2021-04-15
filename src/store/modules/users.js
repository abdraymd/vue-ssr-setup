import axios from 'axios'

export default {
	state: () => ({
		users: []
	}),
	getters: {
		getUsers: state => state.users
	},
	actions: {
		fetchUsers({ commit }) {
			return axios
				.get('https://jsonplaceholder.typicode.com/users')
				.then(response => commit('setUsers', response.data))
		}
	},
	mutations: {
		setUsers(state, users) {
			state.users = users
		}
	}
}
