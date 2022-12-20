<template>
  <formUserDataVue :edit-form="true" @form-data="editUser"></formUserDataVue>
</template>
<script>
import formUserDataVue from "@/@shared/form-user-data.vue";
import authService from "@/services/auth/auth.service";
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
    editUser(payload) {
      authService
        .postUserData(this.$localStorageGetItem(), payload)
        .then(() => {
          this.$router.push("/home");
          this.toast.success("Dados da conta editados com sucesso");
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
