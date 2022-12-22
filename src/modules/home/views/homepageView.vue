<template>
  <div class="home">
    <h1>
      <strong v-if="!loading">Olá, {{ data.name }}</strong>
      <v-progress-circular
        v-if="loading"
        indeterminate
        size="50"
        width="7"
      ></v-progress-circular>
    </h1>
    <div class="card">
      <v-progress-circular
        v-if="loading"
        indeterminate
        size="50"
        width="7"
      ></v-progress-circular>
      <div v-if="!loading" class="card--subjects">
        <h3>Nome:</h3>
        {{ data.name }}
      </div>
      <div v-if="!loading" class="card--subjects">
        <h3>CPF:</h3>
        {{ data.cpf }}
      </div>
      <div v-if="!loading" class="card--subjects">
        <h3>PIS:</h3>
        {{ data.pis }}
      </div>
      <h3>Endereço</h3>
      <div v-if="!loading" class="card--address">
        <div class="card--address--content">
          <h3>País:</h3>
          {{ data?.address?.country }}
        </div>
        <div class="card--address--content">
          <h3>Estado:</h3>
          {{ data?.address?.state }}
        </div>
        <div class="card--address--content">
          <h3>Município:</h3>
          {{ data?.address?.city }}
        </div>
        <div class="card--address--content">
          <h3>CEP:</h3>
          {{ data?.address?.cep }}
        </div>
        <div class="card--address--content">
          <h3>Rua:</h3>
          {{ data?.address?.street }}
        </div>
        <div class="card--address--content">
          <h3>Número:</h3>
          {{ data?.address?.number }}
        </div>
        <div class="card--address--content">
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
      loading: true,
    };
  },
  created() {
    this.getUserData();
  },
  methods: {
    async getUserData() {
      await homepageService
        .getUserData(this.$localStorageGetItem())
        .then((response) => {
          this.data = response;
          this.loading = false;
        });
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
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  overflow: auto;
  width: 100%;
  height: 100%;
}
.card {
  background-color: #fff;
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
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    row-gap: 20px;

    &--content {
      width: 30%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
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
@media screen and (min-width: 768px) {
  .home {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
  }
  .card {
    background-color: #fff;
    max-width: 700px;
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
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      row-gap: 20px;

      &--content {
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
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
}
</style>
