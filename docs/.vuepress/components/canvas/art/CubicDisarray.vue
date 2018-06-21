<template>
  <canvas></canvas>
</template>

<script>
import { randHsl } from './Utils';

export default {
  name: 'canvas-art-CubicDisarray',
  mounted() {
    let canvas = this.$el;
    let context = canvas.getContext('2d');
    let size = window.innerWidth / 2;
    let squareSize = 40;
    let randomDisplacement = 15;
    let rotateMultiplier = 20;

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
        let rotateAmt =
          (((j / size) * Math.PI) / 180) *
          plusOrMinus *
          Math.random() *
          rotateMultiplier;

        plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        let translateAmt =
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
