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
  <div class="relative bg-gray-50 min-h-screen p-12">
    <div class="max-w-4xl ml-10">
      <h1 class="text-5xl font-semibold">Latest Blog</h1>
      <div class="py-12">
        <div v-if="loading">Loading...</div>
        <div v-if="error" class="error">
          {{ error }}
        </div>
        <div>
          <div class="divide-y divide-dashed divide-gray-400">
            <div class="pt-4 mb-4" v-for="post in posts" :key="post._id">
              <router-link :to="`/kisah/${post.slug.current}`">
                <h2 class="text-xl font-semibold hover:text-cyan-800">
                  {{ post.title }}
                </h2>
              </router-link>
              <div class="text-sm text-gray-600">Author: {{ post.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
