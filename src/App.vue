<script setup lang="ts">
const handleClick = async () => {
  const s = await window.electronAPI.openFile()
  console.log(s);
}

const min = () => {
  window.electronAPI.min()
}

const full = () => {
  window.electronAPI.full()
}

const close = () => {
  window.electronAPI.close()
}
</script>

<template>
  <div class="home">
    <div class="header">
      <!-- aaaaaaaaaaa -->
      <div class="btn" @click="min">最小化</div>
      <div class="btn" @click="full">退出全屏</div>
      <div class="btn" @click="close">关闭</div>
    </div>
    <div id="status"></div>
    <div class="btn" @click="handleClick">点击</div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

html, body, #app {
  width: 100%;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}

.home {
  height: 100%;
}

.header {
  height: 50px;
  background: #252728;
  -webkit-app-region: drag;
  display: flex;
  justify-content: flex-end;
}

.btn {
  padding: 0 10px;
  cursor: pointer;
  -webkit-app-region: no-drag;
}
</style>
