<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form @submit.prevent="onsubmit">
            <fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                  v-model="article.title"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                  v-model="article.description"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control"
                  rows="8"
                  v-model="article.body"
                  placeholder="Write your article (in markdown)"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                  v-model="tag"
                  @keyup.enter.prevent="addTag"
                />
                <div class="tag-list">
                  <span
                    class="tag-default tag-pill ng-binding ng-scope"
                    v-for="(item, i) in article.tagList"
                    :key="item"
                    @click="removeTag(i)"
                  >
                    <i class="ion-close-round"></i>
                    {{ item }}</span
                  >
                </div>
              </fieldset>
              <button class="btn btn-lg pull-xs-right btn-primary">
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createArticle, getArticle, updateArticle } from "@/api/articles";
export default {
  data() {
    return {
      article: {
        title: "",
        description: "",
        body: "",
        tagList: [],
      },
      tag: "",

      
    };
  },

  mounted() {
    this.$route.params.slug && this.gtArticle();
  },

  methods: {
    async gtArticle() {
      let { article } = await getArticle(this.$axios, this.$route.params.slug);
      this.article = article;
    },

    async onsubmit() {
      let res;
      if (!this.$route.params.slug) {
        res = await createArticle(this.$axios, {
          article: this.article,
        });
      } else {
        res = await updateArticle(this.$axios, this.$route.params.slug, {
          article: this.article,
        });
      }

      this.$router.push({
        name: "article",
        params: { slug: res.article.slug },
      });
    },

    addTag() {
      if (this.article.tagList.includes(this.tag)) return;
      this.article.tagList.push(this.tag);
      this.tag = "";
    },

    removeTag(index) {
      this.article.tagList.splice(index, 1);
    },
  },
};
</script>

<style>
</style>