<template>
  <div class="cards_index_container">
    <div class="cards_index_inner">
      <div class="cards_index_header">
        <div class="cards_group_description">app首页卡片管理</div>
      </div>
      <div class="cards_body_container">
        <div class="cards_body_active_container cards_body_item_container bb">
          <div class="card_item">
            <zpm-card></zpm-card>
          </div>
          <div class="card_item">
            <zpm-card></zpm-card>
          </div>
        </div>
        <div class="cards_body_inactive_container cards_body_item_container">
          未激活区域
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .cards_index_container {
    width: 100%;
    height: 100%;
    background-color: transparent;
    padding: 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .cards_index_inner {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
    overflow-x: hidden;
    overflow-y: auto;
  }
  .cards_index_header {
    padding: 0 15px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    background-color: #495060;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .cards_group_description {
    line-height: 40px;
    color: #ffffff;
    font-size: 14px;
  }
  .cards_body_container {
    width: 100%;
    height: calc(100% - 40px);
    min-height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .cards_body_item_container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .cards_body_active_container {
    /*background-color: #2d8cf0;*/
  }
  .cards_body_inactive_container {
    /*background-color: lightgray;*/
  }
  .bb {
    border-bottom: 1px solid #f5f5f5;
  }
  .card_item {
    width: 375px;
    height: 226px;
    margin: 0 10px;
  }
</style>
<script>
  export default {
    name: 'CardsIndex',
    data () {
      return {
      }
    },
    components: {
      ZpmCard: () => import('./ZpmCard.vue')
    }
  }
</script>
