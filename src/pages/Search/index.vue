<template>
  <div>
    <TypeNav />
    <div class="main">
      <div class="py-container">
        <!--bread-->
        <!-- //面包屑 -->
        <div class="bread">
          <ul class="fl sui-breadcrumb">
            <li>
              <a href="#">全部结果</a>
            </li>
          </ul>
          <ul class="fl sui-tag">
            <!-- 分类的面包屑 -->
            <li
              @click="updataSearchName"
              v-if="searchParams.categoryName"
              class="with-x"
            >
              {{ searchParams.categoryName }}<i>×</i>
            </li>
            <!-- 关键词的面包屑 -->
            <li
              @click="updataSearchKeyword"
              v-if="searchParams.keyword"
              class="with-x"
            >
              {{ searchParams.keyword }}<i>×</i>
            </li>
            <!-- 品牌的面包屑 -->
            <li
              @click="updataSearchTrademark"
              v-if="searchParams.trademark"
              class="with-x"
            >
              {{ searchParams.trademark.split(":")[1] }}<i>×</i>
            </li>
            <!-- 商品属性的面包屑 -->
            <li
              @click="updataAttrInfo(index)"
              v-for="(attrValue, index) in searchParams.props"
              :key="index"
              class="with-x"
            >
              {{ searchParams.props[index].split(":")[1] }}<i>×</i>
            </li>
            <!-- <li @click="updataSearchKeyword" v-if="searchParams.keyword" class="with-x">{{searchParams.keyword}}<i>×</i></li> -->
          </ul>
        </div>

        <!--商品属性筛选-->

        <SearchSelector @tradmarkInfo="tradmarkInfo" @attrInfo="attrInfo" />

        <!--商品综合信息-->
        <div class="details clearfix">
          <div class="sui-navbar">
            <div class="navbar-inner filter">
              <!-- //综合销量排序 -->
              <ul class="sui-nav">
                动态控制上下箭头以及不同排序
                <li
                  :class="{ active: isOne }"
                  data-orders="1"
                  @click="updataIcon"
                >
                  <a
                    >综合<span
                      v-show="isOne"
                      class="iconfont"
                      :class="{ 'icon-down': isAsc, 'icon-up': isDesc }"
                    ></span
                  ></a>
                </li>
                <li
                  :class="{ active: isTwo }"
                  data-orders="2"
                  @click="updataIcon"
                >
                  <a
                    >价格<span
                      v-show="isTwo"
                      class="iconfont icon-down"
                      :class="{ 'icon-down': isAsc, 'icon-up': isDesc }"
                    ></span
                  ></a>
                  <i></i>
                </li>
              </ul>
            </div>
          </div>
          <div class="goods-list">
            <!-- //商品详情 -->
            <ul class="yui3-g">
              <li
                class="yui3-u-1-5"
                v-for="(k, index) in goodsList"
                :key="k.id"
              >
                <div class="list-wrap">
                  <div class="p-img">
                    <router-link
                      :to="{
                        name: 'detail',
                        params: {
                          skuid: k.id,
                        },
                      }"
                    >
                      <img :src="k.defaultImg" />
                    </router-link>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>{{ k.price }}</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a target="_blank" :title="k.title"></a>{{ k.title }}
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a
                      @click="addShopcar(k.id)"
                      target="_blank"
                      class="sui-btn btn-bordered btn-danger"
                      >加入购物车</a
                    >
                    <a href="javascript:void(0);" class="sui-btn btn-bordered"
                      >收藏</a
                    >
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <PaginAction
            :pageNo="searchParams.pageNo"
            :pageSize="searchParams.pageSize"
            :total="total"
            :continues="5"
            @getPageNo="getPageNo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchSelector from "./SearchSelector/SearchSelector";
import { mapGetters } from "vuex";

export default {
  name: "Search",
  props: ["query", "params"],
  data() {
    return {
      //请求的具体参数
      searchParams: {
        category1Id: "",
        category2Id: "",
        category3Id: "",
        categoryName: "",
        keyword: "",
        order: "1:asc",
        pageNo: 1,
        pageSize: 10,
        props: [],
        trademark: "",
      },
    };
  },
  components: {
    SearchSelector,
  },
  methods: {
    //向服务器发请求获取search模块数据
    getDate() {
      this.$store.dispatch("search/getSearchInfo", this.searchParams);
    },
    //更新搜索名字面包屑
    updataSearchName() {
      //  Object.assign(this.searchParams,this.query,this.params);
      this.searchParams.categoryName = undefined;
      this.removeCategory();
      this.getDate();
      this.$router.push({ name: "search", params: this.params });
      //  this.searchParams.categoryName=''
    },
    //清空id数据
    removeCategory() {
      this.searchParams.category1Id = undefined;
      this.searchParams.category2Id = undefined;
      this.searchParams.category3Id = undefined;
    },
    //更新搜索关键词面包屑
    updataSearchKeyword() {
      this.searchParams.keyword = undefined;
      this.getDate();

      this.$bus.$emit("clear");
    },
    //更新品牌关键词面包屑
    updataSearchTrademark() {
      this.searchParams.trademark = undefined;
      this.getDate();
    },
    //更新商品属性面包屑
    updataAttrInfo(index) {
      this.searchParams.props.splice(index, 1);
      this.getDate();
    },
    //手机品牌属性回调函数(自定义事件)
    tradmarkInfo(trademark) {
      //整理数据
      this.searchParams.trademark = `${trademark.tmId}:${trademark.tmName}`;
      this.getDate();
    },
    //手机详细参数回调函数
    attrInfo(attr, k) {
      let prop = `${attr.attrId}:${k}:${attr.attrName}`;
      //props去重
      if (this.searchParams.props.indexOf(prop) == -1) {
        this.searchParams.props.push(prop);
      }
      this.getDate();
    },
    // 修改升降序
    updataIcon(e) {
      let a = e.currentTarget.dataset.orders;
      let b = this.searchParams.order.split(":")[0];
      if (this.searchParams.order.split(":")[0] != a) {
        this.searchParams.order = this.searchParams.order.replace(b, a);
        this.searchParams.order = `${a}:asc`;
      } else {
        if (this.searchParams.order.split(":")[1] == "desc") {
          this.searchParams.order = `${a}:asc`;
        } else {
          this.searchParams.order = `${a}:desc`;
        }
      }
      this.getDate();
    },
    //这是自定义的回调函数 获取当前第几页
    getPageNo(pageNo) {
      this.searchParams.pageNo = pageNo;
      this.getDate();
    },
    //加入购物车
    async addShopcar(skuId) {
      const loction = { skuId, skuNum: 1 };
      try {
        await this.$store.dispatch('detail/AddOrUpdateShopCart',loction)
        // this.$router.push({
        //   name:'addcartsuccess',
        //   query:{
        //     skuNum:1
        //   }
        // })
        // this.$store.dispatch("detail/GoodsInfo", skuId);
        // sessionStorage.setItem('info',JSON.stringify(this.$store.getters["detail/skuInfo"]))
    
      } catch (error) {
        console.log(error);
      }
    },
  },
  beforeMount() {
    Object.assign(this.searchParams, this.query, this.params);
  },
  mounted() {
    //发请求获取商品详情
    this.getDate();
  },
  computed: {
    ...mapGetters("search", ["goodsList"]),
    isOne() {
      return this.searchParams.order.indexOf("1") != -1;
    },
    isTwo() {
      return this.searchParams.order.indexOf("2") != -1;
    },
    isAsc() {
      return this.searchParams.order.indexOf("asc") != -1;
    },
    isDesc() {
      return this.searchParams.order.indexOf("desc") != -1;
    },
    ...mapGetters("search", ["total"]),
  },
  watch: {
    $route: {
      deep: true,
      handler(value, oldvalue) {
        Object.assign(this.searchParams, this.query, this.params);
        this.getDate();
      },
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  margin: 10px 0;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .bread {
      margin-bottom: 5px;
      overflow: hidden;

      .sui-breadcrumb {
        padding: 3px 15px;
        margin: 0;
        font-weight: 400;
        border-radius: 3px;
        float: left;

        li {
          display: inline-block;
          line-height: 18px;

          a {
            color: #666;
            text-decoration: none;

            &:hover {
              color: #4cb9fc;
            }
          }
        }
      }

      .sui-tag {
        margin-top: -5px;
        list-style: none;
        font-size: 0;
        line-height: 0;
        padding: 5px 0 0;
        margin-bottom: 18px;
        float: left;

        .with-x {
          font-size: 12px;
          margin: 0 5px 5px 0;
          display: inline-block;
          overflow: hidden;
          color: #000;
          background: #f7f7f7;
          padding: 0 7px;
          height: 20px;
          line-height: 20px;
          border: 1px solid #dedede;
          white-space: nowrap;
          transition: color 400ms;
          cursor: pointer;

          i {
            margin-left: 10px;
            cursor: pointer;
            font: 400 14px tahoma;
            display: inline-block;
            height: 100%;
            vertical-align: middle;
          }

          &:hover {
            color: #28a3ef;
          }
        }
      }
    }

    .details {
      margin-bottom: 5px;

      .sui-navbar {
        overflow: visible;
        margin-bottom: 0;

        .filter {
          min-height: 40px;
          padding-right: 20px;
          background: #fbfbfb;
          border: 1px solid #e2e2e2;
          padding-left: 0;
          border-radius: 0;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);

          .sui-nav {
            position: relative;
            left: 0;
            display: block;
            float: left;
            margin: 0 10px 0 0;

            li {
              float: left;
              line-height: 18px;

              a {
                display: block;
                cursor: pointer;
                padding: 11px 15px;
                color: #777;
                text-decoration: none;
              }

              &.active {
                a {
                  background: #e1251b;
                  color: #fff;
                }
              }
            }
          }
        }
      }

      .goods-list {
        margin: 20px 0;

        ul {
          display: flex;
          flex-wrap: wrap;

          li {
            height: 100%;
            width: 20%;
            margin-top: 10px;
            line-height: 28px;

            .list-wrap {
              .p-img {
                padding-left: 15px;
                width: 215px;
                height: 255px;

                a {
                  color: #666;

                  img {
                    max-width: 100%;
                    height: auto;
                    vertical-align: middle;
                  }
                }
              }

              .price {
                padding-left: 15px;
                font-size: 18px;
                color: #c81623;

                strong {
                  font-weight: 700;

                  i {
                    margin-left: 2px;
                  }
                }
              }

              .attr {
                padding-left: 15px;
                width: 85%;
                overflow: hidden;
                margin-bottom: 8px;
                min-height: 38px;
                cursor: pointer;
                line-height: 1.8;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;

                a {
                  color: #333;
                  text-decoration: none;
                }
              }

              .commit {
                padding-left: 15px;
                height: 22px;
                font-size: 13px;
                color: #a7a7a7;

                span {
                  font-weight: 700;
                  color: #646fb0;
                }
              }

              .operate {
                padding: 12px 15px;

                .sui-btn {
                  display: inline-block;
                  padding: 2px 14px;
                  box-sizing: border-box;
                  margin-bottom: 0;
                  font-size: 12px;
                  line-height: 18px;
                  text-align: center;
                  vertical-align: middle;
                  cursor: pointer;
                  border-radius: 0;
                  background-color: transparent;
                  margin-right: 15px;
                }

                .btn-bordered {
                  min-width: 85px;
                  background-color: transparent;
                  border: 1px solid #8c8c8c;
                  color: #8c8c8c;

                  &:hover {
                    border: 1px solid #666;
                    color: #fff !important;
                    background-color: #666;
                    text-decoration: none;
                  }
                }

                .btn-danger {
                  border: 1px solid #e1251b;
                  color: #e1251b;

                  &:hover {
                    border: 1px solid #e1251b;
                    background-color: #e1251b;
                    color: white !important;
                    text-decoration: none;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>