<template>
  <div class="tc">
    <div class="pie pie--0">0%</div>
    <div class="pie pie--25">25%</div>
    <div class="pie pie--50">50%</div>
    <div class="pie pie--75">75%</div>
    <div class="pie pie--100">100%</div>
  </div>
</template>

<script>
export default {
  name: 'css-shapes-pie'
};
</script>

<style scoped>
.tc {
  text-align: center;
}

.pie {
  display: inline-block;
  width: 80px;
  height: 80px;
  border: 2px solid #247ba0;
  border-radius: 50%;
  position: relative;
  text-align: center;
  line-height: 80px;
  margin: 50px 10px;
}

.pie::before,
.pie::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
}

.pie::before {
  width: 100%;
  height: 100%;
  z-index: -2;
}

.pie:after {
  width: 0;
  height: 0;
  border: 40px solid #247ba0;
  transform: rotate(45deg);
  z-index: -1;
}

.pie--0::after {
  border-color: transparent;
}

.pie--25::after {
  border-left-color: transparent;
  border-bottom-color: transparent;
  border-right-color: transparent;
}

.pie--50::after {
  border-left-color: transparent;
  border-bottom-color: transparent;
}

.pie--75::after {
  border-left-color: transparent;
}
</style>
