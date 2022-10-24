<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="profile.image" class="user-img" />
            <h4>{{ profile.username }}</h4>
            <p class="ng-binding">{{ profile.bio }}</p>
            <button
              class="btn btn-sm btn-outline-secondary action-btn"
              v-if="user.username !== profile.username"
              @click="setFollow(profile)"
              :class="{ active: profile.following }"
              :disabled="profile.followDisabled"
            >
              <i class="ion-plus-round"></i>
              &nbsp; {{ profile.following ? "Unfollow" : "Follow" }}
              {{ profile.username }}
            </button>

            <nuxt-link to="/settings" v-else>
              <button class="btn btn-sm btn-outline-secondary action-btn">
                <i class="ion-gear-a"></i>
                &nbsp; Edit Profile Settings
              </button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <nuxt-link
                  exact
                  :to="{
                    name: 'profile',
                    query: {
                      type: 'author',
                    },
                  }"
                  class="nav-link"
                  :class="{
                    active: $route.query.type !== 'favorite',
                  }"
                  >My Articles</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link
                  exact
                  :to="{
                    name: 'profile',
                    query: {
                      type: 'favorite',
                    },
                  }"
                  class="nav-link"
                  :class="{
                    active: $route.query.type === 'favorite',
                  }"
                  >Favorited Articles</nuxt-link
                >
              </li>
            </ul>
          </div>
          <ArticleCard v-for="item in articles" :key="item.slug" :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProfile, followUser, unFollowUser } from "@/api/user";
import { getArticles } from "@/api/articles";
import { mapState } from "vuex";
import ArticleCard from "@/component/ArticleCard";
export default {
  name: "profile",
  middleware: "authenticated",
  watchQuery: ["username", "type"],
  components: { ArticleCard },
  async asyncData({ route, $axios }) {
    let { username } = route.params;
    let { type } = route.query;

    // 用户信息
    const { profile } = await getProfile($axios, username);
    // 用户发布的文章/用户点赞的文章
    const { articles } = await getArticles($axios, {
      limit: 5,
      offset: 0,
      author: type !== "favorite" ? username : "",
      favorited: type === "favorite" ? username : "",
    });

    return {
      profile,
      articles,
    };
  },

  computed: {
    ...mapState(["user"]),
  },

  methods: {
    // 订阅/取消订阅
    async setFollow({ following, username }) {
      this.$set(this.profile, "followDisabled", true);
      let { profile } = !following
        ? await followUser(this.$axios, username)
        : await unFollowUser(this.$axios, username);
      this.profile = profile;
    },
  },
};
</script>

<style>
</style>