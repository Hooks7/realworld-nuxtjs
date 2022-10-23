<template>
  <div>
    <nav class="navbar navbar-light">
      <div class="container">
        <nuxt-link class="navbar-brand" to="/">conduit</nuxt-link>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <nuxt-link class="nav-link" to="/" exact>Home</nuxt-link>
          </li>
          <li class="nav-item" v-if="user">
            <nuxt-link class="nav-link" to="/createArticle">
              <i class="ion-compose"></i>&nbsp;New Article
            </nuxt-link>
          </li>
          <li class="nav-item" v-if="user">
            <nuxt-link class="nav-link" to="/settings">
              <i class="ion-gear-a"></i>&nbsp;Settings
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/login" v-if="!user"
              >Sign in</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/register" v-if="!user"
              >Sign up</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link
              :to="{
                name: 'profile',
                params: { username: user.username },
              }"
              class="nav-link ng-binding"
              v-if="user"
            >
              <img class="user-pic" :src="user.image" />
              {{ user.username }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>

    <nuxt-child />
    <footer>
      <div class="container">
        <nuxt-link to="/" class="logo-font">conduit</nuxt-link>
        <span class="attribution">
          An interactive learning project from
          <a href="https://thinkster.io">Thinkster</a>. Code &amp; design
          licensed under MIT.
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "layout",

  computed: {
    ...mapState(["user"]),
  },
};
</script>

<style>
</style>