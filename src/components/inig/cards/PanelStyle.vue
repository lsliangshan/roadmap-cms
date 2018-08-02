<template>
  <div class="panel_style_container">
    <Form :label-width="80" style="padding-right: 15px; box-sizing: border-box;" key="text" v-if="data.eleType === 'text'">
      <FormItem :model="data" label="文本">
        <Input placeholder="请输入文本" v-model="data.data[data.type]"/>
      </FormItem>
      <FormItem :model="data" label="字体大小">
        <Input placeholder="请输入字体大小" :value="data.data[data.type + 'Styles'].fontSize | formatPx" @on-change="changeFontSize">
          <span slot="append">像素</span>
        </Input>
      </FormItem>
      <FormItem :model="data" label="字体粗细">
        <Select v-model="data.data[data.type + 'Styles'].fontWeight">
          <Option v-for="(item, index) in fontWeights" :key="item.value" :value="item.value" v-text="item.value"></Option>
        </Select>
      </FormItem>
      <FormItem :model="data" label="字体颜色">
        <ColorPicker :transfer="true" :value="data.data[data.type + 'Styles'].color || 'transparent'" @on-change="changeColor" />
        <Input class="inline_input" placeholder="请输入字体颜色" v-model="data.data[data.type + 'Styles'].color"/>
      </FormItem>
    </Form>
    <Form :label-width="80" style="padding-right: 15px; box-sizing: border-box;" key="image" v-if="data.eleType === 'image'">
      <FormItem label="图片地址">
        <div class="input_item">
          <input type="text" class="custom_input" placeholder="请输入图片url" v-model="data.data[data.type]"/>
        </div>
        <div class="image_preview">
          <div class="image_preview_wrapper">
            <img :src="data.data[data.type]">
          </div>
        </div>
      </FormItem>
    </Form>
  </div>
</template>
<style scoped>
 .panel_style_container {
   width: 100%;
   height: 100%;
   padding-top: 16px;
   -webkit-box-sizing: border-box;
   -moz-box-sizing: border-box;
   box-sizing: border-box;
 }
  .inline_input {
    width: 160px;
  }

 .image_preview {
   width: 100%;
   /*height: 100px;*/
   display: flex;
   align-items: center;
   justify-content: flex-start;
   margin-top: 15px;
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
 }
</style>
<script>
/**
 * 样式面板
 */
export default {
  name: 'PanelStyle',
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      fontWeights: [
        {
          value: 'normal'
        },
        {
          value: 'bold'
        },
        {
          value: 'bolder'
        },
        {
          value: 'lighter'
        },
        {
          value: '100'
        },
        {
          value: '200'
        },
        {
          value: '300'
        },
        {
          value: '400'
        },
        {
          value: '500'
        },
        {
          value: '600'
        },
        {
          value: '700'
        },
        {
          value: '800'
        },
        {
          value: '900'
        }
      ]
    }
  },
  created () {
  },
  methods: {
    changeFontSize (e) {
      this.data.data[this.data.type + 'Styles'].fontSize = e.target.value + 'px'
    },
    changeColor (color) {
      this.data.data[this.data.type + 'Styles'].color = color
      console.log('......', color)
    }
  },
  filters: {
    formatPx (text) {
      if (!text) {
        return ''
      }
      return text.replace(/px$/, '')
    }
  },
  components: {}
}
</script>
