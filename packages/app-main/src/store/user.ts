import { defineStore } from 'pinia'
import { ref } from 'vue'

export type User = {
	username: string,
	phone: string,
	email: string,
}

export const useUserStore = defineStore('user', function () {
	const user = ref<User | null>({
		username: 'admin',
		phone: '12345678901',
		email: 'test@gmail.com',
	})
	const token = ref(null)

	function login(payload: { username: string, password: string }) {
		user.value = {
			username: 'admin',
			phone: '12345678901',
			email: 'test@gmail.com',
		}
	}

	function getInfo() {
		// fetch user info

	}

	function register(payload: {username: string, password: string}) {
		// register user
	}

	return {
		user,
		token,
		login,
		register,
	}
})
