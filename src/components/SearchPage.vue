<script setup lang="ts">
import { getRandom } from "@/utils/getPhotos"
import { searchPhotos } from "@/utils/searchPhotos"

let images = ref(await getRandom(10))

import { reactive, ref } from "vue"
let input = ref("")

async function handle() {
  console.log("searching")
  images.value = reactive(await searchPhotos(input.value))
  console.log("done")
  // console.log(images.list()[0].urls.regular)
}
</script>

<template>
  <div class="relative border flex flex-col justify-center items-center">
    <img
      :src="images[0].urls.regular"
      alt=""
      class="relative w-full h-48 object-cover"
    />
    <div class="flex absolute bottom-8 w-full">
      <div class="relative w-5/6 sm:w-1/2 mx-auto">
        <div class="absolute inset-y-0 top-1/3 right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4"
            viewBox="0 0 23 23"
            fill="none"
          >
            <path
              d="M22.8596 22.1821L15.8614 15.1838C17.315 13.5699 18.2084 11.442 18.2084 9.10414C18.2083 4.08416 14.1242 0 9.10418 0C4.08416 0 0 4.08416 0 9.10418C0 14.1242 4.08416 18.2084 9.10418 18.2084C11.442 18.2084 13.5699 17.315 15.1839 15.8614L22.1821 22.8596C22.2756 22.9532 22.3983 23 22.5209 23C22.6435 23 22.766 22.9532 22.8597 22.8596C23.0468 22.6724 23.0468 22.3692 22.8596 22.1821ZM9.10418 17.25C4.61294 17.25 0.958363 13.5959 0.958363 9.10418C0.958363 4.61249 4.61294 0.958318 9.10418 0.958318C13.5954 0.958318 17.25 4.61244 17.25 9.10418C17.25 13.5959 13.5954 17.25 9.10418 17.25Z"
              fill="black"
            />
          </svg>
        </div>
        <input
          v-model="input"
          type="text"
          class="h-12 py-1 px-6 text-black w-full placeholder:text-black"
          placeholder="Поиск"
          @change="handle"
        />
      </div>
    </div>
  </div>
  <div class="hidden sm:block bg-gray-500 h-2"></div>

  <div class="bg-white px-2 sm:px-32">
    <div class="mt-4 grid sm:grid-cols-3 sm:gap-3" ref="el">
      <div v-for="image in images.slice(1)" :key="image.id">
        <router-link
          :to="'/image/' + image.id"
          class="flex flex-col md:space-y-2 relative h-full"
        >
          <img
            :src="image.urls.regular"
            class="rounded-sm object-cover aspect-square"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>
