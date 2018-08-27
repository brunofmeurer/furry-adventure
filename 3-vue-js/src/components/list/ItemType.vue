<template>
  <div ref="item1" id="item1" class="item" @click="clickNext();">
    <div class="flex2">
      <div :class="'picture-item-' + form">
        <img src="@/assets/pizza2.png" alt="">
      </div>
    </div>
    <div class="body-item">
      <div class="title-item">
        {{title}}
      </div>
      <div class="subtitle-item">
        {{subtitle}}
      </div>
    </div>
    <div class="flex1">
      <div class="button-item">
        <i class="fas fa-angle-right"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ItemType',
  props: {
    form: {
      type: String,
      default: 'circle'
    },
    title: {
      type: String,
      default: 'Title'
    },
    subtitle: {
      type: String,
      default: 'Subtitle'
    }
  },
  data () {
    return {
    }
  },
  methods: {
    clickNext () {
      var obj = this.$refs.item1
      obj.classList.add('click-animation')

      setTimeout(function () {
        obj.classList.remove('click-animation')
      }, 400)
      this.$store.dispatch('addTab')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div.item {
    position: relative;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 50px;
    margin-right: 50px;
    min-height: 100px;
    background-color: #FFF;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
    cursor: pointer;
  }

  div.picture-item-circle {
    border-radius: 100%;
    transform: translate(-30px, 13%);
    width: 80px;
    height: 80px;
    background-color: #FFF;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
  }

  div.picture-item-circle img {
    margin-top: 1px;
    max-width:100%;
    max-height:100%;
  }

  div.picture-item-square {
    border-radius: 30%;
    transform: translate(-30px, 13%);
    width: 80px;
    height: 80px;
    flex: 2;
    background-color: #FFF;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
  }

  div.picture-item-square img {
    margin-top: 1px;
    max-width:100%;
    max-height:100%;
  }

  div.picture-item-triangle {
    border-radius: 30%;
    transform: translate(-30px, 13%) rotate(-45deg);
    width: 80px;
    height: 80px;
    flex: 2;
    background-color: #FFF;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
  }

  div.picture-item-triangle img {
    margin-top: 1px;
    max-width:100%;
    max-height:100%;
  }

  div.body-item {
    flex: 6;
  }

  div.title-item {
    padding-top: 28px;
    font-weight: 901;
    color: #333B53;
    font-size: 25px;
  }

  div.subtitle-item {
    /*transform: translate(20%, -40px);*/
    color: #AFAFAE;
  }

  div.button-item {
    position: absolute;
    border-radius: 100%;
    transform: translate(50%, 70%);
    width: 40px;
    height: 40px;
    background-color: #FFF;
    right: 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
    color: #F13A4E;
    font-weight: 901;
    -webkit-transition: all 0.1s ease-in-out;
    -o-transition: all 0.1s ease-in-out;
    transition: all 0.1s ease-in-out;
  }

  div.button-item i {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }

  .click-animation { animation: clickAnimation 200ms ease alternate; }
  @keyframes clickAnimation {
    0% {
      transform: scale(1)
    }
    50% {
      transform: scale(0.98)
    }
    100% {
      transform: scale(1)
    }
  }

</style>
