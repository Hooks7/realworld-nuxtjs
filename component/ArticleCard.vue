<!-- 文章卡片 -->
<template>
  <div class="article-preview">
    <div class="article-meta">
      <nuxt-link :to="'/profile/' + article.author.username"
        ><img :src="article.author.image"
      /></nuxt-link>
      <div class="info">
        <nuxt-link :to="'/profile/' + article.author.username" class="author">{{
          article.author.username
        }}</nuxt-link>
        <span class="date">{{ article.createdAt | date("MMM DD,YYYY") }}</span>
      </div>
      <button
        class="btn btn-outline-primary btn-sm pull-xs-right"
        :class="{ active: article.favorited }"
        :disabled="article.favoriteDisabled"
        @click="setFavorite(article)"
      >
        <i class="ion-heart"></i> {{ article.favoritesCount }}
      </button>
    </div>
    <nuxt-link
      :to="{
        name: 'article',
        params: {
          slug: article.slug,
        },
      }"
      class="preview-link"
    >
      <h1>{{ article.title }}</h1>
      <p>{{ article.description }}</p>
      <span>Read more...</span>
    </nuxt-link>
    <ul class="tag-list">
      <li
        class="tag-default tag-pill tag-outline"
        v-for="v in article.tagList"
        :key="v"
      >
        {{ v }}
      </li>
    </ul>
  </div>
</template>

<script>
import { favoriteArticle, unfavoriteFavorite } from "@/api/articles";
export default {
  props: ["item"],
  data() {
    return {
      article: {},
    };
  },
  created() {
    this.article = this.$_.cloneDeep(this.item);
  },
  methods: {
    // 点赞/取消点赞
    async setFavorite({ favorited, slug }) {
      this.$set(this.article, "favoriteDisabled", true);

      let { article } = !favorited
        ? await favoriteArticle(this.$axios, slug)
        : await unfavoriteFavorite(this.$axios, slug);
      this.article = article;
    },
  },
};
</script>

<style>
</style>