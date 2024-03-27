<script setup>
import { onMounted, ref } from 'vue'

const randHsl = () => {
	const h = rand(1, 360)
	const s = rand(0, 100)
	const l = rand(0, 100)

	return `hsl(${h}, ${s}%, ${l}%)`
}

const canvas = ref(null)
</script>

<template>
  <canvas ref="canvas" />
</template>
