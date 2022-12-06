<template>
  <div class="loginPage">
    <h1><strong>Olá visitante</strong></h1>
    <div class="card">
      <h2>Login</h2>
      <v-form v-model="form">
        <v-text-field
          variant="outlined"
          label="Email"
          placeholder="exemplo@exe.com"
          :rules="[teste]"
          type="email"
          color="#000"
        ></v-text-field>
        <v-text-field
          variant="outlined"
          :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
          label="Senha"
          clearable
          placeholder="**********"
          :type="showPassword ? 'text' : 'password'"
          color="#000"
          @click:append="toggleShowPass"
        >
        </v-text-field>
      </v-form>
      campo1 campo1
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: false,
      showPassword: false,
    };
  },
  methods: {
    teste(v) {
      console.log("v", v);
      return !!v || "é obrigatorio";
    },
    toggleShowPass() {
      this.showPassword = !this.showPassword;
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
    height: 500px;
    border-radius: 16px;
    border: 6px solid #000;
    padding: 16px;
  }
}
</style>
