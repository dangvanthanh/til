<script setup>
import { ref, onMounted } from 'vue'

const canvas = ref(null)

onMounted(() => {
  const context = canvas.value.getContext('2d')
  const size = window.innerWidth / 2
  const step = 20

  canvas.width = size
  canvas.height = size

  function draw(x, y, width, height) {
    const leftToRight = Math.random() >= 0.5

    if (leftToRight) {
      context.moveTo(x, y)
      context.lineTo(x + width, y + height)
    } else {
      context.moveTo(x + width, y)
      context.lineTo(x, y + height)
    }

    context.stroke()
  }

  for (let x = 0; x < size; x += step) {
    for (let y = 0; y < size; y += step) {
      draw(x, y, step, step)
    }
  }
})
</script>

<template>
  <canvas ref="canvas" />
</template>
