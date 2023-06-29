<script setup lang="ts">
import { computed, ref } from 'vue'
import { createClient } from 'microcms-js-sdk'
import type { GalleryResponse } from '@/types';
import Gallery from '@/models/gallery';
import {useRoute} from "vue-router";

interface Props {
  id: string
}

const props = defineProps<Props>()

const client = createClient({
  serviceDomain: import.meta.env.VITE_MICRO_CMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.VITE_MICRO_CMS_API_KEY,
});

const route = useRoute()
const contentId = route.params.id as string

const gallery = ref<Gallery>(Gallery.dummy())

client
  .get<GalleryResponse>({
    endpoint: 'galleries',
    contentId: props.id,
  })
  .then((res: GalleryResponse) => gallery.value = res)


const imageTitle = computed((): (url: string) => string => {
  return (url: string): string => {
    const imageFileName = url.substring(url.lastIndexOf('/') + 1)
    return decodeURI(imageFileName.substring(imageFileName.indexOf('.'), -1))
  }
})
</script>

<template>
  <main class="bg_wood_light md:pt-10">
    <section class="section">
      <div class="text-center text-2xl mb-16">
        <h1 class="section_title">ギャラリー</h1>
      </div>
      <div class="note_item">
        <img src="/images/tape_01.png" class="note_item_deco up" />
        <h2 class="text-center text-3xl font-bold pt-8 pb-4">
          <span class="marker-pink">{{ gallery.title }}</span>
        </h2>
        <p class="text-lg mt-8 mb-8">{{ gallery.description }}</p>
        <div>
          <template v-for="image in gallery.images">
            <img :src="image.url" alt="" class="mb-2" />
            <p class="text-lg text-center mb-8">{{ imageTitle(image.url) }}</p>
          </template>
        </div>
        <img src="/images/tape_01.png" class="note_item_deco down" />
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.note {
  z-index: -2;
  &_item {
    background-color: white;
    padding: 45px 30px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      transform: rotate(5deg);
      transform: rotate(0.5deg) translate(-30px, -45px);
      z-index: -1;
    }
    &_deco {
      position: absolute;
      width: 20%;
      transform: rotate(-15deg);
      filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, .5));
      &.all {
        width: 15%;
        &.up {
          left: -2%;
        }
        &.down {
          right: -2%;
        }
      }
      &.up {
        top: 0;
        left: -5%;
      }
      &.down {
        bottom: 0;
        right: -5%;
      }
    }
    &.pink {
      &::before {
        background-color: var(--primary-pink);
      }
    }
  }
}
</style>
