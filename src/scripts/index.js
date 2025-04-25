import { usuarios } from "./dbUsers.js";
import { enderecos } from "./dbAddress.js";

console.log(usuarios);
console.log(enderecos);

function addAddresToUser(listaDeUsuarios, listaDeEnderecos) {
  return listaDeUsuarios.map(usuario => {
    const enderecoCorrespondente = listaDeEnderecos.find(endereco => endereco.userId === usuario.id);
    
    return {
      ...usuario,
      endereco: enderecoCorrespondente || {}
    };
  });
}

console.log(addAddresToUser(usuarios, enderecos));

// function deletePassword(usuario) {
//   const { password, ...usuarioSemPassword } = usuario;
//   return usuarioSemPassword;
// }
function deletePassword({ password, ...rest }) {
  return rest;
}
console.log(deletePassword(usuarios[0]));

// Listar os usuarios sem a senha
function listUsers(usuarios) {
  return usuarios.map((user) => deletePassword(user));
}
console.log(listUsers(usuarios));

// Listar somente nome, email e stack
function listUserStacks(listaDeUsuarios) {
  return listaDeUsuarios.map (({nome, email, stacks}) => ({
    nome,
    email,
    stacks,
  }));
}
console.log(listUserStacks(usuarios));

//Deletar um usuário que tenha python na stack
function deleteUser(listaDeUsuarios) {
  return listaDeUsuarios
  .filter(({ stacks}) => !stacks.includes("Python"))
  .map((user) => deletePassword(user));
}
console.log(deleteUser(usuarios));