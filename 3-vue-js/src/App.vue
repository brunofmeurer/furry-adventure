<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html, body {
      height: 100%;
      min-width: 300px;
      width: auto !important;  /* Firefox will set width as auto */
      overflow-x:hidden;
  }
  body {
      margin: 0;
      padding: 0;
      height: 100%;
      background: rgb(240, 240, 240);
      font-family: Garamond,Baskerville,Baskerville Old Face,Hoefler Text,Times New Roman,serif;
      background-image: url("assets/food-vector1.png");
  }

  .container {
      display: flex;
  }

  .flex4 {
      flex: 4;
  }

  .flex3 {
      flex: 3;
  }

  .flex2 {
      position: relative;
      flex: 2;
  }

  .flex1 {
      flex: 1;
  }

  .hide {
      visibility: hidden;
  }

  div.height-0-hidden {
      opacity: 0;
      max-height: 0px;
  }
</style>
