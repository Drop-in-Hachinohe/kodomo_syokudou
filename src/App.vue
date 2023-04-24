<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';

const navItems = [
  {
    id: 1,
    name: "子ども食堂とは",
    link: "#about",
  },
  {
    id: 2,
    name: "開催場所・時間",
    link: "#information",
  },
  {
    id: 3,
    name: "料金",
    link: "#price",
  },
  {
    id: 4,
    name: "お願い",
    link: "#wish",
  },
];
</script>

<template>
  <Header :navItems="navItems" />
  <RouterView />
</template>

