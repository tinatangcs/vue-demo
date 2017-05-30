import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

const state = {

  items: [{proName : 'HUAWEI NOVA 网通',proID : 'HWVA1',qty : 1,price : 2099,image : require("../assets/product-1.jpg")},
          {proName : 'HUAWEI NOVA 畅享',proID : 'HWCX1',qty : 1,price : 899,image : require("../assets/product-2.jpg")},
          {proName : 'HUAWEI MA',proID : 'HWMA1',qty : 1,price : 3399,image : require("../assets/product-3.jpg")},
          {proName : 'HUAWEI N4',proID : 'HWNO1',qty : 1,price : 3000,image : require("../assets/product-4.jpg")}],
  cartItem: [],
  orderTotal: 0,
  cartTotal: 0,
  shippingFee: 0

};

export default new Vuex.Store({
  state,
  mutations,
  actions
})
