/***
 **                                                          _ooOoo_
 **                                                         o8888888o
 **                                                         88" . "88
 **                                                         (| -_- |)
 **                                                          O\ = /O
 **                                                      ____/`---'\____
 **                                                    .   ' \\| |// `.
 **                                                     / \\||| : |||// \
 **                                                   / _||||| -:- |||||- \
 **                                                     | | \\\ - /// | |
 **                                                   | \_| ''\---/'' | |
 **                                                    \ .-\__ `-` ___/-. /
 **                                                 ___`. .' /--.--\ `. . __
 **                                              ."" '< `.___\_<|>_/___.' >'"".
 **                                             | | : `- \`.;`\ _ /`;.`/ - ` : | |
 **                                               \ \ `-. \_ __\ /__ _/ .-` / /
 **                                       ======`-.____`-.___\_____/___.-`____.-'======
 **                                                          `=---='
 **
 **                                       .............................................
 **                                              佛祖保佑             永无BUG
 **                                      佛曰:
 **                                              写字楼里写字间，写字间里程序员；
 **                                              程序人员写程序，又拿程序换酒钱。
 **                                              酒醒只在网上坐，酒醉还来网下眠；
 **                                              酒醉酒醒日复日，网上网下年复年。
 **                                              但愿老死电脑间，不愿鞠躬老板前；
 **                                              奔驰宝马贵者趣，公交自行程序员。
 **                                              别人笑我忒疯癫，我笑自己命太贱；
 **                                              不见满街漂亮妹，哪个归得程序员？
 */
/**
 * Created by liangshan on 2017/7/13.
 */

import * as types from './mutation-types'

export const mutations = {
  [types.SHOW_POPUP] (state, data) {
    state.popup = Object.assign({}, state.popup, data, {
      shown: true
    })
  },
  [types.SET_ALL_PLUGINS] (state, data) {
    state.allPlugins = data.allPlugins
  },
  [types.SET_LOADER] (state, data) {
    state.loaders[data.name] = data.value.vm
  },
  [types.DEL_LOADER] (state, data) {
    if (state.loaders[data.name]) {
      delete state.loaders[data.name]
    }
  },
  [types.SET_SOCKET] (state, data) {
    state.socket.client = data.socket
  },
  [types.UPDATE_LOGIN_INFO] (state, data) {
    state.loginInfo = data
  },
  [types.DISCONNECT_SOCKETIO] (state) {
    state.socket.client.disconnect()
    state.socket.client = {}
  },
  [types.UPDATE_AVATAR] (state, data) {
    state.loginInfo.headIcon = data.avatar
  },
  [types.TOGGLE_MENU] (state, data) {
    state.spanLeft = (state.spanLeft === 1 ? 4 : 1)
    state.spanRight = (state.spanRight === 23 ? 20 : 23)
    state.menuFold = (state.spanLeft === 1)
  },
  [types.TOGGLE_FULL_SCREEN] (state, data) {
    state.isFullScreen = data.isFullScreen
  },
  [types.CACHE_MENU_ITEMS] (state, data) {
    state.menuItems = data.menuItems
  }
}
