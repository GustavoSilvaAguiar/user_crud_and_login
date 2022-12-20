<template>
  <div class="register-data">
    <v-form ref="register-form" v-model="form">
      <h2>Dados pessoais</h2>
      <div class="form-personal-data">
        <v-text-field
          variant="solo"
          class="input-size"
          label="Nome*"
          :rules="[(v) => !!v || 'O campo Nome é obrigatório']"
          placeholder="Digite seu nome"
          bg-color="#E0E0E0"
          v-model.trim="formData.name"
          color="#000"
        ></v-text-field>
        <v-text-field
          variant="solo"
          class="input-size"
          label="CPF*"
          maxlength="11"
          :rules="[
            (v) => !!v || 'O campo CPF é obrigatório',
            (v) => TestaCPF(v) || 'CPF Invalido',
          ]"
          placeholder="Digite seu CPF"
          bg-color="#E0E0E0"
          v-model.trim="formData.cpf"
          color="#000"
        ></v-text-field>
        <v-text-field
          variant="solo"
          class="input-size"
          label="PIS*"
          :rules="[(v) => !!v || 'O campo PIS é obrigatório']"
          placeholder="Digite seu PIS"
          bg-color="#E0E0E0"
          v-model.trim="formData.pis"
          color="#000"
        ></v-text-field>
      </div>
      <v-divider color="#000"></v-divider>
      <h2>Endereço</h2>
      <div class="form-address-data">
        <v-text-field
          variant="solo"
          class="input-size"
          label="CEP*"
          :rules="[(v) => !!v || 'O campo CEP é obrigatório']"
          placeholder="Digite seu CEP"
          bg-color="#E0E0E0"
          v-model.trim="formData.address.cep"
          color="#000"
        ></v-text-field>
        <v-text-field
          variant="solo"
          class="input-size"
          label="País*"
          :rules="[(v) => !!v || 'O campo País é obrigatório']"
          placeholder="Digite o nome de seu país"
          bg-color="#E0E0E0"
          v-model.trim="formData.address.country"
          color="#000"
        ></v-text-field>
        <v-text-field
          variant="solo"
          class="input-size"
          label="Estado*"
          :rules="[(v) => !!v || 'O campo Estado é obrigatório']"
          placeholder="Digite o nome de seu estado"
          bg-color="#E0E0E0"
          v-model.trim="formData.address.state"
          color="#000"
        ></v-text-field>
        <v-text-field
          variant="solo"
          class="input-size"
          label="Cidade*"
          :rules="[(v) => !!v || 'O campo Cidade é obrigatório']"
          placeholder="Digite o nome de sua cidade"
          bg-color="#E0E0E0"
          v-model.trim="formData.address.city"
          color="#000"
        ></v-text-field>
        <v-text-field
          variant="solo"
          class="input-size"
          label="Rua*"
          :rules="[(v) => !!v || 'O campo Rua é obrigatório']"
          placeholder="Digite o nome de sua rua"
          bg-color="#E0E0E0"
          v-model.trim="formData.address.street"
          color="#000"
        ></v-text-field>
        <v-text-field
          variant="solo"
          class="input-size"
          label="N°"
          placeholder="Digite o número de sua rua"
          bg-color="#E0E0E0"
          v-model.trim="formData.address.number"
          color="#000"
        ></v-text-field>
        <v-text-field
          variant="solo"
          class="input-size"
          label="Complemento"
          placeholder="Digite o comlemento de sua rua"
          bg-color="#E0E0E0"
          v-model.trim="formData.address.complement"
          color="#000"
        ></v-text-field>
      </div>
      <div class="form--btns">
        <v-btn v-if="editForm" @click="goToHome">
          <v-icon style="margin: 0px 10px 0px 0px">mdi-cancel</v-icon>
          Cancelar
        </v-btn>
        <v-btn :disabled="!form" color="blue-grey" @click="sendData"
          ><v-icon style="margin: 0px 10px 0px 0px">{{
            editForm ? "mdi-pencil" : "mdi-account-plus"
          }}</v-icon
          >{{ editForm ? "Editar" : "Cadastrar" }}
        </v-btn>
        <ConfirmLoginDialog v-if="editForm"></ConfirmLoginDialog>
      </div>
    </v-form>
  </div>
</template>
<script>
import homepageService from "@/modules/home/services/homepage.service";
import ConfirmLoginDialog from "../modules/home/components/confirm-login-dialog.vue";

export default {
  emits: ["formData"],
  props: {
    editForm: Boolean,
  },
  components: { ConfirmLoginDialog },
  data() {
    return {
      form: false,
      formData: {
        name: "",
        cpf: "",
        pis: "",
        address: {
          cep: "",
          country: "",
          state: "",
          city: "",
          street: "",
          number: "",
          complement: "",
        },
      },
    };
  },
  mounted() {
    this.getDataForEdit();
  },
  methods: {
    async getDataForEdit() {
      if (this.$route.fullPath !== "/register") {
        this.formData = await homepageService.getUserData(
          this.$localStorageGetItem()
        );
      }
    },
    sendData() {
      this.$emit("formData", this.formData);
    },

    goToHome() {
      this.$router.push("/home");
    },

    TestaCPF(strCPF) {
      var Soma;
      var Resto;
      Soma = 0;
      if (strCPF == "00000000000") return false;

      for (let i = 1; i <= 9; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;

      if (Resto == 10 || Resto == 11) Resto = 0;
      if (Resto != parseInt(strCPF.substring(9, 10))) return false;

      Soma = 0;
      for (let i = 1; i <= 10; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;

      if (Resto == 10 || Resto == 11) Resto = 0;
      if (Resto != parseInt(strCPF.substring(10, 11))) return false;
      return true;
    },
  },
};
</script>
<style lang="scss" scoped>
@keyframes background {
  100% {
    background-size: 200% 200%;
  }
}
.register-data {
  width: 100vw;
  height: 100%;
  padding: 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  animation: background 20s infinite alternate linear;

  .form-personal-data {
    display: flex;
    padding-top: 16px;
    max-width: 100%;
    flex-wrap: wrap;
    column-gap: 30px;
  }
  .form-address-data {
    display: flex;
    padding-top: 16px;
    max-width: 100%;
    flex-wrap: wrap;
    column-gap: 30px;
  }
}
.input-size {
  width: 30%;
}
.form--btns {
  display: flex;
  justify-content: center;
  column-gap: 30px;
}
:deep .v-input {
  flex: none;
  border-radius: 20px;
}
</style>
