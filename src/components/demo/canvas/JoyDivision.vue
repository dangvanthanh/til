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
	name: 'canvas-art-JoyDivision',
	mounted() {
		const canvas = this.$el
		const context = canvas.getContext('2d')

		const size = window.innerWidth / 2
		const step = 10
		const lines = []

		canvas.width = size
		canvas.height = size

		// Create a lines
		for (let i = step; i <= size - step; i += step) {
			const line = []

			for (let j = step; j <= size - step; j += step) {
				const distanceToCenter = Math.abs(j - size / 2)
				const variance = Math.max(size / 2 - 50 - distanceToCenter, 0)
				const random = ((Math.random() * variance) / 2) * -1
				const point = { x: j, y: i + random }
				line.push(point)
			}

			lines.push(line)
		}

		for (let i = 0; i < lines.length; i++) {
			const line = lines[i]
			context.beginPath()
			context.moveTo(line[0].x, line[0].y)

			for (let j = 0; j < line.length - 2; j++) {
				// context.lineTo(line[j].x, line[j].y);
				const xc = (line[j].x + line[j + 1].x) / 2
				const yc = (line[j].y + line[j + 1].y) / 2
				context.quadraticCurveTo(line[j].x, line[j].y, xc, yc)
				// context.quadraticCurveTo(
				//   line[j].x,
				//   line[j].y,
				//   line[j + 1].x,
				//   line[j + 1].y
				// );
			}

			context.fillStyle = randHsl()
			context.lineWidth = 2
			context.fill()
			context.stroke()
		}
	},
}
</script>

<style>
</style>
