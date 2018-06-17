<template>
  <div>
    <div class="triangle">
      <figure class="triangle-top"></figure>
      <figure class="triangle-right"></figure>
      <figure class="triangle-bottom"></figure>
      <figure class="triangle-left"></figure>
      <figure class="triangle-top-left"></figure>
      <figure class="triangle-top-right"></figure>
      <figure class="triangle-bottom-left"></figure>
      <figure class="triangle-bottom-right"></figure>
    </div>
  </div>
</template>

<script>
export default {
  name: 'css-shapes-triangle'
};
</script>

<style scoped>
.triangle {
  text-align: center;
}

figure {
  display: inline-block !important;
}

.triangle-top {
  display: block;
  height: 0;
  width: 0;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  border-bottom: 40px solid #1abc9c;
}

.triangle-right {
  display: block;
  height: 0;
  width: 0;
  border-top: 40px solid transparent;
  border-bottom: 40px solid transparent;
  border-left: 40px solid #2ecc71;
}

.triangle-bottom {
  display: block;
  height: 0;
  width: 0;
  border-top: 40px solid #3498db;
  border-right: 40px solid transparent;
  border-left: 40px solid transparent;
}

.triangle-left {
  display: block;
  height: 0;
  width: 0;
  border-top: 40px solid transparent;
  border-right: 40px solid #9b59b6;
  border-bottom: 40px solid transparent;
}

.triangle-top-right {
  display: block;
  height: 0;
  width: 0;
  border-top: 40px solid #95a5a6;
  border-right: 40px solid transparent;
}

.triangle-top-left {
  display: block;
  height: 0;
  width: 0;
  border-top: 40px solid #f1c40f;
  border-left: 40px solid transparent;
}

.triangle-bottom-right {
  display: block;
  height: 0;
  width: 0;
  border-bottom: 40px solid #e67e22;
  border-right: 40px solid transparent;
}

.triangle-bottom-left {
  display: block;
  height: 0;
  width: 0;
  border-bottom: 40px solid #e74c3c;
  border-left: 40px solid transparent;
}
</style>
