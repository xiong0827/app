<template>
  <div class="cart" v-if="cartList">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th6">全部</div>
        <div class="cart-th1">商品</div>
        <div class="cart-th3">规格</div>
        <div class="cart-th4">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th6">小计（元）</div>
        <div class="cart-th4">操作</div>
      </div>
      <div class="cart-body" v-if="cartList" >
        <ul
          class="cart-list"
          v-for="cartinfo in cartInfoList"
          :key="cartinfo.id"
        >
          <li class="cart-list-con1">
            <input
              type="checkbox"
              name="chk_list"
              :checked="cartinfo.isChecked == 1"
              @change="updateChecked(cartinfo, $event)"
            />
          </li>
          <li class="cart-list-con2">
            <img :src="cartinfo.imgUrl" />
            <div class="item-msg">{{ cartinfo.skuName }}</div>
          </li>
          <li class="cart-list-con3">
            <div class="item-txt">语音升级款</div>
          </li>
          <li class="cart-list-con4">
            <span class="price">{{ cartinfo.cartPrice }}</span>
          </li>
          <li class="cart-list-con5">
            <a @click="handler('low', -1, cartinfo)" class="mins">-</a>
            <input
              @change="handler('change', $event.target.value * 1, cartinfo)"
              autocomplete="off"
              type="text"
              :value="cartinfo.skuNum"
              minnum="1"
              class="itxt"
            />
            <a @click="handler('add', 1, cartinfo)" class="plus">+</a>
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{ cartinfo.skuPrice * cartinfo.skuNum }}</span>
          </li>
          <li class="cart-list-con7">
            <a @click="deleteById(cartinfo.skuId)" class="sindelet">删除</a>
            <br />
            <a href="#none">移到收藏</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input
          class="chooseAll"
          type="checkbox"
          :checked="isAllCheck"
          @click="changeAllChecked($event)"
        />
        <span>全选</span>
      </div>
      <div class="option">
        <a href="#none" @click="deleteAllCheckedCart">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">
          已选择 <span>{{ isCheckedNum }}</span
          >件商品
        </div>
        <div class="sumprice">
          <em>总价</em>
          <i class="summoney">{{ totalPrice }}</i>
        </div>
        <div class="sumbtn">
          <a class="sum-btn" href="###" target="_blank">结算</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ShopCart",
  mounted() {
    this.getData();
  },
  // beforeCreate()
  // {
  //  this.$store.dispatch("shopCart/getCarList");
  // },
  // created() {

  // },
  data() {
    return {
      isdelete: true,
      // 节流阀
      timer: false,
      //防抖
    };
  },
  methods: {
    getData() {
      this.$store.dispatch("shopCart/getCarList");
    },
    //修改商品数量
    handler(type, num, cartinfo) {
      clearTimeout(this.timer);
      this.timer = setTimeout(async () => {
        switch (type) {
          case "add":
            //带给服务器的变化量
            num = 1;
            break;
          case "low":
            // if (cartinfo.skuNum <= 1) {
            //   num = 0;
            // } else {
            //   num = -1;
            // }
            num = cartinfo.skuNum > 1 ? -1 : 0;
            break;
          case "change":
            if (isNaN(num) || num <= 0) {
              num = 0;
            } else {
              num = Math.ceil(num) - cartinfo.skuNum;
              console.log(num);
            }
            break;
        }
        try {
          await this.$store.dispatch("detail/AddOrUpdateShopCart", {
            skuId: cartinfo.skuId,
            skuNum: num,
          });
          this.getData();
        } catch (error) {
          alert(error.message);
        }
      }, 300);
    },
    // 删除购物车数据
    deleteById(skuId) {
      if (this.isdelete != true) {
        return;
      }
      this.isdelete = false;
      setTimeout(async () => {
        try {
          await this.$store.dispatch("shopCart/deleteById", skuId);
          this.getData();
        } catch (error) {
          console.log(error.message);
        }
        this.isdelete = true;
      }, 500);
    },
    //修改勾选参数
    async updateChecked(sku, $event) {
      let isChecked = $event.target.checked ? "1" : "0";
      try {
        await this.$store.dispatch("shopCart/updateCheckedById", {
          skuId: sku.skuId,
          isChecked,
        });
        this.getData();
      } catch (error) {
        console.log(error.message);
      }
    },
    //改变所有商品的选中状态
    async changeAllChecked(event) {
      try {
        let isChecked = event.target.checked ? "1" : "0";
        await this.$store.dispatch("shopCart/changeAllChecked", isChecked);
        this.getData();
      } catch (error) {
        console.log(error.message);
      }
    },

    //删除选中的商品
    async deleteAllCheckedCart() {
      try {
        await this.$store.dispatch("shopCart/deleteAllCheckedCart");
        this.getData();
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  computed: {
    ...mapGetters("shopCart", ["cartList"]),
    cartInfoList() {
      return this.cartList.cartInfoList || [];
    },
    //计算产品的总价
    totalPrice() {
      let sum = 0;
      this.cartInfoList.forEach((element) => {
        sum += element.skuNum * element.skuPrice;
      });
      return sum;
    },
    isAllCheck() {
      if (this.cartInfoList.length==0) {
        return false
      }
      return this.cartInfoList.every((element, index, arr) => {
       
        return element.isChecked == 1;
      });
    },
    isCheckedNum() {
      let sum = 0;
      this.cartInfoList.forEach((element) => {
        if (element.isChecked == 1) {
          sum++;
        }
      });
      return sum;
    },
  },
};
</script>

<style lang="less" scoped>
.cart {
  width: 1200px;
  margin: 0 auto;

  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }

  .cart-main {
    .cart-th {
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;

      & > div {
        float: left;
      }

      .cart-th1 {
        width: 25%;

        input {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }

      .cart-th2 {
        width: 25%;
      }

      .cart-th3,
      .cart-th4,
      .cart-th5,
      .cart-th6 {
        width: 12.5%;
      }
    }

    .cart-body {
      margin: 15px 0;
      border: 1px solid #ddd;

      .cart-list {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;

        & > li {
          float: left;
        }

        .cart-list-con1 {
          width: 4.1667%;
        }

        .cart-list-con2 {
          width: 25%;

          img {
            width: 82px;
            height: 82px;
            float: left;
          }

          .item-msg {
            float: left;
            width: 150px;
            margin: 0 10px;
            line-height: 18px;
          }
        }

        .cart-list-con3 {
          width: 20.8333%;

          .item-txt {
            text-align: center;
          }
        }

        .cart-list-con4 {
          width: 12.5%;
        }

        .cart-list-con5 {
          width: 12.5%;

          .mins {
            border: 1px solid #ddd;
            border-right: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }

          input {
            border: 1px solid #ddd;
            width: 40px;
            height: 33px;
            float: left;
            text-align: center;
            font-size: 14px;
          }

          .plus {
            border: 1px solid #ddd;
            border-left: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }
        }

        .cart-list-con6 {
          width: 12.5%;

          .sum {
            font-size: 16px;
          }
        }

        .cart-list-con7 {
          width: 12.5%;

          a {
            color: #666;
          }
        }
      }
    }
  }

  .cart-tool {
    overflow: hidden;
    border: 1px solid #ddd;

    .select-all {
      padding: 10px;
      overflow: hidden;
      float: left;

      span {
        vertical-align: middle;
      }

      input {
        vertical-align: middle;
      }
    }

    .option {
      padding: 10px;
      overflow: hidden;
      float: left;

      a {
        float: left;
        padding: 0 10px;
        color: #666;
      }
    }

    .money-box {
      float: right;

      .chosed {
        line-height: 26px;
        float: left;
        padding: 0 10px;
      }

      .sumprice {
        width: 200px;
        line-height: 22px;
        float: left;
        padding: 0 10px;

        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }

      .sumbtn {
        float: right;

        a {
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}
</style>