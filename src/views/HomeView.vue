<script setup lang="ts">
import { Suspense } from "vue"
import SearchPage from "../components/SearchPage.vue"
</script>

<template>
  <Suspense>
    <SearchPage />
    <template #fallback> Loading... </template>
  </Suspense>
</template>
