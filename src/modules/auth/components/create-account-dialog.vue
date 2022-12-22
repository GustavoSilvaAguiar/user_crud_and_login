<template>
  <v-dialog transition="dialog-bottom-transition" width="300px">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props"
        ><v-icon style="margin: 0px 10px 0px 0px">mdi-account-plus</v-icon
        >Cadastrar
      </v-btn>
    </template>
    <template v-slot:default="{ isActive }">
      <div class="card">
        <center><h2>Cadastrar usuário</h2></center>
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
            <v-btn @click="isActive.value = false">
              <v-icon style="margin: 0px 10px 0px 0px">mdi-cancel</v-icon>
              Cancelar
            </v-btn>
            <v-btn :disabled="!form" color="#ffd23a" @click="createNewUser"
              ><v-icon style="margin: 0px 10px 0px 0px">mdi-account-plus</v-icon
              >Cadastrar
            </v-btn>
          </div>
        </v-form>
      </div>
    </template>
  </v-dialog>
</template>
<script>
import authService from "../../../services/auth/auth.service";
import { useToast } from "vue-toastification";

export default {
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
  methods: {
    async createNewUser() {
      await authService
        .postNewUser(this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          this.$localStorageRemoveItem();
          this.$localStorageSetItem(user.uid);
          this.$router.push("/register");
          this.toast.success("Conta criada com sucesso");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          this.toast.error(
            `Código do erro: ${errorCode}, mensagem: ${errorMessage}`
          );
        });
    },

    toggleShowPass() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>
<style lang="scss" scoped>
:deep .v-overlay__content {
  align-items: center;
}
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
</style>
