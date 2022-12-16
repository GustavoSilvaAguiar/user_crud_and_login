<template>
  <div class="home">
    <v-breadcrumbs
      v-if="$route.meta.breadcrumbs"
      :items="$route.meta.breadcrumbs"
    >
      <template v-slot:divider>
        <v-icon size="20" color="#B6BEBE" icon="mdi-chevron-right"></v-icon>
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
