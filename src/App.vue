<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="relative">
    <aside
      id="logo-sidebar"
      class="fixed right-12 top-32 z-40 w-72 transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div class="bg-white rounded-xl shadow-xl">
        <div class="px-8 py-8">
          <RouterLink to="/" class="hover:text-cyan-700">
            <h1 class="text-5xl font-bold">
              Kisah
              <p>Selayar</p>
            </h1>
          </RouterLink>
        </div>
        <div class="px-10">
          <ul class="divide-y py-8">
            <li class="mb-4">
              <RouterLink
                to="/kisah"
                class="text-xl text-gray-700 hover:text-cyan-700"
                >Kisah</RouterLink
              >
            </li>
            <li class="py-4">
              <RouterLink
                to="/tentang"
                class="text-xl text-gray-700 hover:text-cyan-700"
                >Tentang</RouterLink
              >
            </li>
            <li class="py-4">
              <RouterLink
                to="/arsip"
                class="text-xl text-gray-700 hover:text-cyan-700"
                >Arsip</RouterLink
              >
            </li>
          </ul>
        </div>
        <div class="px-8 mt-28 py-3">
          <span class="text-sm text-gray-400">Kisah Selayar © 2023</span>
        </div>
      </div>
    </aside>
    <div class="right-0">
      <RouterView />
    </div>
  </div>
</template>
