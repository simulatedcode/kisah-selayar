<script>
import sanity from "../client";

const query = `*[_type == "post"]{
  _id,
  title,
"image": mainImage{
  asset->{
  _id,
  url
}
},
  "name":author->name,
  slug,
}[0...50]`;

export default {
  name: "HomeView",
  data() {
    return {
      loading: true,
      posts: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.error = this.post = null;
      this.loading = true;
      sanity.fetch(query).then(
        (posts) => {
          this.loading = false;
          this.posts = posts;
        },
        (error) => {
          this.error = error;
        }
      );
    },
  },
};
</script>

<template>
  <div>
    <h1 class="text-6xl font-semibold">Latest Blog</h1>
    <div class="py-12">
      <div v-if="loading">Loading...</div>
      <div v-if="error" class="error">
        {{ error }}
      </div>
      <div>
        <div class="flex space-x-8">
          <div
            v-for="post in posts"
            class="border border-gray-900 px-4 py-4 rounded-lg"
            :key="post._id"
          >
            <router-link :to="`/blog/${post.slug.current}`">
              <h2
                class="text-3xl font-semibold border-b border-b-gray-200 pb-2 hover:text-gray-600"
              >
                {{ post.title }}
              </h2>
            </router-link>
            <div class="mt-2 text-sm text-gray-600">
              Author: {{ post.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
