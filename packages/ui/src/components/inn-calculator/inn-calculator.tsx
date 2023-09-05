import { Component, h, Prop, State } from '@stencil/core'
import { useNamespace } from '@innbell/utils'

@Component({
	tag: 'inn-calculator',
	styleUrl: 'inn-calculator.scss',
	shadow: true,
})
export class InnCalculator {
	@Prop() defaultValue = ''
	@State() value = '欢迎使用计算器'
	@State() isCalculated = true

	@Prop() width = '100%'
	@Prop() height = '100%'

	@Prop() dark = true

	btns: any[] = [
		{ value: 'C', method: this.handleClear.bind(this) },
		{ value: '<', method: this.handleDel.bind(this) },
		{ value: '/', method: this.handleSign.bind(this) },
		{ value: '*', method: this.handleSign.bind(this) },
		{ value: '7', method: this.handlePushNumber.bind(this) },
		{ value: '8', method: this.handlePushNumber.bind(this) },
		{ value: '9', method: this.handlePushNumber.bind(this) },
		{ value: '-', method: this.handleSign.bind(this) },
		{ value: '4', method: this.handlePushNumber.bind(this) },
		{ value: '5', method: this.handlePushNumber.bind(this) },
		{ value: '6', method: this.handlePushNumber.bind(this) },
		{ value: '+', method: this.handleSign.bind(this) },
		{ value: '1', method: this.handlePushNumber.bind(this) },
		{ value: '2', method: this.handlePushNumber.bind(this) },
		{ value: '3', method: this.handlePushNumber.bind(this) },
		{ value: '=', method: this.handleCalc.bind(this), c: 'col-double' },
		{ value: '0', method: this.handlePushNumber.bind(this), c: 'row-double' },
		{ value: '.', method: this.handlePoint.bind(this) },
	]

	handleClear() {
		this.value = ''
		this.isCalculated = true
	}

	handleDel() {
		if (this.value !== '') {
			this.value = this.value.slice(0, this.value.length - 1)
		}
	}

	pushValue(value: string) {
		this.value += value
		if (this.value.length >= 30) {
			this.value = '停，够长了，你到底要干啥！'
			this.isCalculated = true
		}
	}

	handlePoint() {
		this.checkBegin()
		const a: any = this.value.split(/[\+\-\*\/]/)
		const last = a.pop()
		if (last === '') {
			this.pushValue('0.')
		} else if (last.indexOf('.') === -1) {
			this.pushValue('.')
		}
	}

	handleSign(btn: any) {
		const { value } = btn
		if (this.value === '') return
		if (/\.$/.test(this.value)) this.handleDel()
		if (!/[\+\-\*\/]$/.test(this.value)) {
			//结尾无符号 直接添加符号
			this.pushValue(value)
			return
		}
		//结尾有符号
		if (value !== '-' || (value === '-' && /[\+\-\*\/]-$/.test(this.value))) {
			this.value = this.value.replace(/[\.\+\-\*\/]*$/, '')
		}
		this.pushValue(value)
	}

	handleCalc() {
		try {
			// this.value = eval(this.value.replace(/[\.\+\-\*\/]*$/, '')).toString()
		} catch (error) {
			this.value = '→_→计算器都不会用！！！'
		} finally {
			this.isCalculated = true
		}
	}

	checkBegin() {
		if (this.isCalculated) {
			this.value = ''
			this.isCalculated = false
		}
	}

	handlePushNumber(btn: any) {
		this.checkBegin()
		const { value } = btn
		const numberArr: string[] = this.value.split(/[\+\-\*\/]/)
		const last = numberArr.pop()
		if (last && last === '0') this.handleDel()
		this.pushValue(value)
	}

	render() {
		const ns = useNamespace('inn-calculator')

		const contentClass = this.value.length > 28 ? 'mini' : this.value.length > 24 ? 'small' : ''

		return (
			<div class={[ns.b(), this.dark && 'dark'].join(' ')}>
				<div class="input">
					<div class={['content', contentClass].join(' ')}>
						{this.value}
					</div>
				</div>
				<div class="btns">
					{this.btns.map(btn => (
						<div class={{ number: true, [btn.c]: btn.c }} onClick={() => btn.method(btn)}>
							{btn.value}
						</div>
					))}
				</div>
			</div>
		)
	}
}
