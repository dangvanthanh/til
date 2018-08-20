<template>
  <canvas></canvas>
</template>

<script>
import { randHsl } from './Utils';

export default {
  name: 'canvas-art-CirclePacking',
  data() {
    return {
      canvas: '',
      context: '',
      circles: [],
      size: 0
    };
  },
  mounted() {
    this.canvas = this.$el;
    this.context = this.canvas.getContext('2d');
    this.size = window.innerWidth / 2;
    this.context.lineWidth = 2;
    this.canvas.width = this.size;
    this.canvas.height = this.size;
    let totalCircles = 500;

    for (let i = 0; i < totalCircles; i++) {
      this.createAndDrawCircle();
    }
  },
  methods: {
    createAndDrawCircle() {
      let minRadius = 2;
      let maxRadius = 100;
      let createCircleAttempts = 500;

      let newCircle;
      let circleSafeToDraw = false;

      for (let tries = 0; tries < createCircleAttempts; tries++) {
        newCircle = {
          x: Math.floor(Math.random() * this.size),
          y: Math.floor(Math.random() * this.size),
          radius: minRadius
        };

        if (this.doesCircleHaveACollision(newCircle)) {
          continue;
        } else {
          circleSafeToDraw = true;
          break;
        }
      }

      if (!circleSafeToDraw) {
        return;
      }

      for (let radiusSize = minRadius; radiusSize < maxRadius; radiusSize++) {
        newCircle.radius = radiusSize;
        if (this.doesCircleHaveACollision(newCircle)) {
          newCircle.radius--;
          break;
        }
      }

      this.circles.push(newCircle);
      this.context.beginPath();
      this.context.arc(
        newCircle.x,
        newCircle.y,
        newCircle.radius,
        0,
        2 * Math.PI
      );
      this.context.stroke();
    },
    doesCircleHaveACollision(circle) {
      for (let i = 0; i < this.circles.length; i++) {
        let otherCircle = this.circles[i];
        let a = circle.radius + otherCircle.radius;
        let x = circle.x - otherCircle.x;
        let y = circle.y - otherCircle.y;

        if (a >= Math.sqrt(x * x + y * y)) {
          return true;
        }
      }

      if (
        circle.x + circle.radius >= this.size ||
        circle.x - circle.radius <= 0
      ) {
        return true;
      }

      if (
        circle.y + circle.radius >= this.size ||
        circle.y - circle.radius <= 0
      ) {
        return true;
      }

      return false;
    }
  }
};
</script>

<style>
</style>
