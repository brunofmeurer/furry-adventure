<template>
  <div>
      <div class="menu-container">
        <div ref="menu1" id="menu1" class="menu">
            <div id="menu" class="icon-menu">
                <!--<i class="fas fa-bars"></i>-->
                <button class="reset-style hamburger" id="hamburger-3" onclick="clickMenu(this.id, -1);">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </button>
            </div>
        </div>
        <div ref="menu2" id="menu2" class="menu2 hide">
        </div>
        <div ref="menu3" id="menu3" class="menu3 hide">
        </div>
    </div>
    <div id="cart" class="icon-cart" onclick="clickNext(this.id);">
        <i class="fas fa-shopping-cart"></i>
        <p id="roundValue" class="round-value"></p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  data () {
    return {
    }
  },
  computed: {
    tab: {
      get () {
        return this.$store.state.shopping.tab
      }
    }
  },
  watch: {
    tab (value, old) {
      if (value <= 0 || value > 3) {
        throw "Invalid Tab! Range 1 at 3"
      }
      switch (old) {
        case 1:
          this.$refs.menu2.classList.toggle('show-menu')
          this.$refs.menu2.classList.toggle('hide')
          break
        case 2:
          if (value > old) {
            this.$refs.menu3.classList.toggle('show-menu')
            this.$refs.menu3.classList.toggle('hide')
          } else {
            this.$refs.menu2.classList.toggle('show-menu')
            this.$refs.menu2.classList.toggle('hide')
          }
          break
          case 3:
            this.$refs.menu3.classList.toggle('show-menu')
            this.$refs.menu3.classList.toggle('hide')
            break
      }
    }
  }
}
</script>
<style scoped>
    div.menu-container {
        display: flex;
        position: absolute;
        flex-direction: row;
        height: 100vh;
        width: 100%;
    }

    div.menu {
        background-color: #F13A4E;
        flex: 1;
        width: 130px;
        height: 100;
    }

    div.menu2 {
        background-color: #F13A4E;
        /*border-left: white 1px dotted;*/
        flex: 1;
        height: 100%;
        z-index: -1;
        transform: translate(-100%, 0);
        -webkit-transform: translate(-100%, 0);
        -ms-transform: translate(-100%, 0);
        -o-transform: translate(-100%, 0);
        -webkit-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }

    div.menu3 {
        background-color: #F13A4E;
        /*border-left: white 1px dotted;*/
        flex: 1;
        height: 100%;
        z-index: -2;
        transform: translate(-100%, 0);
        -webkit-transform: translate(-100%, 0);
        -ms-transform: translate(-100%, 0);
        -o-transform: translate(-100%, 0);
        -webkit-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }

    div.icon-cart {
        z-index: 1;

        /*color: #AFAFAE;*/
        color: #F13A4E;
        width: 21px;
        position: absolute;
        right: 50px;
        top: 35px;
        -webkit-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
    }

    div.icon-cart.change-color-icon-cart {
        color: rgb(240, 240, 240);
    }

    div.icon-cart p.round-value {
        border-radius: 100%;
        background: #F13A4E;
        color: #fff;
        text-align: center;
        transform: translate(8px,-40px);
        font-size: 12px;
        font-weight: 900;
        width: 19px;
        -webkit-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }

    p.round-value.change-color-round-value {
        color:  #F13A4E !important;
        background:rgb(240, 240, 240) !important;
    }

    div.icon-menu {
        position: relative;
        top: 25px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        color: #FFF;
        text-decoration-color: #FFF;
        font-size: 25px;
    }

    /*HAMBURGUER*/
    .reset-style {
        border: none;
        margin: 0;
        padding: 0;
        width: auto;
        overflow: visible;
        background: transparent;
        color: inherit;
        font: inherit;
        z-index: 1;
    }

    .hamburger {
        cursor: pointer;
    }

    .hamburger .line{
        width: 30px;
        height: 3px;
        background-color: #ecf0f1;
        display: block;
        margin: 8px auto;
        -webkit-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }

    #hamburger-3.is-active .line:nth-child(1){
        -webkit-transform: translate(-15px, 7px) rotate(-45deg) scaleX(0.4);
        -ms-transform: translate(-15px, 7px) rotate(-45deg) scaleX(0.4);
        -o-transform: translate(-15px, 7px) rotate(-45deg) scaleX(0.4);
        transform: translate(-15px, 7px) rotate(-45deg) scaleX(0.4);
    }

    #hamburger-3.is-active .line:nth-child(2){
        -webkit-transform: scaleX(1.1);
    }

    #hamburger-3.is-active .line:nth-child(3){
        -webkit-transform: translate(-15px, -7px) rotate(45deg) scaleX(0.4);
        -ms-transform: translate(-15px, -7px) rotate(45deg) scaleX(0.4);
        -o-transform: translate(-15px, -7px) rotate(45deg) scaleX(0.4);
        transform: translate(-15px, -7px) rotate(45deg) scaleX(0.4);
    }

    .show-menu {
        -webkit-transform: translate(0, 0) !important;
        -ms-transform: translate(0, 0) !important;
        -o-transform: translate(0, 0) !important;
        transform: translate(0, 0) !important;
    }
</style>
