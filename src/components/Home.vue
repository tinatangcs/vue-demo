<template>
  <div class = "single-product-area">
  <div class="container">
    <div class="row">
      <div class="col-md-3 col-sm-6" v-for="(item,index) in shopItem">
          <div class="single-shop-product">
              <div class="product-upper">
              <img :src="item.image" alt=""/>
              </div>
              <h2><router-link to="/home">{{ item.proName }}</router-link></h2>
              <div class="product-carousel-price">
                  <ins>
                  <span class="amount">
                    <span class="currency">￥</span>
                    <span class="value">{{item.price}}</span>
                  </span>
                  </ins>
              </div>
             <div class="product-option-shop">
                  <button class="add_to_cart_button" @click="addItem(index)">加入购物车</button>
              </div>
          </div>
      </div>
    </div>

  </div>
</div>
</template>
<style>

</style>
<script>

    export default{

        data(){
            return{

            }
        },
        computed : {
          shopItem() {
            return this.$store.state.items
          }
        },
        methods:{
          addItem(idx) {
            //this.$store.dispatch('calCartTotal', idx)
            this.$store.dispatch('saveCartItem', idx)
            this.$router.push('/cart')
          }
        },
        components:{

        }
    }
</script>
<style>
.single-shop-product h2 {
    font-size: 20px;
    margin: 10px 0;
}
.single-shop-product {margin-bottom: 50px}
.product-carousel-price ins {
  color: #5a88ca;
  font-weight: 700;
  margin-right: 5px;
  text-decoration: none;
}
.product-option-shop {
    margin-top: 15px;
}
.add_to_cart_button {
    background: none repeat scroll 0 0 #5a88ca;
    border: medium none;
    color: #fff;
    padding: 6px 25px;display: inline-block
}
.add_to_cart_button:hover {background-color: #222;color: #fff;text-decoration: none}
form.cart {
    margin-bottom: 25px;
}
</style>
