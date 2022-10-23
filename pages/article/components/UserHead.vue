<template>
  <div class="article-meta">
    <nuxt-link
      :to="{
        name: 'profile',
        params: { username: articleInfo.author.username },
      }"
      ><img :src="articleInfo.author.image"
    /></nuxt-link>
    <div class="info">
      <a href="" class="author">{{ articleInfo.author.username }}</a>
      <span class="date">{{ articleInfo.createdAt | date("MMM DD,YYYY") }}</span>
    </div>

    <template v-if="articleInfo.author.username === user.username">
      <nuxt-link :to="'/editArticle/' + articleInfo.slug">
        <button class="btn btn-sm btn-outline-secondary">
          <i class="ion-edit"></i>
          &nbsp; Edit Article
        </button>
      </nuxt-link>
      &nbsp;&nbsp;
      <button
        class="btn btn-sm btn-outline-danger"
        @click="deleteArticle(articleInfo.slug)"
      >
        <i class="ion-trash-a"></i>
        &nbsp; Delete Article
      </button>
    </template>

    <template v-else>
      <button
        class="btn btn-sm btn-outline-secondary"
        :class="{ active: articleInfo.author.following }"
        @click="setFollow(articleInfo.author)"
        :disabled="articleInfo.author.followDisabled"
      >
        <i class="ion-plus-round"></i>
        &nbsp;
        {{ articleInfo.author.following ? "Unfollow" : "Follow" }}
        {{ articleInfo.author.username }}
      </button>
      &nbsp;&nbsp;
      <button
        class="btn btn-sm btn-outline-primary"
        :class="{
          active: articleInfo.favorited,
        }"
        :disabled="articleInfo.favoriteDisabled"
        @click="setFavorite(articleInfo)"
      >
        <i class="ion-heart"></i>
        &nbsp; {{ articleInfo.favorited ? "Unfavorite" : "Favorite" }} Post
        <span class="counter">({{ articleInfo.favoritesCount }})</span>
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
    return {
      articleInfo: {},
    };
  },

  computed: {
    ...mapState(["user"]),
  },

  created() {
    this.articleInfo = this.$_.cloneDeep(this.article);
  },

  methods: {
    async deleteArticle(slug) {
      await deleteArticle(this.$axios, slug);
      this.$router.push("/");
    },

    // 点赞/取消点赞
    async setFavorite({ favorited, slug }) {
      this.$set(this.articleInfo, "favoriteDisabled", true);

      let { article } = !favorited
        ? await favoriteArticle(this.$axios, slug)
        : await unfavoriteFavorite(this.$axios, slug);
      this.articleInfo = article;
    },

    // 订阅/取消订阅
    async setFollow({ following, username }) {
      this.$set(this.articleInfo.author, "followDisabled", true);
      let { profile } = !following
        ? await followUser(this.$axios, username)
        : await unFollowUser(this.$axios, username);
      this.articleInfo.author = profile;
    },
  },
};
</script>

<style>
</style>