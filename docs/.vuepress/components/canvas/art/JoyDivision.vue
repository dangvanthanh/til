<template>
  <canvas></canvas>
</template>

<script>
import { randHsl } from './Utils';

export default {
  name: 'canvas-art-JoyDivision',
  mounted() {
    let canvas = this.$el;
    let context = canvas.getContext('2d');

    let size = window.innerWidth / 2;
    let step = 10;
    let lines = [];

    canvas.width = size;
    canvas.height = size;

    // Create a lines
    for (let i = step; i <= size - step; i += step) {
      let line = [];

      for (let j = step; j <= size - step; j += step) {
        let distanceToCenter = Math.abs(j - size / 2);
        let variance = Math.max(size / 2 - 50 - distanceToCenter, 0);
        let random = ((Math.random() * variance) / 2) * -1;
        let point = { x: j, y: i + random };
        line.push(point);
      }

      lines.push(line);
    }

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      context.beginPath();
      context.moveTo(line[0].x, line[0].y);

      for (let j = 0; j < line.length - 2; j++) {
        // context.lineTo(line[j].x, line[j].y);
        let xc = (line[j].x + line[j + 1].x) / 2;
        let yc = (line[j].y + line[j + 1].y) / 2;
        context.quadraticCurveTo(line[j].x, line[j].y, xc, yc);
        // context.quadraticCurveTo(
        //   line[j].x,
        //   line[j].y,
        //   line[j + 1].x,
        //   line[j + 1].y
        // );
      }

      context.fillStyle = randHsl();
      context.lineWidth = 2;
      context.fill();
      context.stroke();
    }
  }
};
</script>

<style>
</style>
