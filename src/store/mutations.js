import * as types from './mutation-types'

export default {
  /*[types.CAL_CART_TOTA] (state, idx) {
    let tempct = state.cartTotal;
    let curr =tempct + state.cartItem[idx].price * state.cartItem[idx].qty ;
    state.cartTotal = curr;
  },*/
  [types.M_QTY] (state, idx) {
    let tempct = state.cartTotal;
    let p = state.cartItem[idx].price;
    let curr =tempct - p;
    state.cartTotal = curr;
    state.cartItem[idx].qty = state.cartItem[idx].qty - 1;
  },
  [types.P_QTY] (state, idx) {
    let tempct = state.cartTotal;
    let p = state.cartItem[idx].price;
    let curr =tempct + p;
    state.cartTotal = curr;
    state.cartItem[idx].qty = state.cartItem[idx].qty + 1;
  },
  [types.SAVE_CART_ITEM] (state, index) {

    var found = false;
    for (var i = 0; i < state.cartItem.length && !found; i++) {
      var temp = state.cartItem[i];
      if (temp.proName == state.items[index].proName) {
        found = true;
        temp.qty = temp.qty + state.items[index].qty;
      };
    };
    if (!found) {
      state.cartItem.push(Object.assign({}, state.items[index]));
      /*let tempct = state.cartTotal;
      let curr = tempct+state.items[index].price;
      state.cartTotal = curr;*/
    };
    /*let tempct = state.cartTotal;
    let curr =tempct + state.cartItem[index].price * state.cartItem[index].qty;
    state.cartTotal = curr;*/
    let tempct = state.cartTotal;
    let curr =tempct+state.items[index].price;
    state.cartTotal = curr;
  },
  [types.DEL_CART_ITEM] (state, idx) {
    let tempct = state.cartTotal;
    let p = state.cartItem[idx].price;
    let q = state.cartItem[idx].qty;
    let curr =tempct - p*q;
    state.cartTotal = curr;
    state.cartItem.splice(idx, 1);

  },
  [types.DELETE_PLAN] (state, idx) {
    state.list.splice(idx, 1);
  }
};
