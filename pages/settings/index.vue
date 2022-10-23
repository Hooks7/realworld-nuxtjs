<template>
  <div>
    <div class="settings-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">Your Settings</h1>

            <form @submit.prevent="onsubmit">
              <fieldset>
                <fieldset class="form-group">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="URL of profile picture"
                    v-model="user.image"
                  />
                </fieldset>
                <fieldset class="form-group">
                  <input
                    class="form-control form-control-lg"
                    type="text"
                    placeholder="Your Name"
                    v-model="user.username"
                  />
                </fieldset>
                <fieldset class="form-group">
                  <textarea
                    class="form-control form-control-lg"
                    rows="8"
                    placeholder="Short bio about you"
                    v-model="user.bio"
                  ></textarea>
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
                  Update Settings
                </button>
              </fieldset>
            </form>

            <hr />

            <button class="btn btn-outline-danger" @click="logout()">
              Or click here to logout.
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCurrentUser, updateCurrentUser } from "@/api/user";
import { mapMutations } from "vuex";
// 仅在客户端加载 js-cookie 包
const Cookie =  require("js-cookie") 
export default {
  middleware: "authenticated",
  data() {
    return {
      user: {
        username: "",
        email: "",
        image: "",
        bio: "",
        password: "",
      },
    };
  },
  created() {
    this.gtCurrentUser();
  },

  methods: {
    ...mapMutations(["setUser"]),

    async gtCurrentUser() {
      let { user } = await getCurrentUser(this.$axios);
      this.user = user;
    },

    async onsubmit() {
      try {
        const { user } = await updateCurrentUser(this.$axios,{ user: this.user });
        this.setUser(user);

        this.$router.push("/profile/" + user.username);
      } catch (error) {
        console.dir(error);
      }
    },

    logout() {
      this.setUser(null);
      Cookie.remove("user");
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>