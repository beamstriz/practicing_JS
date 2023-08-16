// Criando um objeto (dicionário em JavaScript)
let student = {
    name: "John",
    age: 20,
    major: "Computer Science"
};

// Acessando valores por chaves
console.log(student["name"]);  // Saída: John

// Adicionando um novo par chave-valor
student["gpa"] = 3.5;

// Iterando sobre chaves e valores
for (let key in student) {
    console.log(key + ":", student[key]);
}
