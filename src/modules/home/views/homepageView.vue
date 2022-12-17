<template>
  <div class="home">
    <h1>
      <strong>Olá {{ data.name }}</strong>
    </h1>
    <div class="card">
      <div class="card--subjects">
        <h3>Nome:</h3>
        {{ data.name }}
      </div>
      <div class="card--subjects">
        <h3>CPF:</h3>
        {{ data.cpf }}
      </div>
      <div class="card--subjects">
        <h3>PIS:</h3>
        {{ data.pis }}
      </div>
      <h3>Endereço</h3>
      <div class="card--address">
        <div>
          <h3>País:</h3>
          {{ data?.address?.country }}
        </div>
        <div>
          <h3>Estado:</h3>
          {{ data?.address?.state }}
        </div>
        <div>
          <h3>Município:</h3>
          {{ data?.address?.city }}
        </div>
        <div>
          <h3>CEP:</h3>
          {{ data?.address?.cep }}
        </div>
        <div>
          <h3>Rua:</h3>
          {{ data?.address?.street }}
        </div>
        <div>
          <h3>Número:</h3>
          {{ data?.address?.number }}
        </div>
        <div>
          <h3>Complemento:</h3>
          {{ data?.address?.complement }}
        </div>
      </div>
      <div class="card--btns">
        <v-btn @click="edit" class="card--btns--btn">
          <div class="card--btns--btn--content">
            <v-icon>mdi-pencil</v-icon>
            Editar
          </div>
        </v-btn>
        <v-btn color="error" @click="logout" class="card--btns--btn">
          <div class="card--btns--btn--content">
            <v-icon>mdi-logout</v-icon>
            Logout
          </div>
        </v-btn>
      </div>
    </div>
  </div>
</template>
<script>
import homepageService from "../services/homepage.service.js";
import authService from "@/services/auth/auth.service";

export default {
  data() {
    return {
      data: [],
    };
  },
  created() {
    this.getUserData();
  },
  methods: {
    async getUserData() {
      this.data = await homepageService.getUserData(
        this.$localStorageGetItem()
      );
    },

    logout() {
      authService
        .logout()
        .then(() => {
          this.$localStorageRemoveItem();
          this.$router.push("/login");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          this.toast.error(
            `Código do erro: ${errorCode}, mensagem: ${errorMessage}`
          );
        });
    },
    edit() {
      this.$router.push("/home/edit");
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
}
.card {
  background-color: #fff;
  width: 500px;
  border-radius: 16px;
  border: 6px solid #2c3e50;
  padding: 16px;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 20px;

  &--subjects {
    display: flex;
    align-items: center;
    column-gap: 5px;
  }

  &--address {
    display: flex;
    flex-wrap: wrap;
    column-gap: 50px;
    row-gap: 20px;
  }

  &--btns {
    display: flex;
    justify-content: center;
    column-gap: 20px;

    &--btn {
      width: 150px;

      &--content {
        display: flex;
        align-items: center;
        column-gap: 5px;
        justify-content: center;
      }
    }
  }
}
</style>
