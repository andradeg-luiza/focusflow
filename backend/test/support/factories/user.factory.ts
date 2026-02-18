// gera dados consistentes e reutilizáveis //Regra mental: factory cria dados, não faz request e não dá expect

export function makeUniqueEmail(prefix = 'luiza') {
  return `${prefix}+${Date.now()}@example.com`; // Gera email único pra não bater no unique do banco

}

export function makeRegisterPayload(
  overrides?: Partial<{ email: string; password: string }>,
) {
  return { //por default → válido
    email: makeUniqueEmail(),
    password: 'SenhaForte123',
    ...overrides, //testa erro/caso específico
  };
}
