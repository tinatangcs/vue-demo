import * as types from './mutation-types'

export default {
  pQty({ commit }, idx) {
    commit(types.P_QTY, idx);
  },
  mQty({ commit }, idx) {
    commit(types.M_QTY, idx);
  },
  saveCartItem({ commit }, index) {
    commit(types.SAVE_CART_ITEM, index);
  },
  delCartItem({ commit }, idx) {
    commit(types.DEL_CART_ITEM, idx)
  },
  /*calCartTotal({ commit }, idx) {
    commit(types.CAL_CART_TOTAL, idx)
  }*/

};
