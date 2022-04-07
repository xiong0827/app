<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(images, index) in skuImageList"
        :key="images.spuImgId"
      >
        <img
          :src="images.imgUrl"
          :class="{ active: currentIndex == index }"
          @click="changeCuerrentIndex(index)"
        />
      </div>
    </div>
    <div class="swiper-button-next" @click="addCuerrentIndex"></div>
    <div class="swiper-button-prev" @click="inCuerrentIndex"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "ImageList",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: ["skuImageList"],
  computed: {
    ImageList() {
      return this.skuImageList || [];
    },
  },

  methods: {
    //修改数据的index添加active属性
    changeCuerrentIndex(index) {
      this.currentIndex = index;
    },
    addCuerrentIndex() {
      this.currentIndex += 1;
    },
    inCuerrentIndex() {
      this.currentIndex--;
    },
  },
  watch: {
    skuImageList: {
      deep: true,
      handler(value) {
        this.$nextTick(() => {
          var mySwiper = new Swiper(".swiper-container", {
            // 显示三张图片
            slidesPerView: 3,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
    currentIndex(newvalue, oldvalue) {
      this.$bus.$emit('getIndex',newvalue)
    },
  },
};
</script>

<style lang="less" scoped>
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;

  .swiper-slide {
    width: 56px;
    height: 56px;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }

      &:hover {
        border: 2px solid #f60;
        padding: 1px;
      }
    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;
    &::after {
      font-size: 12px;
    }
  }
}
</style>