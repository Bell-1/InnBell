import { Component, Element, Prop, State, Watch, h } from '@stencil/core'
import { useNamespace, isString } from '@innbell/utils'
import tinycolor from 'tinycolor2'

@Component({
	tag: 'inn-button',
	styleUrl: 'inn-button.scss',
	shadow: false,
})
export class InnButton {
	@Element() el: Element

	@Prop() customClass: string
	@Prop() type: 'default' | 'primary' | 'success' | 'danger' | 'warning' | 'dashed' | 'text' | 'link' = 'default'
	@Prop() disabled = false
	@Prop() loading = false
	@Prop() icon: string
	@Prop() iconPosition: 'left' | 'right' = 'left'
	@Prop() size: 'small' | 'medium' | 'large' = 'medium'
	@Prop() round = false
	@Prop() circle = false
	@Prop() ghost = false
	@Prop() autofocus = false
	@Prop() nativeType: 'button' | 'submit' | 'reset' = 'button'
	@Prop() color: string

	@State() ns = useNamespace('button', 'inn')
	@State() colorStyles = null

	@Watch('type')
	handleChangeType() {
		this.colorStyles = null
	}

	@Watch('color')
	handleChangeColor() {
		this.calcColor()
	}

	componentDidLoad() {
		// 首次加载完成计算颜色
		this.calcColor()
	}

	// 向上查找有背景颜色的元素
	findBgEl(el: HTMLElement) {
		while (el) {
			if (el.style.backgroundColor) {
				return el.style.backgroundColor
			}
			el = el.parentElement
		}

		return '#FFF'
	}

	// 计算颜色
	calcColor() {
		// if(this.colorStyles || this.disabled) return
		const { ns } = this
		const blockName = `.${ns.b()}`
		// 获取当前组件的颜色
		const rootEl = (this.el.shadowRoot || this.el).querySelector(blockName)
		if (!rootEl) return
		const elStyles = window.getComputedStyle(rootEl)

		let elColor = this.color
		const colors = ['primary', 'success', 'danger', 'warning', 'default']
		if (!elColor) {
			// 没有自定义颜色时
			if (colors.includes(this.type)) {
				// 是已知的四种颜色
				const baseColorVar = `--base-${this.type}-color`
				elColor = elStyles.getPropertyValue(baseColorVar) || elColor
			} else {
				// 不是已知的四种颜色, 获取元素本身或者父元素~颜色
				elColor = this.findBgEl(rootEl as HTMLElement)
			}
		}

		// 没有背景
		const noneBg = this.ghost || ['dashed', 'text', 'link'].includes(this.type)

		console.log(232, elColor)
		// 计算颜色
		const color = tinycolor(elColor)
		// 校验颜色
		if (!color.isValid()) return console.error('颜色校验失败', color)

		// 颜色信息
		const c1 = color.toString()
		console.log('c1', c1)
		const c2 = noneBg ? c1 : color.getLuminance() < 0.5 ? '#fff' : '#333'
		console.log('c2', c2)
		let colorStyles = {
			[`--${ns.b()}-bg-color`]: noneBg ? 'transparent' : c1,
			[`--${ns.b()}-border-color`]: noneBg ? c2 : c1,
			[`--${ns.b()}-text-color`]: c2,
		}

		// 计算hover颜色
		const hoverBgColor = tinycolor(color.toString()).brighten(15)
		const hc1 = hoverBgColor.toString()
		const hc2 = noneBg ? c1 : hoverBgColor.getLuminance() < 0.5 ? '#fff' : '#333'
		colorStyles = {
			...colorStyles,
			[`--${ns.b()}-hover-bg-color`]: noneBg ? 'transparent' : hc1,
			[`--${ns.b()}-hover-border-color`]: noneBg ? hc2 : hc1,
			[`--${ns.b()}-hover-text-color`]: hc2,
		}

		// 计算active颜色
		const activeBgColor = tinycolor(color.toString()).darken(10)
		const ac1 = activeBgColor.toString()
		const ac2 = noneBg ? c1 : activeBgColor.getLuminance() < 0.5 ? '#fff' : '#333'
		colorStyles = {
			...colorStyles,
			[`--${ns.b()}-active-bg-color`]: noneBg ? 'transparent' : ac1,
			[`--${ns.b()}-active-border-color`]: noneBg ? ac2 : ac1,
			[`--${ns.b()}-active-text-color`]: ac2,
		}

		this.colorStyles = colorStyles
	}

	/**
	 * 渲染图标
	 * @returns
	 */
	renderIcon() {
		return isString(this.icon) ? <i class={this.icon}></i> : this.icon
	}

	render() {
		const { ns, autofocus, nativeType, ghost, round, circle, disabled, customClass } = this
		const type = ns.m(this.type)

		const buttonAttrs = {
			class: [ns.b(), type, ns.is('ghost', ghost), ns.is('disabled', disabled), ns.is('round', round), ns.is('circle', circle), customClass].join(' '),
			autofocus,
			disabled,
			type: nativeType,
			style: this.colorStyles,
		}

		return (
			<button {...buttonAttrs}>
				{/* loading */}
				{this.loading && <i class="loading-icon"></i>}
				{/* 左图标 */}
				{this.icon && this.iconPosition === 'left' && this.renderIcon()}
				{/* 内容 */}
				<slot></slot>
				{/* 右图标 */}
				{this.icon && this.iconPosition === 'right' && this.renderIcon()}
			</button>
		)
	}
}
