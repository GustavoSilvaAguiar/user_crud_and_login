import authService from "@/services/auth/auth.service";
import HomepageServices from "@/modules/home/services/homepage.service";

describe("Teste de CRUD de dados da conta", () => {
  const email = "teste@gmail.com";
  const password = "123456";
  const payload = {
    name: "teste",
    cpf: "teste",
    pis: "teste",
    address: {
      cep: "teste",
      country: "teste",
      state: "teste",
      city: "teste",
      street: "teste",
      number: "teste",
      complement: "teste",
    },
  };

  test("Criar/Editar dados", async () => {
    const user = await authService.getAuth(email, password);
    const data = await authService.postUserData(user.user.uid, payload);
    expect(data).toBeUndefined();
  });

  test("Deletar user data", async () => {
    const user = await authService.getAuth(email, password);
    const del = await HomepageServices.deleteUserData(user.user.uid);
    expect(del).toBeUndefined();
  });
});
