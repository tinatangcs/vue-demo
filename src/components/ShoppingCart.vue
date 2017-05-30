<template>

  <div class = "single-product-area">
    <div class = "container">
      <div class = "container">
        <div v-show = "currCart.length == 0">
          <h2>购物车是空的</h2>
          <router-link to="/home" class="btn btn-primary">继续购物</router-link>
        </div>
      </div>
      <div class = "row"  v-show = "currCart.length != 0">
      <div class="col-md-8">
        <div class="product-content-right">
            <div class="woocommerce">
              <table cellspacing="0" class="shop_table cart">
                        <thead>
                            <tr>
                                <th class="product-remove">&nbsp;</th>
                                <th class="product-thumbnail">商品ID</th>
                                <th class="product-name">商品名字</th>
                                <th class="product-price">单价</th>
                                <th class="product-quantity">数量</th>
                                <th class="product-subtotal">总价</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="cart_item" v-for="(cItem,index) in currCart" v-show = "cItem.qty != 0">
                                <td >
                                  <button class="btn btn-xs btn-danger delete-button" @click="delCartItem(index)">
                                  X
                                  </button>
                                </td>
                                <td >
                                  {{cItem.proID}}
                                </td>
                                <td class="product-name">
                                    {{cItem.proName}}
                                </td>

                                <td class="product-price">
                                  <span class="amount">
                                    <span class="currency">￥</span>
                                    <span class="value">{{cItem.price}}</span>
                                  </span>
                                </td>

                                <td class="product-quantity">
                                    <div class="quantity buttons_added">
                                        <input type="button" class="minus" value="-" @click ="mQty(index)">
                                        <input type="number" size="4" class="input-text qty text" title="Qty" v-model=cItem.qty min="0" >
                                        <input type="button" class="plus" value="+" @click ="pQty(index)">
                                    </div>
                                </td>
                                <td class="product-subtotal">
                                    <span class="amount">
                                      <span class="currency">￥</span>
                                      <span class="value">{{cItem.price*cItem.qty}}</span>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td class="actions" colspan="6">
                                    <div class="coupon">
                                       <input type="submit" value="清空" name="clear" class="button" @click ="clearCart()" >
                                    </div>
                                    <input type="submit" value="继续购物" name="back_to_store" class="button" @click ="backToStore()">
                                    <input type="submit" value="结账" name="proceed" class="checkout-button button alt wc-forward">
                                </td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="cart_totals ">
          <h2>账单条目</h2>
            <table cellspacing="0">
              <tbody>
                        <th>商品总价</th>
                        <td><span class="amount">
                          <span class="currency">￥</span>
                          <span class="value">{{cartSum}}</span>
                        </span>
                      </td>
                    </tr>

                    <tr class="shipping">
                        <th>快递费</th>
                        <td>免费</td>
                    </tr>
                    <tr class="order-total">
                        <th>订单总和</th>
                          <strong><td><span class="amount">
                          <span class="currency">￥</span>
                          <span class="value">{{cartSum}}</span>
                        </span>
                      </td></strong>
                    </tr>
                </tbody>
            </table>
         </div>
      </div>
    </div>
    </div>
  </div>

</template>
<style>
.single-product-area {
  padding: 80px 0 130px;
}
table.shop_table {
    border-bottom: 1px solid #ddd;
    border-right: 1px solid #ddd;
    margin-bottom: 50px;
    width: 100%;
}
table.shop_table th, table.shop_table td {
    border-left: 1px solid #ddd;
    border-top: 1px solid #ddd;
    padding: 15px;
    text-align: center;
}
table.shop_table th {
    background: none repeat scroll 0 0 #f4f4f4;
    font-size: 15px;
    text-transform: uppercase;
}
td.product-thumbnail img {
    height: auto;
    width: 70px;
}
td.product-name {
    font-size: 18px;
}
input[type="submit"], button[type=submit] {
    background: none repeat scroll 0 0 #5a88ca;
    border: medium none;
    color: #fff;
    padding: 11px 20px;
    text-transform: uppercase;
}
input[type="submit"]:hover, button[type=submit]:hover {background-color: #222}
.quantity {
    float: left;
    margin-right: 15px;
}
.quantity input[type="number"] {
    border: 1px solid #5a88ca;
    padding: 5px;
    width: 50px;
}
div.quantity input.plus, div.quantity input.minus {
    background: none repeat scroll 0 0 #5a88ca;
    border: medium none;
    color: #fff;
    height: 25px;
    line-height: 15px;
    width: 25px;
}
td.product-quantity div.quantity {
    float: none;
    margin: 0;
}
td.actions div.coupon {
    float: left;
}
.cart-collaterals {
    overflow: hidden;
}
.cross-sells {
    float: left;
    margin-right: 3%;
    width: 57%;
}
.cart_totals {
    float: right;
    margin-bottom: 50px;

}
.cart_totals h2 {
    color: #5a88ca;
    font-size: 25px;
    margin-bottom: 25px;
    text-transform: uppercase;
}

.cart_totals table {
    border-bottom: 1px solid #ddd;
    border-right: 1px solid #ddd;
    width: 100%;
}
.cart_totals table th, .cart_totals table td {
    border-left: 1px solid #ddd;
    border-top: 1px solid #ddd;
    padding: 10px;
}
.cart_totals table th {
    background: none repeat scroll 0 0 #f4f4f4;
}
table.shop_table td.product-remove a {
  display: inline-block;
  padding: 0 5px 2px;
  text-transform: uppercase;
}


table.shop_table td.product-remove a:hover {color: #fff;background: red;text-decoration: none}
table.shop_table td.product-name a{color: #222;}
table.shop_table td.product-name a:hover {color: #5a88ca;text-decoration: none}
div.quantity input.plus:hover, div.quantity input.minus:hover {background-color: #222}

</style>
<script>

    export default{

        data(){
            return{

            }
        },
        computed : {
          currCart() {
            return this.$store.state.cartItem
          },
          backToStore(){
            this.$router.push("/home")
          },
          clearCart(){
             this.$store.state.cartItem =[];
             this.$store.state.cartTotal = 0;
             this.$store.state.orderTotal = 0,
             this.$store.state.shippingFee = 0

          },
          cartSum() {
            return this.$store.state.cartTotal;
          }
        },
        methods:{
          delCartItem(idx) {
            //this.$store.dispatch('deletePlan',this.currCart[idx].cartTotal)
            this.$store.dispatch('delCartItem', idx)
          },
          mQty(idx)
          {
            this.$store.dispatch('mQty', idx)
            //this.$store.dispatch('deletePlan',idx)
          },
          pQty(idx)
          {
            this.$store.dispatch('pQty', idx)
            //this.$store.dispatch('deletePlan',idx)
          }
        },
        components:{
        }
    }
</script>
