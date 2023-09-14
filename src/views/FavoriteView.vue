<script setup lang="ts">
import { inject, ref } from "vue"
import type { VueCookies } from "vue-cookies"
const $cookies = inject<VueCookies>("$cookies")

const images = ref($cookies?.get("favorites")?.split(",,"))

function reset() {
  $cookies?.remove("favorites")
  images.value = []
}
</script>

<template>
  <div class="bg-white px-2 sm:px-32">
    <h1 class="text-black text-xl font-bold center mt-4 mx-auto">Избранное</h1>
    <div
      class="mt-4 grid sm:grid-cols-3 sm:gap-3"
      ref="el"
      v-if="images?.length > 0"
    >
      <div v-for="image in images" :key="image.id">
        <router-link
          :to="'/image/' + image.split('::')[0]"
          class="flex flex-col md:space-y-2 relative h-full"
        >
          <img
            :src="image.split('::')[1]"
            class="rounded-sm object-cover aspect-square"
          />
        </router-link>
      </div>
    </div>

    <button @click="reset" class="text-black" v-if="images.length > 0"
      >Reset</button
    >
  </div>
</template>
