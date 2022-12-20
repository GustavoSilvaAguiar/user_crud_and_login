import authService from "@/services/auth/auth.service";

describe("Teste de autenticação em firebase", () => {
  const email = "teste@gmail.com";
  const emailCreateDelete = "testeCreateDelete@gmail.com";
  const password = "123456";
  test("login", async () => {
    const user = await authService.getAuth(email, password);
    expect(user.user.uid).toBe("sjjaWDySM8bMpWdya9G3QbMUls22");
  });

  test("delete user", async () => {
    await authService.getAuth("testeCreateDelete@gmail.com", password);
    expect(await authService.deleteUser()).toBeUndefined();
  });

  test("new user", async () => {
    const newUser = await authService.postNewUser(emailCreateDelete, password);
    expect(newUser.user.uid).toBeDefined();
  });
});
