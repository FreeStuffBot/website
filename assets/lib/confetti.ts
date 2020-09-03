
// def settings
// {
// 	maxCount: 150,
// 	speed: 2,
// 	frameInterval: 15,
// 	alpha: 0.5,
// 	gradient: false
// }

export default class Confetti {

	private supportsAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;
	private colors = ["rgba(30,144,255,", "rgba(107,142,35,", "rgba(255,215,0,", "rgba(255,192,203,", "rgba(106,90,205,", "rgba(173,216,230,", "rgba(238,130,238,", "rgba(152,251,152,", "rgba(70,130,180,", "rgba(244,164,96,", "rgba(210,105,30,", "rgba(220,20,60,"];
	private streamingConfetti = false;
	private animationTimer = 0;
	private pause = false;
	private lastFrameTime = Date.now();
	private particles: any[] = [];
	private waveAngle = 0;
	private context: any = null;

	constructor(
		private settings: {
			maxCount: number;				//set max confetti count
			speed: number;					//set the particle animation speed
			frameInterval: number;	//the confetti animation frame interval in milliseconds
			alpha: number;					//the alpha opacity of the confetti (between 0 and 1, where 1 is opaque and 0 is invisible)
			gradient: boolean;			//whether to use gradients for the confetti particles
		}
	) { }

	public isConfettiPaused() {
		return this.pause;
	}

	public pauseConfetti() {
		this.pause = true;
	}

	public drawParticles(context: any) {
		let particle;
		let x, y, x2, y2;
		for (let i = 0; i < this.particles.length; i++) {
			particle = this.particles[i];
			context.beginPath();
			context.lineWidth = particle.diameter;
			x2 = particle.x + particle.tilt;
			x = x2 + particle.diameter / 2;
			y2 = particle.y + particle.tilt + particle.diameter / 2;
			if (this.settings.gradient) {
				const gradient = context.createLinearGradient(x, particle.y, x2, y2);
				gradient.addColorStop("0", particle.color);
				gradient.addColorStop("1.0", particle.color2);
				context.strokeStyle = gradient;
			} else
				context.strokeStyle = particle.color;
			context.moveTo(x, particle.y);
			context.lineTo(x2, y2);
			context.stroke();
		}
	}

	public resetParticle(particle: any, width: number, height: number) {
		particle.color = this.colors[(Math.random() * this.colors.length) | 0] + (this.settings.alpha + ")");
		particle.color2 = this.colors[(Math.random() * this.colors.length) | 0] + (this.settings.alpha + ")");
		particle.x = Math.random() * width;
		particle.y = Math.random() * height - height;
		particle.diameter = Math.random() * 10 + 5;
		particle.tilt = Math.random() * 10 - 10;
		particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
		particle.tiltAngle = Math.random() * Math.PI;
		return particle;
	}

	public updateParticles() {
		const width = window.innerWidth;
		const height = window.innerHeight;
		let particle;
		this.waveAngle += 0.01;
		for (let i = 0; i < this.particles.length; i++) {
			particle = this.particles[i];
			if (!this.streamingConfetti && particle.y < -15)
				particle.y = height + 100;
			else {
				particle.tiltAngle += particle.tiltAngleIncrement;
				particle.x += Math.sin(this.waveAngle) - 0.5;
				particle.y += (Math.cos(this.waveAngle) + particle.diameter + this.settings.speed) * 0.5;
				particle.tilt = Math.sin(particle.tiltAngle) * 15;
			}
			if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
				if (this.streamingConfetti && this.particles.length <= this.settings.maxCount)
					this.resetParticle(particle, width, height);
				else {
					this.particles.splice(i, 1);
					i--;
				}
			}
		}
  }

	public runAnimation() {
		if (this.pause)
			return;
		else if (this.particles.length === 0) {
			this.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
			this.animationTimer = 0;
		} else {
			const now = Date.now();
			const delta = now - this.lastFrameTime;
			if (!this.supportsAnimationFrame || delta > this.settings.frameInterval) {
				this.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
				this.updateParticles();
				this.drawParticles(this.context);
				this.lastFrameTime = now - (delta % this.settings.frameInterval);
			}
			this.animationTimer = requestAnimationFrame(() => this.runAnimation());
		}
	}

	public resumeConfetti() {
		this.pause = false;
		this.runAnimation();
	}

	public toggleConfettiPause() {
		if (this.pause) this.resumeConfetti();
		else this.pauseConfetti();
	}

	public stopConfetti() {
		this.streamingConfetti = false;
	}

	public startConfetti(timeout?: any, min?: number, max?: number) {
		const width = window.innerWidth;
		const height = window.innerHeight;
		const fi = this.settings.frameInterval;
		window.requestAnimationFrame = (function() {
			return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				function (callback) {
					return window.setTimeout(callback, fi);
				};
		})();
		let canvas = document.getElementById("confetti-canvas") as any;
		if (canvas === null) {
			canvas = document.createElement("canvas");
			canvas.setAttribute("id", "confetti-canvas");
			canvas.setAttribute("style", "display:block;z-index:999999;pointer-events:none;position:fixed;top:0");
			document.body.prepend(canvas);
			canvas.width = width;
			canvas.height = height;
			window.addEventListener("resize", function() {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			}, true);
			this.context = canvas.getContext("2d");
		} else if (this.context === null)
			this.context = canvas.getContext("2d");
		let count = this.settings.maxCount;
		if (min) {
			if (max) {
				if (min == max)
					count = this.particles.length + max;
				else {
					if (min > max) {
						const temp = min;
						min = max;
						max = temp;
					}
					count = this.particles.length + ((Math.random() * (max - min) + min) | 0);
				}
			} else
				count = this.particles.length + min;
		} else if (max)
			count = this.particles.length + max;
		while (this.particles.length < count)
		this.particles.push(this.resetParticle({}, width, height));
		this.streamingConfetti = true;
		this.pause = false;
		this.runAnimation();
		if (timeout) {
			window.setTimeout(() => this.stopConfetti(), timeout);
		}
	}

	public removeConfetti() {
		stop();
		this.pause = false;
		this.particles = [];
	}

	public toggleConfetti() {
		if (this.streamingConfetti) this.stopConfetti();
		else this.startConfetti();
	}
	
	public isConfettiRunning() {
		return this.streamingConfetti;
	}
}
