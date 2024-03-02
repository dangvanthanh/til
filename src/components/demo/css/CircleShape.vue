<script setup></script>

<template>
  <div class="circles">
    <div class="circle"></div>
  </div>
</template>

<style scoped>
.circles {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
}

.circle {
  background-color: #3498db;
  text-align: center;
  width: 80px;
  height: 80px;
  margin: 50px auto;
  border-radius: 100%;
}
</style>
