// Utilizando o array dentro do método freeze, que literalmente congela os dados
// Métodos de alteração de array como push, pop, shift não funcionarão nesses arrays
// Métodos de iteração como map, some, forEach, filter funcionam normalmente

const enderecos = Object.freeze([
  {
    id: 1,
    userId: 2,
    endereco: {
      rua: "Avenida São Paulo",
      bairro: "Centro",
      zipCode: "45687-000",
      cidade: "São Paulo",
      estado: "São Paulo",
    },
  },
  {
    id: 2,
    userId: 1,
    endereco: {
      rua: "Rua Quitino",
      bairro: "Nações",
      zipCode: "78120-000",
      cidade: "Blumenau",
      estado: "Santa Catarina",
    },
  },
  {
    id: 3,
    userId: 4,
    endereco: {
      rua: "Rua do videomaker",
      bairro: "Hollywood",
      zipCode: "44744-000",
      cidade: "Hollywood",
      estado: "Los Angeles",
    },
  },
  {
    id: 4,
    userId: 3,
    endereco: {
      rua: "Avenida Brasil",
      bairro: "Centro",
      zipCode: "4587-000",
      cidade: "Natal",
      estado: "Rio Grande do Norte",
    },
  },
]);
