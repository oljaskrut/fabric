<script setup lang="ts">
import { Suspense } from "vue"
import Image from "../components/Image.vue"
</script>

<template>
  <Suspense>
    <Image />
    <template #fallback> Loading... </template>
  </Suspense>
</template>
