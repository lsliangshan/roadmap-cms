<template>
  <div class="cards_index_container">
    <div class="cards_index_inner">
      <div class="cards_index_header">
        <div class="cards_group_description">app首页卡片管理</div>
      </div>
      <div class="cards_body_container">
        <div class="cards_body_active_container cards_body_item_container bb">
          <zpm-draggable element="ul" class="cards_body_draggable_container" v-model="activeCards" :options="dragOptions" :move="onMove">
            <transition-group>
              <li class="card_item item_card" v-for="(card, index) in activeCards" :key="card.name">
                <zpm-card :data="card" @change="" @change-image="changeImage" target="activeCards" :index="index" @choose-image="chooseImage"></zpm-card>
                <div slot="foot" class="tag_container">
                  <Tooltip content="保存">
                    <Icon type="ios-cloud-upload-outline" size="20"></Icon>
                    <div class="tag_container_angle_1"></div>
                    <div class="tag_container_angle_2"></div>
                  </Tooltip>
                </div>
              </li>
            </transition-group>
          </zpm-draggable>
        </div>
        <div class="" style="width: 100%; height: 100%; min-width: 400px;">
          <div class="cards_body_inactive_container cards_body_item_container">
            <zpm-draggable element="ul" class="cards_body_draggable_container pr" v-model="inactiveCards" :options="dragOptions" :move="onMove" v-test>
              <transition-group>
                <li class="card_item item_card" v-for="(card, index) in inactiveCards" :key="card.name">
                  <zpm-card :data="card" @change="" @change-image="changeImage" target="inactiveCards" :index="index" @choose-image="chooseImage"></zpm-card>
                </li>
                <li key="footer" class="card_plus">
                  <div class="card_plus_inner">
                    <Icon type="ios-plus-empty" size="100"></Icon>
                  </div>
                </li>
              </transition-group>
            </zpm-draggable>
          </div>
        </div>
      </div>
      <!--<div class="cards_body_container">-->
        <!--<div class="cards_body_inner" style="width: 100%; overflow-x: auto;">-->
          <!--<div class="cards_body_active_container cards_body_item_container bb">-->
            <!--<zpm-draggable element="ul" class="cards_body_draggable_container" v-model="cards" :options="dragOptions" :move="onMove">-->
              <!--<transition-group>-->
                <!--<li class="card_item" v-for="(card, index) in cards" :key="card.name">-->
                  <!--<zpm-card :data="card"></zpm-card>-->
                <!--</li>-->
              <!--</transition-group>-->
            <!--</zpm-draggable>-->
          <!--</div>-->
        <!--</div>-->

        <!--<div class="cards_body_inactive_container cards_body_item_container">-->
          <!--未激活区域-->
        <!--</div>-->
      <!--</div>-->
    </div>

    <Modal
      v-model="uploadImageModal.shown"
      title="更换图片"
      @on-ok="confirmChangeImage"
      @on-cancel="cancelChangeImage"
    >
      <div class="image_preview">
        <div class="image_preview_wrapper">
          <img :src="uploadImageModal.dest || uploadImageModal.origin">
        </div>
      </div>
      <div class="input_item">
        <input type="text" class="custom_input" placeholder="请输入图片url" :value="uploadImageModal.dest || uploadImageModal.origin" @input="changeImageUrl"/>
      </div>
    </Modal>
  </div>
</template>
<style scoped lang="scss">
  @import "../../../assets/css/theme.scss";
  .flip-list-move {
    transition: transform 0.5s;
  }

  .image_preview {
    width: 100%;
    /*height: 100px;*/
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .image_preview_wrapper {
    width: 96px;
    height: 96px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, .1);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .image_preview img {
    max-width: 90px;
    max-height: 90px;
    background-color: #ffffff;
  }
  .input_item {
    margin-top: 15px;
  }

  .no-move {
    transition: transform 0s;
  }

  .ghost {
    opacity: .3;
  }

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
    position: relative;
    width: 100%;
    height: calc(100% - 40px);
    min-height: 600px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .cards_body_item_container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: #f5f5f5;
  }
  .cards_body_draggable_container {
    position: absolute;
    min-width: 100%;
    height: 100%;
  }
  .cards_body_draggable_container span {
    /*width: 100%;*/
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .cards_body_draggable_container.pr span {
    padding-right: 200px;
  }
  .cards_body_active_container {
    /*background-color: #2d8cf0;*/
  }
  .cards_body_inactive_container {
    /*background-color: lightgray;*/
  }
  .bb {
    border-bottom: 1px solid #ccc;
  }
  .item_card {
    position: relative;
    width: 375px;
    height: 235px;
    /*height: 226px;*/
    /*width: 200px;*/
    /*height: 121px;*/
    /*width: 750px;*/
    /*height: 452px;*/
    margin: 0 10px;
    cursor: move;
    overflow: hidden;
  }

  .tag_container {
    position: absolute;
    right: 0;
    top: 0;
    width: 80px;
    height: 80px;
    background-color: $theme;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tag_container.disabled {
    background-color: #c8c8c8;
    cursor: not-allowed;
  }
  .tag_container i {
    color: #ffffff;
    font-weight: bold;
    /*margin-bottom: 25%;*/
    /*margin-left: 25%;*/
    margin-bottom: 110%;
    margin-left: 65%;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .tag_container_angle_1 {
    position: absolute;
    right: -2px;
    top: -2px;
    width: 0;
    height: 0;
    border-top: 21px solid #ffffff;
    border-right: 21px solid #FFFFFF;
    border-left: 21px solid transparent;
    border-bottom: 21px solid transparent;
  }
  .tag_container_angle_2 {
    position: absolute;
    left: -1px;
    bottom: -1px;
    width: 0;
    height: 0;
    border-left: 41px solid #FFFFFF;
    border-bottom: 41px solid #FFFFFF;
    border-top: 41px solid transparent;
    border-right: 41px solid transparent;
  }

  .card_plus {
    position: absolute;
    right: 0;
    top: 0;
    width: 200px;
    height: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .card_plus_inner {
    width: 150px;
    height: 226px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $theme_o_5;
    cursor: pointer;
  }
  .card_plus_inner:hover {
    color: $theme;
  }
  .card_plus_inner i {
    font-weight: bold;
  }
</style>
<script>
  export default {
    name: 'CardsIndex',
    data () {
      return {
        fixed: ['arrangement'],
        activeCards: [
          {
            name: 'resumePerfect',
            category: '完善简历',
            title: '你的简历不完整',
            content: '完善简历后，才可以投递哦~',
            image: 'https://img09.zhaopin.cn/2012/other/mobile/weex/interviewCard/card_resume_perfect_2.png',
            btnOkIcon: 'https://img09.zhaopin.cn/2012/other/mobile/weex/interviewCard/icon_resume_perfect_2.png',
            btnOkText: '完善简历'
          },
          {
            name: 'forum',
            category: '精彩活动',
            title: '你的潜力 不止于此',
            content: '中国女性领导力高峰论坛开启~',
            image: 'https://img09.zhaopin.cn/2012/other/mobile/weex/interviewCard/card_forum_2.png',
            btnOkIcon: 'https://img09.zhaopin.cn/2012/other/mobile/weex/interviewCard/icon_forum_2.png',
            btnOkText: '参与活动'
          },
          {
            name: 'arrangement',
            category: '面试安排',
            title: '你的面试安排',
            content: '面试安排详情',
            image: 'https://img09.zhaopin.cn/2012/other/mobile/weex/interviewCard/card_arrangement_2.png',
            btnOkIcon: 'https://img09.zhaopin.cn/2012/other/mobile/weex/interviewCard/icon_arrangement_2.png',
            btnOkText: '查看'
          },
          {
            name: 'invitation',
            category: '面试邀请',
            title: '你的面试邀请',
            content: '面试邀请详情',
            image: 'https://img09.zhaopin.cn/2012/other/mobile/weex/interviewCard/card_invitation_2.png',
            btnOkIcon: 'https://img09.zhaopin.cn/2012/other/mobile/weex/interviewCard/icon_invitation_2.png',
            btnOkText: '查看'
          }
        ],
        inactiveCards: [
          {
            name: 'in-resumePerfect',
            category: 'in-完善简历',
            title: 'in-你的简历不完整',
            content: 'in-完善简历后，才可以投递哦~',
            image: 'https://img09.zhaopin.cn/2012/other/mobile/weex/interviewCard/card_resume_perfect_2.png',
            btnOkIcon: 'https://img09.zhaopin.cn/2012/other/mobile/weex/interviewCard/icon_resume_perfect_2.png',
            btnOkText: 'in-完善简历'
          },
          {
            name: 'in-forum',
            category: 'in-精彩活动',
            title: 'in-你的潜力 不止于此',
            content: 'in-中国女性领导力高峰论坛开启~',
            image: 'https://img09.zhaopin.cn/2012/other/mobile/weex/interviewCard/card_forum_2.png',
            btnOkIcon: 'https://img09.zhaopin.cn/2012/other/mobile/weex/interviewCard/icon_forum_2.png',
            btnOkText: 'in-参与活动'
          },
          {
            name: 'in-arrangement',
            category: 'in-面试安排',
            title: 'in-你的面试安排',
            content: 'in-面试安排详情',
            image: 'https://img09.zhaopin.cn/2012/other/mobile/weex/interviewCard/card_arrangement_2.png',
            btnOkIcon: 'https://img09.zhaopin.cn/2012/other/mobile/weex/interviewCard/icon_arrangement_2.png',
            btnOkText: 'in-查看'
          },
          {
            name: 'in-invitation',
            category: 'in-面试邀请',
            title: 'in-你的面试邀请',
            content: 'in-面试邀请详情',
            image: 'https://img09.zhaopin.cn/2012/other/mobile/weex/interviewCard/card_invitation_2.png',
            btnOkIcon: 'https://img09.zhaopin.cn/2012/other/mobile/weex/interviewCard/icon_invitation_2.png',
            btnOkText: 'in-查看'
          }
        ],
        showFooter: false,
        uploadImageModal: {
          shown: false,
          origin: '',
          dest: '',
          name: '',
          index: -1
        }
      }
    },
    computed: {
      dragOptions () {
        return {
          animation: 300,
          group: 'description',
          disabled: false,
          ghostClass: 'ghost',
          draggable: '.item_card'
        }
      }
    },
    methods: {
      changeImage (args) {
        this.uploadImageModal.shown = false
      },
      chooseImage (args) {
        /**
         * 打开图片选择框
         * @type {{shown: boolean, origin: *, dest: string, target: *, name: *, index: *}}
         */
        this.uploadImageModal = {
          shown: true,
          origin: args.src,
          dest: '',
          target: args.target,
          name: args.name,
          index: args.index
        }
      },
      changeImageUrl (e) {
        this.uploadImageModal.dest = e.target.value
      },
      confirmChangeImage () {
        let _names = this.uploadImageModal.name.split('.')
        if (_names.length <= 1) {
          this[this.uploadImageModal.target][this.uploadImageModal.index][this.uploadImageModal.name] = this.uploadImageModal.dest
        } else {
          let _key = this[this.uploadImageModal.target][this.uploadImageModal.index]
          for (let i = 0; i < _names.length; i++) {
            _key = _key[_names[i]]
          }
          window[_key] = this.uploadImageModal.dest
        }
        this.uploadImageModal = {
          shown: false,
          origin: '',
          dest: '',
          target: '',
          name: '',
          index: -1
        }
      },
      cancelChangeImage () {
        this.uploadImageModal = {
          shown: false,
          origin: '',
          dest: '',
          name: '',
          target: '',
          index: -1
        }
      },
      onMove ({relatedContext, draggedContext}) {
//        const relatedElement = relatedContext.element
//        const draggedElement = draggedContext.element
//        return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      }
    },
    directives: {
      test: function (el) {
        console.log('>>>>', el)
      }
    },
    components: {
      ZpmCard: () => import('./ZpmCard.vue')
    }
  }
</script>
