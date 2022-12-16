<template>
  <formUserDataVue :edit-form="true" @form-data="editUser"></formUserDataVue>
</template>
<script>
import formUserDataVue from "@/@shared/form-user-data.vue";
import authService from "@/services/auth/auth.service";

export default {
  components: { formUserDataVue },
  data() {
    return {};
  },
  methods: {
    editUser(payload) {
      authService
        .postUserData(this.$localStorageGetItem(), payload)
        .then(() => {
          this.$router.push("/home");
        });
    },
  },
};
</script>
<style lang="scss" scoped></style>
