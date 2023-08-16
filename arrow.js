// const acesso = (nome) => {
//     return `${nome} logou com sucesso no sistema`
// }

// const usuarioLogin = (nome) => {
//     let array = []
//     for (i = 0; i < 90000; i++){
//         array.push(i)
//     }
//     return acesso(nome)
// }

// const diretoriaLogin = (nome) => {
//     let array = []
//     for (i=0; i<900000; i++){
//         array.push(i)
//     }
//     return acesso(nome)
// }

// console.log(diretoriaLogin("Leia"));

// Caso fosse necessário criar varios cargos, para não repetir o código basta criar uma função genérica
const acesso = (nome) => {
    return `${nome} logou com sucesso no sistema`
}
const autentica = (cargo) => {
     let array = []
     for(i=0; i< cargo; i++){
        array.push(i)
     }
     return true;
}

const login = (pessoa, autentica) => {
    if(pessoa.cargo === `funcionario`){
        autentica(90000)
    } else if(pessoa.cargo === `diretoria`){
        autentica (900000)
    }
    return acesso(pessoa.nome)
}

console.log("olá")

console.log(login({cargo: `diretoria`, nome: `Leia`}, autentica))