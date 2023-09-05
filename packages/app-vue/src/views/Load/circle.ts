interface LoadAnimationOptions {
	circleColor: string;
	progressColor: string;
	textColor: string;
	circleWidth: number;
	progressWidth: number;
}

class LoadAnimation {
	private canvas: HTMLCanvasElement | null = null;
	private context: CanvasRenderingContext2D | null = null;
	private center: [number, number] = [0, 0];
	private rad: number = Math.PI * 2 / 100;
	private options: LoadAnimationOptions = {
		circleColor: 'white',
		progressColor: '#1890ff',
		textColor: 'white',
		circleWidth: 1,
		progressWidth: 5,
	}

	constructor() {}

	public create(dom: HTMLCanvasElement, options: Partial<LoadAnimationOptions> = {}) {
		this.canvas = dom;
		Object.assign(this.options, options);
		if (this.canvas) {
			this.context = this.canvas.getContext('2d');
			this.center = [this.canvas.width / 2, this.canvas.height / 2];
		}
		this.changePercent(0);
	}

	private drawProgress(prevent: number) {
		const [centerX, centerY] = this.center;
		const {progressColor, progressWidth} = this.options;
		if (this.context) {
			this.context.strokeStyle = progressColor;
			this.context.lineWidth = progressWidth;
			this.context.beginPath();
			this.context.arc(centerX, centerY, 100, -Math.PI / 2, -Math.PI / 2 + prevent * this.rad, false);
			this.context.stroke();
		}
	}

	private drawCircle() {
		const [centerX, centerY] = this.center;
		const {circleColor, circleWidth} = this.options;
		if (this.context) {
			this.context.strokeStyle = circleColor;
			this.context.lineWidth = circleWidth;
			this.context.beginPath();
			this.context.arc(centerX, centerY, 100, 0, Math.PI * 2, false);
			this.context.stroke();
		}
	}

	private text(percent: number = 0) {
		const [centerX, centerY] = this.center;
		if (this.context) {
			this.context.restore();
			this.context.beginPath();
			this.context.fillStyle = this.options.textColor;
			this.context.font = "30px Arial";
			let _percent = percent.toFixed(0) + '%';
			let offsetLeft = (_percent.length + 1) * 7;
			this.context.fillText(_percent, centerX - offsetLeft, centerY + 10);
			this.context.fill();
		}
	}

	public changePercent(percent: number = 0) {
		const realPercent = percent % 100;
		if (this.canvas) {
			const {width, height} = this.canvas;
			if (this.context) {
				this.context.clearRect(0, 0, width, height);
				this.drawCircle();
				this.drawProgress(realPercent);
				this.text(realPercent);
			}
		}
	}
}

export default new LoadAnimation();