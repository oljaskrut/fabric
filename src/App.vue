<script setup lang="ts">
import { RouterView } from "vue-router"
import Header from "./components/Header.vue"
</script>

<template>
  <main class="min-h-screen bg-white font-sans antialiased">
    <div class="flex min-h-screen flex-col">
      <Header />
      <RouterView />
    </div>
  </main>
</template>
