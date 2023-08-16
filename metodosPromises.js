function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject(false);
            return;
        }
        
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promisse');
            return;
        }, tempo);
    });
}

function baixaPagina() {
    const emCache = true; 

    if (emCache){
        return promises.resolve('Página em Cache')
    } else{
        return esperaAi('Baixei a pagina', 3000); 
    }
}

//Promise.all Promise.race Promise.resolve Promisse.reject
const promises = [
    'Primeiro valor',
    esperaAi('Promisse 1', 3000),
    esperaAi('Promisse 2', 500),
    esperaAi('Promisse 3', 1000),
    esperaAi(1000, 1000),
    'Outro valor'
];

Promise.all(promises)
    .then(function(valor) {
        console.log(valor);
    })
    .catch(function(erro){
    console.log(erro);
    });