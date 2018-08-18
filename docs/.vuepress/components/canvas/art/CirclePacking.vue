<template>
  <canvas></canvas>
</template>

<script>
import { randHsl } from './Utils';

export default {
  name: 'canvas-art-CirclePacking',
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

    let circles = [];
    let minRadius = 2;
    let maxRadius = 100;
    let totalCircles = 500;
    let createCircleAttempts = 500;

    function createAndDrawCircle() {
      let newCircle;
      let circleSafeToDraw = false;

      for (let tries = 0; tries < createCircleAttempts; tries++) {
        newCircle = {
          x: Math.floor(Math.random() * size),
          y: Math.floor(Math.random() * size),
          radius: minRadius
        };

        if (doesCircleHaveACollision(newCircle)) {
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
        if (doesCircleHaveACollision(newCircle)) {
          newCircle.radius--;
          break;
        }
      }

      circles.push(newCircle);
      context.beginPath();
      context.arc(newCircle.x, newCircle.y, newCircle.radius, 0, 2 * Math.PI);
      context.stroke();
    }

    function doesCircleHaveACollision(circle) {
      for (let i = 0; i < circles.length; i++) {
        let otherCircle = circles[i];
        let a = circle.radius + otherCircle.radius;
        let x = circle.x - otherCircle.x;
        let y = circle.y - otherCircle.y;

        if (a >= Math.sqrt(x * x + y * y)) {
          return true;
        }
      }

      if (circle.x + circle.radius >= size || circle.x - circle.radius <= 0) {
        return true;
      }

      if (circle.y + circle.radius >= size || circle.y - circle.radius <= 0) {
        return true;
      }

      return false;
    }

    for (let i = 0; i < totalCircles; i++) {
      createAndDrawCircle();
    }
  }
};
</script>

<style>
</style>
