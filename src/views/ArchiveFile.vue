<script setup>
import IconPdf from "~icons/carbon/document-pdf";
</script>

<template>
  <div class="relative bg-gray-50 min-h-screen p-12">
    <div class="max-w-4xl ml-10">
      <div class="pb-4">
        <h1 class="text-5xl font-semibold">Dokumen Arsip</h1>
      </div>
      <div class="mt-12">
        <div>
          <ul class="divide-y divide-dashed divide-gray-400">
            <li class="pt-2 mb-4">
              <div class="flex justify-between space-x-4">
                <IconPdf class="text-red-600" />
                <span class="flex-1"> Cerita 2 - Rihatayya</span>
                <div
                  class="inline-flex cursor-pointer text-cyan-500 hover:text-cyan-800"
                >
                  Download
                </div>
              </div>
            </li>
            <li class="pt-4">
              <div class="flex justify-between space-x-4">
                <IconPdf class="text-red-600" />
                <span class="flex-1">Cerita 1 - Tanrung Palopa</span>
                <div
                  class="inline-flex cursor-pointer text-cyan-500 hover:text-cyan-800"
                >
                  Download
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
