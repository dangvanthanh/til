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
  name: 'canvas-art-CubicDisarray',
  mounted() {
    const canvas = this.$el;
    const context = canvas.getContext('2d');
    const size = window.innerWidth / 2;
    const squareSize = 40;
    const randomDisplacement = 15;
    const rotateMultiplier = 20;

    context.lineWidth = 2;

    canvas.width = size;
    canvas.height = size;

    function draw(width, height) {
      context.beginPath();
      context.rect(-width / 2, -height / 2, width, height);
      context.fillStyle = randHsl();
      context.fill();
      context.stroke();
    }

    for (let i = 0; i <= size - squareSize; i += squareSize) {
      for (let j = 0; j <= size - squareSize; j += squareSize) {
        let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        const rotateAmt =
          (((j / size) * Math.PI) / 180) *
          plusOrMinus *
          Math.random() *
          rotateMultiplier;

        plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        const translateAmt =
          (j / size) * plusOrMinus * Math.random() * randomDisplacement;

        context.save();
        // context.translate(i, j);
        context.translate(i + translateAmt, j);
        context.rotate(rotateAmt);
        draw(squareSize, squareSize);
        context.restore();
      }
    }
  }
};
</script>

<style>
</style>
