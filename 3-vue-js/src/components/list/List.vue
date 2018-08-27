<template>
  <div id="list" class="list">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'List',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  div.list {
      position: relative;
      height: auto;
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-top: 80px;
  }

  div.list-with-title {
      position: relative;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-top: 40px;
  }
</style>
