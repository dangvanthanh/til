<template>
  <canvas></canvas>
</template>

<script>
export default {
  name: 'canvas-art-UnDeuxTrois',
  mounted() {
    const canvas = this.$el
    const context = canvas.getContext('2d')

    const size = window.innerWidth / 2

    canvas.width = size
    canvas.height = size

    context.lineWidth = 4
    context.lineCap = 'round'

    const step = 20
    const thirdOfHeight = size / 3

    for (let y = step; y < size - step; y += step) {
      for (let x = step; x < size - step; x += step) {
        if (y < thirdOfHeight) {
          this.draw(context, x, y, step, step, [0.5])
        } else if (y < thirdOfHeight * 2) {
          this.draw(context, x, y, step, step, [0.2, 0.8])
        } else {
          this.draw(context, x, y, step, step, [0.1, 0.5, 0.9])
        }
      }
    }
  },
  methods: {
    draw(ctx, x, y, width, height, positions) {
      ctx.save()
      //ctx.translate(x, y)
      ctx.translate(x + width / 2, y + height / 2)
      ctx.rotate(Math.random() * 5)
      ctx.translate(-width / 2, -height / 2)

      for (let i = 0; i <= positions.length; i++) {
        ctx.beginPath()
        ctx.moveTo(positions[i] * width, 0)
        ctx.lineTo(positions[i] * width, height)
        ctx.stroke()
      }

      ctx.restore()
    },
  },
}
</script>
