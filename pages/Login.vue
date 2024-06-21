<template>
  <form @submit.prevent="login">
    <label>Username:</label>
    <input type="text" v-model="username" />
    <label>Password:</label>
    <input type="password" v-model="password" />
    <button type="submit">Login</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await this.$axios.post("/login", {
          username: this.username,
          password: this.password,
        });

        const token = response.data.token;

        localStorage.setItem("token", token);

        this.$router.push("/");
      } catch (error) {
        console.error("Error logging in:", error);
      }
    },
  },
};
</script>

<style>
</style>
