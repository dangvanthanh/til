<template>
  <canvas></canvas>
</template>

<script>
function rand(min, max) {
	return min + Math.random() * (max - min)
}

function randHsl() {
	const h = rand(1, 360)
	const s = rand(0, 100)
	const l = rand(0, 100)

	return `hsl(${h}, ${s}%, ${l}%)`
}

export default {
	name: 'canvas-art-CirclePacking',
	data() {
		return {
			canvas: '',
			context: '',
			circles: [],
			size: 0,
		}
	},
	mounted() {
		this.canvas = this.$el
		this.context = this.canvas.getContext('2d')
		this.size = window.innerWidth / 2
		this.context.lineWidth = 2
		this.canvas.width = this.size
		this.canvas.height = this.size
		const totalCircles = 500

		for (let i = 0; i < totalCircles; i++) {
			this.createAndDrawCircle()
		}
	},
	methods: {
		createAndDrawCircle() {
			const minRadius = 2
			const maxRadius = 100
			const createCircleAttempts = 500

			let newCircle
			let circleSafeToDraw = false

			for (let tries = 0; tries < createCircleAttempts; tries++) {
				newCircle = {
					x: Math.floor(Math.random() * this.size),
					y: Math.floor(Math.random() * this.size),
					radius: minRadius,
				}

				if (this.doesCircleHaveACollision(newCircle)) {
					continue
				}

				circleSafeToDraw = true
				break
			}

			if (!circleSafeToDraw) {
				return
			}

			for (let radiusSize = minRadius; radiusSize < maxRadius; radiusSize++) {
				newCircle.radius = radiusSize
				if (this.doesCircleHaveACollision(newCircle)) {
					newCircle.radius--
					break
				}
			}

			this.circles.push(newCircle)
			this.context.beginPath()
			this.context.arc(
				newCircle.x,
				newCircle.y,
				newCircle.radius,
				0,
				2 * Math.PI,
			)
			this.context.stroke()
		},
		doesCircleHaveACollision(circle) {
			for (let i = 0; i < this.circles.length; i++) {
				const otherCircle = this.circles[i]
				const a = circle.radius + otherCircle.radius
				const x = circle.x - otherCircle.x
				const y = circle.y - otherCircle.y

				if (a >= Math.sqrt(x * x + y * y)) {
					return true
				}
			}

			if (
				circle.x + circle.radius >= this.size ||
				circle.x - circle.radius <= 0
			) {
				return true
			}

			if (
				circle.y + circle.radius >= this.size ||
				circle.y - circle.radius <= 0
			) {
				return true
			}

			return false
		},
	},
}
</script>

<style>
</style>
