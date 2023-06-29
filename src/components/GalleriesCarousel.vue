<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import type Gallery from "@/models/gallery"

interface Props {
  galleries: Array<Gallery>
}

defineProps<Props>()

// スマホ設定
const settings = {
  itemsToShow: 1, // スマホは1個だけ表示
}
// PC設定
const breakpoints = {
  // 640px and up
  640: {
    itemsToShow: 2.5, // PCは前後に半分ずつ表示
  }
}
</script>

<template>
  <Carousel :settings="settings">
    <Slide v-for="(gallery, index) in galleries" :key="`gallery-${index}`">
      <router-link :to="`/galleries/${gallery.id}`" class="relative z-1">
        <img :src="gallery.thumbnail.url" />
        <div class="title absolute bottom-0 py-4">
          <p class="font-bold">{{ gallery.title }}</p>
        </div>
      </router-link>
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<!-- vue3-carousel のスタイル修正用 -->
<style lang="scss">
:root {
  --vc-pgn-width: 8px;
  --vc-pgn-height: 8px;
  --vc-pgn-border-radius: 9999px;

  .carousel__slide--prev,
  .carousel__slide--next {
    opacity: 0.7;
    transform: scale(0.9);
  }
}
</style>

<style lang="scss" scoped>
.title {
  display: block;
  width: 100%;
  color: white;
  text-align: center;
  background-color: rgba($color: #000000, $alpha: .5);
}
</style>
