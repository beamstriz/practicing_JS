



Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

const produtoi = new Produto('Gen', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
console.log(produto);
console.log(camiseta)