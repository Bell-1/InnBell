<template>
	<div :class="ns.b()">
		<div :class="[ns.e('content')]">
			<span :class="[ns.e('title')]">Login</span>
			<form ref="loginForm" :class="[ns.e('form')]" :model="form">
				<div :class="[ns.e('form-item')]">
					<label :class="[ns.e('form-label')]">Username</label>
					<input
						v-model="form.account"
						:class="ns.e('form-input')"
						autocomplete="off"
						placeholder="Input your account"
						@keydown.enter="handleLogin" />
					<span class="form-icon"></span>
				</div>
				<div :class="[ns.e('form-item')]">
					<label :class="[ns.e('form-label')]">Password</label>
					<input
						v-model="form.password"
						:class="ns.e('form-input')"
						type="password"
						autocomplete="off"
						placeholder="Input your password"
						@keydown.enter="handleLogin" />
					<span class="form-icon"></span>
				</div>
				<div class="text-right p-t-8 p-b-31">
					Forgot password?
				</div>
				<div :class="ns.e('login-btn')">
					<div :class="ns.e('login-btn-wrap')">
						<div :class="ns.e('login-btn-bg')"></div>
						<button :class="ns.e('login-btn-content')">
							Login
						</button>
					</div>
				</div>

				<div class="text-center m-t-60">
					<span class="txt1">
						Create an account?
					</span>

					<a class="link-text" @click="handleToggleShowForm(2)">
						Sign up
					</a>
				</div>
				<!-- <button class="form-button text" @click="handleToggleShowForm(2)">注册</button> -->
			</form>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: 'AppLogin',
}
</script>

<script lang="ts" setup>
import { ref } from 'vue'
import { useNamespace } from '@innbell/utils'

const ns = useNamespace('Login')
const form = ref({
	account: 'admin',
	password: 'Aa123456!',
})

const showForm = ref(1)

const handleLogin = async () => {
}

const handleToggleShowForm = (index = 1) => {
	showForm.value = index
}

</script>

<style src="./index.scss"></style>