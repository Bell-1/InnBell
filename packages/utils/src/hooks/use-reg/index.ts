// 手机正则
const phoneReg = /^1[3456789]\d{9}$/

// 邮箱正则
const emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/

// 简单密码正则
const passwordReg = /^[a-zA-Z0-9]{6,16}$/

// 复杂密码正则
const strongPasswordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/

// 非空正则
const notEmptyReg = /\S/

export const useReg = () => {
	return {
		phoneReg,
		emailReg,
		passwordReg,
		strongPasswordReg,
		notEmptyReg,
	}
}
