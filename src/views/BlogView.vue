<template>
  <div class="relative bg-gray-50 p-12">
    <div class="max-w-4xl mr-10">
      <div class="loading" v-if="loading">Loading...</div>

      <div v-if="error" class="error">
        {{ error }}
      </div>

      <div v-if="post" class="content">
        <h1 class="text-3xl font-semibold flex justify-start py-4">
          {{ post.title }}
        </h1>
        <img
          v-if="post.image"
          :src="imageUrlFor(post.image).width(1020)"
          class="mx-auto"
        />

        <h6 class="text-sm text-gray-600 mt-4 mb-4">Author: {{ post.name }}</h6>
        <SanityBlocks :blocks="blocks" class="max-w-4xl mt-6 text-justif" />
      </div>
    </div>
  </div>
  <div class="p-7 max-w-full bg-zinc-200">
    <div><RouterLink to="/kisah" class="px-6 top-0">Back</RouterLink></div>
  </div>
</template>

<script>
import { SanityBlocks } from "sanity-blocks-vue-component";
import sanity from "../client";
import imageUrlBuilder from "@sanity/image-url";

const imageBuilder = imageUrlBuilder(sanity);

const query = `*[slug.current == $slug] {
  _id,
  title,
  slug,
  body, 
 "image": mainImage{
  asset->{
  _id,
  url
}
},
"name":author->name,
"authorImage":author->image
}[0]
`;

export default {
  name: "BlogView",
  components: { SanityBlocks },
  data() {
    return {
      loading: true,
      post: [],
      blocks: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    imageUrlFor(source) {
      return imageBuilder.image(source);
    },
    fetchData() {
      this.error = this.post = null;
      this.loading = true;

      sanity.fetch(query, { slug: this.$route.params.slug }).then(
        (post) => {
          this.loading = false;
          this.post = post;
          this.blocks = post.body;
        },
        (error) => {
          this.error = error;
        }
      );
    },
  },
};
</script>
