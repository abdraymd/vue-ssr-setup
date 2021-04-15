import Vue from 'vue'
import Vuex from 'vuex'

import users from './modules/users'

const isProduction = process.env.NODE_ENV === 'production'

Vue.use(Vuex)

export function createStore() {
	return new Vuex.Store({
		modules: {
			users
		},
		strict: !isProduction
	})
}
