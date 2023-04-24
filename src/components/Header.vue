<script setup lang="ts">
import { ref } from 'vue';
defineProps<{
  navItems: { id: number; name: string; link: string; }[]
}>()
const windowWidth = ref(0);
const scrollY = ref(0);
const spMenuShow = ref(false);
const setScrollY = () => {
  scrollY.value = window.scrollY;
}
const setWidth = () => {
  windowWidth.value = window.innerWidth;;
}
const closeSpMenu = () => {
  spMenuShow.value = false;
}
const openSpMenu = () => {
  spMenuShow.value = true;
}
window.addEventListener('scroll', setScrollY);
window.addEventListener('load', setWidth);
window.addEventListener('resize', setWidth);
</script>

<template>
  <nav v-if="scrollY > 100" class="navigation navigation_pc">
    <ul class="navigation_inner">
      <a v-for="item in navItems" :key="item.id" :href="item.link" class="navigation_item">
        <li class="font-bold">{{ item.name }}</li>
      </a>
    </ul>
  </nav>
 
  <img @click="openSpMenu" src="/images/menu.png" class="navigation_sp_img" />
  <nav v-if="spMenuShow" class="navigation navigation_sp">
    <ul>
      <a v-for="item in navItems"
        :key="item.id"
        :href="item.link"
        class="navigation_sp_item"
        @click.native="closeSpMenu">
        <li class="font-bold">{{ item.name }}</li>
      </a>
    </ul>
    <div @click="closeSpMenu"
      class="navigation_sp_close font-bold">
      閉じる
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navigation_pc {
  display: none;
  height: 60px;
  @media (min-width: 640px) {
    display: block;
  }
}
.navigation {
  position: fixed;
  width: 100%;
  z-index: 10;
  background: url('/images/bg_wood_dark.jpg') 200px repeat;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, .2);
  &_inner {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
  &_item {
    &:not(:last-child) {
      border-right: solid 1px white;
    }
  }
}
.navigation_sp {
  &_img {
    display: block;
    position: fixed;
    right: 0;
    width: 100px;
    z-index: 9;
    filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, .2));
    @media (min-width: 640px) {
      display: none;
    }
  }
  &_item {
    color:white;
    text-align: center;
    padding: 15px 0 ;
    display: block;
    &:not(:last-child) {
      border-bottom: solid 1px white;
    }
  }
  &_close {
    background-color: white;
    width: 80%;
    margin: 20px auto;
    border-radius: 10px;
    text-align: center;
    padding: 10px;
  }
}
</style>
