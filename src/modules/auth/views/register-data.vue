<template>
  <formUserDataVue @form-data="registerData"></formUserDataVue>
</template>
<script>
import authService from "../../../services/auth/auth.service";
import formUserDataVue from "@/@shared/form-user-data.vue";
import { useToast } from "vue-toastification";

export default {
  components: { formUserDataVue },
  setup() {
    const toast = useToast();

    return { toast };
  },
  data() {
    return {};
  },
  methods: {
    registerData(formData) {
      authService
        .postUserData(this.$localStorageGetItem(), formData)
        .then(() => {
          this.$router.push("/home");
          this.toast.success("Dados da conta cadastrados com sucesso");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          this.toast.error(
            `Código do erro: ${errorCode}, mensagem: ${errorMessage}`
          );
        });
    },
  },
};
</script>
<style lang="scss" scoped></style>
