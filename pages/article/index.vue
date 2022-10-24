<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{ article.title }}</h1>

        <UserHead
          :article="article"
          @refreshArticleInfo="refreshArticleInfo"
          @refreshAuthor="refreshAuthor"
        />
      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12">
          <div v-html="article.body" />
        </div>
      </div>

      <hr />

      <div class="article-actions">
        <UserHead
          :article="article"
          @refreshArticleInfo="refreshArticleInfo"
          @refreshAuthor="refreshAuthor"
        />
      </div>

      <Comments :article="article" />
    </div>
  </div>
</template>

<script>
import { getArticle } from "@/api/articles";
import { marked } from "marked";
import UserHead from "./components/UserHead.vue";
import Comments from "./components/Comments.vue";
export default {
  middleware: "authenticated",
  components: { UserHead, Comments },

  async asyncData({ route, $axios }) {
    const { slug } = route.params;
    const { article } = await getArticle($axios, slug);

    article.body = marked.parse(article.body);
    return { article };
  },

  methods: {
    refreshArticleInfo(article) {
      this.article = article;
    },

    refreshAuthor(profile) {
      this.article.author = profile;
    },
  },
};
</script>

<style>
</style>