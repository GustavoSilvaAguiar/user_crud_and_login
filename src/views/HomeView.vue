<template>
  <div class="home">
    <v-breadcrumbs
      v-if="$route.meta.breadcrumbs"
      :items="$route.meta.breadcrumbs"
      bg-color="#2C3E50"
      color="#ffd23a"
    >
      <template v-slot:divider>
        <v-icon size="30" color="#000" icon="mdi-chevron-right"></v-icon>
      </template>
    </v-breadcrumbs>
    <div class="router">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style lang="scss" scoped>
@keyframes background {
  100% {
    background-size: 200% 200%;
  }
}
.home {
  background-color: #ffd23a;
  background-image: url("../assets/Wave.svg");
  background-size: 100% 100%;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  animation: background 20s infinite alternate linear;
}
.router {
  flex: 1;
}
</style>
