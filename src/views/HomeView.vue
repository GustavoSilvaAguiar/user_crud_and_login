<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <v-breadcrumbs :items="$route.meta.breadcrumbs">
      <template v-slot:divider>
        <v-icon size="20" color="#B6BEBE" icon="mdi-chevron-right"></v-icon>
      </template>
    </v-breadcrumbs>
    <div>
      <RouterView></RouterView>
    </div>
    <v-btn>teste</v-btn>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style lang="scss" scoped>
.home {
  background-color: #ffd23a;
  width: 100vw;
  height: 100vh;
}
</style>
