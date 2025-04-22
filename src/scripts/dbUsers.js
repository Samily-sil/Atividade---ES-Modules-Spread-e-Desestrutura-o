// Utilizando o array dentro do método freeze, que literalmente congela os dados
// Métodos de alteração de array como push, pop, shift não funcionarão nesses arrays
// Métodos de iteração como map, some, forEach, filter funcionam normalmente

const usuarios = Object.freeze([
  {
    id: 1,
    nome: "Samuel Persuhn",
    stacks: ["JavaScript", "PostgreSQL", "Node.js"],
    idade: 26,
    endereco: {},
    password: "51686aaasd2",
    email: "samu@kenzie.com",
  },
  {
    id: 2,
    nome: "Patrick Nekel",
    stacks: ["JavaScript", "MongoDB", "Python"],
    idade: 22,
    endereco: {},
    password: "supersenha123548",
    email: "patrick@kenzie.com",
  },
  {
    id: 3,
    nome: "Samuel Leão",
    stacks: ["HTML5", "CSS3", "React.js"],
    idade: 28,
    endereco: {},
    password: "hash*asdasda7788",
    email: "samueleao@kenzie.com",
  },
  {
    id: 4,
    nome: "Danrley",
    stacks: ["VideoMaker", "Effects", "Roteirista"],
    idade: 30,
    endereco: {},
    password: "889977",
    email: "danrley@kenzie.com",
  },
]);
