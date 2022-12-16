import RegisterData from "./views/register-data.vue";

export default [
  {
    path: "/login",
    component: () => import("./views/authView.vue"),
  },
  {
    path: "/register",
    component: RegisterData,
    meta: {
      title: "Cadastro de dados de usuário",
    },
  },
];
