<template>
  <formUserDataVue @form-data="registerData"></formUserDataVue>
</template>
<script>
import authService from "../../../services/auth/auth.service";
import formUserDataVue from "@/@shared/form-user-data.vue";

export default {
  components: { formUserDataVue },
  data() {
    return {};
  },
  methods: {
    registerData(formData) {
      authService
        .postUserData(this.$localStorageGetItem(), formData)
        .then(() => {
          this.$router.push("/home");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(
            `Código do erro: ${errorCode}, mensagem: ${errorMessage}`
          );
          alert(`Código do erro: ${errorCode}, mensagem: ${errorMessage}`);
        });
    },
  },
};
</script>
<style lang="scss" scoped></style>
