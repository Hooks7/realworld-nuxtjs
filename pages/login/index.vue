<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign {{ isLogin ? "in" : "up" }}</h1>
          <p class="text-xs-center">
            <a href="">Have an account?</a>
          </p>

          <ul class="error-messages">
            <li v-for="(v, key) in errors" :key="v">{{ key }} &nbsp;{{ v }}</li>
          </ul>

          <form @submit.prevent="onsubmit">
            <fieldset class="form-group" v-if="!isLogin">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Your Name"
                v-model="user.username"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
                v-model="user.email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
                v-model="user.password"
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              Sign {{ isLogin ? "in" : "up" }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 仅在客户端加载 js-cookie 包
const Cookie = process.client ? require("js-cookie") : undefined;
import { login, registration } from "@/api/user";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      user: {
        username: "",
        email: "hooks7@163.com",
        password: "961001",
      },
      errors: "",
    };
  },

  computed: {
    isLogin() {
      return this.$route.name === "login";
    },
  },

 



  methods: {
    ...mapMutations(["setUser"]),
    //  表单提交
    async onsubmit() {
      try {
        if (this.isLogin) {
          let { user } = await login(this.$axios, { user: this.user });
          this.setUser(user);
          // 持久化存储 当前版本需手动转化成json字符串
          Cookie.set("user", JSON.stringify(user));
        } else {
          // 注册用户
          await registration(this.$axios, { user: this.user });
        }

        this.$router.push("/");
      } catch (error) {
        this.errors = error.response.data.errors;
      }
    },
  },
};
</script>

<style>
</style>