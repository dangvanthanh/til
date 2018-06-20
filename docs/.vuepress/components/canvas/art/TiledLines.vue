<template>
  <canvas></canvas>
</template>

<script>
export default {
  name: 'canvas-art-TiledLines',
  mounted() {
    let canvas = this.$el;
    let context = canvas.getContext('2d');

    let size = window.innerWidth / 2;
    let step = 20;

    canvas.width = size;
    canvas.height = size;

    function draw(x, y, width, height) {
      let leftToRight = Math.random() >= 0.5;

      if (leftToRight) {
        context.moveTo(x, y);
        context.lineTo(x + width, y + height);
      } else {
        context.moveTo(x + width, y);
        context.lineTo(x, y + height);
      }

      context.stroke();
    }

    for (let x = 0; x < size; x += step) {
      for (let y = 0; y < size; y += step) {
        draw(x, y, step, step);
      }
    }
  }
};
</script>

<style>
</style>
