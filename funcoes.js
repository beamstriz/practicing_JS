///function soma(num1, num2) {
///    return num1 + num2;
///}

///console.log(soma(2, 2))

//parâmetros x argumentos

//ordem dos parâmetros

//function nomeIdade(nome, idade){
///    return `meu nome é ${nome} e minha idade é ${idade}`;

///}

///console.log(nomeIdade(19, "Ana"))

// function soma(numero1, numero2){
//     return numero1+numero2;
// }

// function multiplica(numero1 = 1, numero2=1){
//     return numero1*numero2
// }

// console.log(multiplica(soma(4, 5)))

// function cumprimentar(){
//     console.log('oi gente!')
//    }
   
//    cumprimentar()

//    function cumprimentaPessoa(pessoa){
//     console.log(`oi, ${pessoa}!`)
//    }
   
//    cumprimentaPessoa('Helena')

// function cumprimentar(){
//     return 'Oi gente!'
//    }
   
//    function cumprimentaPessoa(nomePessoa) {
//     console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
//    }
   
//    cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”


/// arrow function
// const apresentarArrow = nome => `meu nome é ${nome}`;
// const soma = (num1, num2) => num1 + num2;

// ///arrow function com mais de 1 linha de instrução
// const somaNumerosPequenos = (num1, num2) => {
//     if (num1 >10 || num2 > 10){
//         return 'somente numeros de 1 a 9'
//     }else{
//         return num1+num2;
//     }
// }

//hoisting: arrow function que se comporta como expressão
// const num = null;
// if (num !== null){
//     console.log(`o número é ${num}`);
// }

// if (num === null){
//     console.log('Número não fornecido');
// }

// const numero = 11;
// if (num> 10 || !num){
//         console.log('Número não válido');
// }

// function verificaNumero(numero){
//         if (numero > 10){
//             return 'número maior que 10';
//         }else {
//             return 'número não é maior que 10'
//         }
// }

// console.log(verificaNumero(9))

console.log(soma(1,1))
const soma = function (num1, num2){
    return num1 + num2 }



