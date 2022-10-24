<template>
  <div class="row">
    <div class="col-xs-12 col-md-8 offset-md-2">
      <form class="card comment-form" @submit.prevent="onsubmit">
        <div class="card-block">
          <textarea
            class="form-control"
            placeholder="Write a comment..."
            rows="3"
            v-model="comment.body"
          ></textarea>
        </div>
        <div class="card-footer">
          <img
            src="http://i.imgur.com/Qr71crq.jpg"
            class="comment-author-img"
          />
          <button class="btn btn-sm btn-primary">Post Comment</button>
        </div>
      </form>

      <div class="card" v-for="item in comments" :key="item.slug">
        <div class="card-block">
          <p class="card-text">
            {{ item.body }}
          </p>
        </div>
        <div class="card-footer">
          <nuxt-link
            :to="{
              name: 'profile',
              params: { username: item.author.username },
            }"
            href=""
            class="comment-author"
          >
            <img :src="item.author.image" class="comment-author-img" />
          </nuxt-link>
          &nbsp;
          <nuxt-link
            :to="{
              name: 'profile',
              params: { username: item.author.username },
            }"
            class="comment-author"
            >{{ item.author.username }}</nuxt-link
          >
          <span class="date-posted">{{
            item.createdAt | date("MMM DD,YYYY")
          }}</span>

          <span
            class="mod-options"
            v-if="item.author.username === user.username"
          >
            <i class="ion-trash-a" @click="deleteComments(item.id)"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { addComments, getComments, deleteComments } from "@/api/articles";
import { mapState } from "vuex";
export default {
  props: ["article"],
  computed: {
    ...mapState(["user"]),
  },
  data() {
    return {
      comment: {
        body: "",
      },
      comments: [],
    };
  },

  created() {
    this.getComments();
  },
  methods: {
    async deleteComments(id) {
      await deleteComments(this.$axios, this.article.slug, id);
      this.getComments();
    },

    async onsubmit() {
      let res = await addComments(this.$axios, this.article.slug, {
        comment: this.comment,
      });
      this.comment.body = "";
      this.getComments();
    },

    async getComments() {
      let { comments } = await getComments(this.$axios, this.article.slug);
      this.comments = comments;
    },
  },
};
</script>

<style>
</style>