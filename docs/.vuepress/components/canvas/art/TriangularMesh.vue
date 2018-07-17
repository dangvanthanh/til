<template>
  <canvas></canvas>
</template>

<script>
import { randHsl } from './Utils';

export default {
  name: 'canvas-art-TriangularMesh',
  mounted() {
    let canvas = this.$el;
    let context = canvas.getContext('2d');

    let size = window.innerWidth / 2;

    canvas.width = size;
    canvas.height = size;

    let line;
    let dot;
    let odd = false;
    let lines = [];
    let gap = size / 8;

    for (let y = gap / 2; y <= size; y += gap) {
      odd = !odd;
      line = [];
      for (let x = gap / 4; x <= size; x += gap) {
        dot = {
          x: x + (Math.random() * 0.8 - 0.4) * gap + (odd ? gap / 2 : 0),
          y: y + (Math.random() * 0.8 - 0.4) * gap
        };

        line.push(dot);
      }

      lines.push(line);
    }

    let dotLine;
    odd = true;

    for (let y = 0; y < lines.length - 1; y++) {
      odd = !odd;
      dotLine = [];

      for (let i = 0; i < lines[y].length; i++) {
        dotLine.push(odd ? lines[y][i] : lines[y + 1][i]);
        dotLine.push(odd ? lines[y + 1][i] : lines[y][i]);
      }

      for (let i = 0; i < dotLine.length - 2; i++) {
        this.drawTriangle(context, dotLine[i], dotLine[i + 1], dotLine[i + 2]);
      }
    }
  },
  methods: {
    drawTriangle(ctx, pointA, pointB, pointC) {
      ctx.beginPath();
      ctx.moveTo(pointA.x, pointA.y);
      ctx.lineTo(pointB.x, pointB.y);
      ctx.lineTo(pointC.x, pointC.y);
      ctx.lineTo(pointA.x, pointA.y);
      ctx.closePath();
      let gray = Math.floor(Math.random() * 16).toString(16);
      // ctx.fillStyle = '#' + gray + gray + gray;
      ctx.fillStyle = randHsl();
      ctx.fill();
      ctx.stroke();
    }
  }
};
</script>

<style>
</style>
