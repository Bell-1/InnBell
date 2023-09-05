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

	@State() ns = useNamespace('button', 'inn')
	@State() colorStyles = null

	@Watch('type')
	handleChangeType() {
		this.colorStyles = null
	}

	componentDidLoad() {
		console.log('did load')
		// 首次加载完成计算颜色
		this.calcColor()
	}

	// 计算颜色
	calcColor() {
		if(this.colorStyles || this.disabled) return
		const { type, ns } = this
		const colors = ['primary', 'success', 'danger', 'warning']
		const blockName = `.${ns.b()}`
		// 获取当前组件的颜色
		const rootEl = (this.el.shadowRoot || this.el).querySelector(blockName)
		if(!rootEl) return
		const bgColor = window.getComputedStyle(rootEl).backgroundColor
		if(!bgColor) return
		const color = tinycolor(bgColor)
		// 颜色信息
		console.log(color.getLuminance(), this.type)
		let colorStyles = {
			[`--${ns.b()}-text-color`]: color.getLuminance() < 0.5 ? '#fff' : '#333',
		}

		// 计算hover颜色
		if(colors.includes(type)) {
			const hoverBgColor = color.brighten(10)
			colorStyles = {
				...colorStyles,
				[`--${ns.b()}-hover-bg-color`]: hoverBgColor.toString(),
				[`--${ns.b()}-hover-text-color`]: hoverBgColor.getLuminance() < 0.7 ? '#fff' : '#333',
			}
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
