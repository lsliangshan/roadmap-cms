<template>
  <div id="app">
    <router-view name="HomeRouter"/>
  </div>
</template>

<script>
  import utils from './utils'
  export default {
    name: 'app',
    data () {
      return {
      }
    },
    computed: {
      loginInfo () {
        return utils.storage.getItem(this.$store.state.localStorageKeys.userInfo)
      }
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    /*-webkit-user-select: none;*/
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }

  html, body {
    height: 100%;
    min-width: 1000px;
    /* min-height: 800px; */
  }

  #app {
    width: 100%;
    height: 100%;
  }

  .custom_input {
    display: inline-block;
    width: 100%;
    height: 32px;
    line-height: 1.5;
    padding: 4px 7px;
    font-size: 12px;
    border: 1px solid #dddee1;
    border-radius: 4px;
    color: #495060;
    background-color: #fff;
    background-image: none;
    position: relative;
    cursor: text;
    transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
  }

  .CodeMirror {
    height: 100% !important;
  }

  .zpm_center_modal{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .zpm_center_modal .ivu-modal{
    min-width: 600px;
    top: 0;
  }

  .entrance_table_tip .ivu-poptip-inner {
    background-color: #495060;
  }
  .entrance_table_tip .ivu-poptip-title-inner, .entrance_table_tip .ivu-poptip-body-content-inner {
    color: rgba(255,255,255,.7);
  }
  .entrance_table_tip .ivu-poptip-popper[x-placement^=top] .ivu-poptip-arrow, .entrance_table_tip .ivu-poptip-popper[x-placement^=top] .ivu-poptip-arrow:after {
    border-top-color: #495060;
  }
  .entrance_table_tip .ivu-poptip-title:after {
    background-color: rgba(255, 255, 255, .4);
  }

  .cards_index_container .ivu-tooltip-rel {
    position: static;
  }
</style>
