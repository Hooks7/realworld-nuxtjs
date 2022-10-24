<template>
  <div class="article-meta">
    <nuxt-link
      :to="{
        name: 'profile',
        params: { username: article.author.username },
      }"
      ><img :src="article.author.image"
    /></nuxt-link>
    <div class="info">
      <a href="" class="author">{{ article.author.username }}</a>
      <span class="date">{{ article.createdAt | date("MMM DD,YYYY") }}</span>
    </div>

    <template v-if="article.author.username === user.username">
      <nuxt-link :to="'/editArticle/' + article.slug">
        <button class="btn btn-sm btn-outline-secondary">
          <i class="ion-edit"></i>
          &nbsp; Edit Article
        </button>
      </nuxt-link>
      &nbsp;&nbsp;
      <button
        class="btn btn-sm btn-outline-danger"
        @click="deleteArticle(article.slug)"
      >
        <i class="ion-trash-a"></i>
        &nbsp; Delete Article
      </button>
    </template>

    <template v-else>
      <button
        class="btn btn-sm btn-outline-secondary"
        :class="{ active: article.author.following }"
        @click="setFollow(article.author)"
        :disabled="article.author.followDisabled"
      >
        <i class="ion-plus-round"></i>
        &nbsp;
        {{ article.author.following ? "Unfollow" : "Follow" }}
        {{ article.author.username }}
      </button>
      &nbsp;&nbsp;
      <button
        class="btn btn-sm btn-outline-primary"
        :class="{
          active: article.favorited,
        }"
        :disabled="article.favoriteDisabled"
        @click="setFavorite(article)"
      >
        <i class="ion-heart"></i>
        &nbsp; {{ article.favorited ? "Unfavorite" : "Favorite" }} Post
        <span class="counter">({{ article.favoritesCount }})</span>
      </button>
    </template>
  </div>
</template>

<script>
import {
  favoriteArticle,
  unfavoriteFavorite,
  deleteArticle,
} from "@/api/articles";
import { followUser, unFollowUser } from "@/api/user";
import { mapState } from "vuex";
export default {
  props: ["article"],

  data() {
    return {};
  },

  computed: {
    ...mapState(["user"]),
  },

  created() {},

  methods: {
    async deleteArticle(slug) {
      await deleteArticle(this.$axios, slug);
      this.$router.push("/");
    },

    // 点赞/取消点赞
    async setFavorite({ favorited, slug }) {
      this.$set(this.article, "favoriteDisabled", true);

      let { article } = !favorited
        ? await favoriteArticle(this.$axios, slug)
        : await unfavoriteFavorite(this.$axios, slug);

      this.$emit("refreshArticleInfo", article);
    },

    // 订阅/取消订阅
    async setFollow({ following, username }) {
      this.$set(this.article.author, "followDisabled", true);
      let { profile } = !following
        ? await followUser(this.$axios, username)
        : await unFollowUser(this.$axios, username);
      this.$emit("refreshAuthor", profile);
    },
  },
};
</script>

<style>
</style>