<template>
  <div class="loginPage">
    <h1><strong>Olá, visitante</strong></h1>
    <div class="card">
      <h2>Login</h2>
      <v-form ref="loginForm" class="form" v-model="form">
        <v-text-field
          variant="outlined"
          label="Email"
          v-model="email"
          placeholder="exemplo@exe.com"
          :rules="emailRules"
          type="email"
          color="#000"
        ></v-text-field>
        <v-text-field
          variant="outlined"
          :append-inner-icon="!showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          label="Senha"
          v-model="password"
          :rules="passwordRules"
          clearable
          placeholder="**********"
          :type="showPassword ? 'text' : 'password'"
          color="#000"
          @click:append-inner="toggleShowPass"
        >
        </v-text-field>
        <div class="form--btns">
          <CreateAccountDialog></CreateAccountDialog>
          <v-btn :disabled="!form" color="#ffd23a" @click="validar">
            <v-icon style="margin: 0px 10px 0px 0px">mdi-login</v-icon>
            Login
          </v-btn>
        </div>
      </v-form>
    </div>
  </div>
</template>
<script>
import authService from "../../../services/auth/auth.service";
import CreateAccountDialog from "../components/create-account-dialog.vue";
import { useToast } from "vue-toastification";

export default {
  components: {
    CreateAccountDialog,
  },
  setup() {
    const toast = useToast();

    return { toast };
  },
  data() {
    return {
      form: false,
      email: "",
      password: "",
      showPassword: false,
      emailRules: [
        (v) => !!v || "E-mail é obrigatório",
        (v) => /.+@.+\..+/.test(v) || "E-mail precisa ser valido",
      ],
      passwordRules: [
        (v) => !!v || "Senha é obrigatória",
        (v) =>
          (v && v.length >= 6) ||
          "A senha deve ser maior ou igual a 6 caracteres ",
      ],
    };
  },
  mounted() {
    if (this.$localStorageGetItem()) {
      this.$router.push("/home");
    }
  },
  methods: {
    toggleShowPass() {
      this.showPassword = !this.showPassword;
    },
    async validar() {
      const { valid } = await this.$refs.loginForm.validate();
      if (valid) {
        authService
          .getAuth(this.email, this.password)
          .then((userCredential) => {
            const user = userCredential.user;
            this.$localStorageSetItem(user.uid);
            this.$router.push("/home");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            this.toast.error(
              `Código do erro: ${errorCode}, mensagem: ${errorMessage}`
            );
          });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.loginPage {
  background-color: #ffd23a;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px;

  .card {
    background-color: #fff;
    width: 350px;
    border-radius: 16px;
    border: 6px solid #2c3e50;
    padding: 16px;
    display: flex;
    flex-direction: column;
    row-gap: 40px;

    .form {
      display: flex;
      flex-direction: column;
      row-gap: 16px;

      &--btns {
        display: flex;
        flex-direction: column;
        row-gap: 8px;
      }
    }
  }
}
</style>
