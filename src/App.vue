<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="max-w-full mx-auto">
    <div class="flex justify-between items-center space-x-32 p-8">
      <div class="flex">
        <div class="bg-gray-900 rounded-full px-6 py-4">
          <span class="text-3xl font-semibold text-white">
            <RouterLink to="/" class="hover:text-gray-200"
              >Kisah Selayar</RouterLink
            >
          </span>
        </div>
      </div>
      <nav class="flex space-x-6">
        <RouterLink to="/" class="text-3xl hover:text-gray-600 hover:underline"
          >Blog</RouterLink
        >
        <RouterLink
          to="/about"
          class="text-3xl hover:text-gray-600 hover:underline">
          About
        </RouterLink>
      </nav>
    </div>
  </header>
  <div class="max-w-full mx-auto py-12 px-8">
    <RouterView />
  </div>
</template>
