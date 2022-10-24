<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <nuxt-link
                  v-if="user"
                  :to="{
                    name: 'home',
                    query: {
                      type: 'feed',
                    },
                  }"
                  exact
                  class="nav-link"
                  :class="{
                    disabled: !user,
                    active: type === 'feed',
                  }"
                  >Your Feed</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link
                  :to="{
                    name: 'home',
                    query: {
                      type: 'global',
                    },
                  }"
                  exact
                  class="nav-link"
                  :class="{
                    active: type === 'global',
                  }"
                  >Global Feed</nuxt-link
                >
              </li>
              <li class="nav-item" v-if="tag">
                <nuxt-link
                  :to="{
                    name: 'home',
                    query: {
                      type: 'global',
                    },
                  }"
                  class="nav-link active"
                  >#{{ tag }}</nuxt-link
                >
              </li>
            </ul>
          </div>
          <ArticleCard v-for="item in articles" :key="item.slug" :item="item" />
          <nav>
            <ul class="pagination">
              <!-- ngRepeat: pageNumber in $ctrl.pageRange($ctrl.totalPages) -->
              <li
                class="page-item ng-scope"
                v-for="item in pageCount"
                :key="item"
                :class="{
                  active: item == currentPage,
                }"
              >
                <nuxt-link
                  :to="{
                    name: 'home',
                    query: {
                      offset: item,
                      type,
                      tag,
                    },
                  }"
                  class="page-link ng-binding"
                  href=""
                  >{{ item }}</nuxt-link
                >
              </li>
              <!-- end ngRepeat: pageNumber in $ctrl.pageRange($ctrl.totalPages) -->
            </ul>
          </nav>
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <nuxt-link
                :to="{
                  name: 'home',
                  query: {
                    tag: item,
                  },
                }"
                class="tag-pill tag-default"
                v-for="item in tags"
                :key="item"
                >{{ item }}</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NP from "number-precision";
import ArticleCard from "@/component/ArticleCard";
import { getArticles, getTags } from "@/api/articles";
import { mapState } from "vuex";
export default {
  name: "home",
  // 监听query参数重新调用asyncData渲然
  watchQuery: ["offset", "tag", "type"],
  // scrollToTop 属性用于控制页面渲染前是否滚动至页面顶部
  scrollToTop: true,

  components: { ArticleCard },

  // 初始化列表/tag数据
  async asyncData({ route, store, $axios }) {
    const pageSize = 20;
    let { offset, tag, type } = route.query;
    offset = offset || 1;

    if (!tag && !type) {
      type = store.state.user ? "feed" : "global";
    }

    let res = await Promise.all([
      getTags($axios),
      getArticles(
        $axios,
        {
          offset: offset - 1,
          limit: pageSize,
          tag,
        },
        type
      ),
    ]);

    return {
      tags: res[0].tags.slice(0, 100),
      articles: res[1].articles,
      articlesCount: res[1].articlesCount,
      pageCount: NP.round(NP.divide(res[1].articlesCount, pageSize), 0),
      currentPage: offset,
      type,
      tag,
    };
  },

  computed: {
    ...mapState(["user"]),
  },
};
</script>

<style>
</style>