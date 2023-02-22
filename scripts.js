console.log("Hello world!")

// ---------
// variáveis
// ---------

// var
var v1 = "Testando variável var."

// let
let v2Global = "Testando variável let global."
if(true){
    let v2Local = "Testando variável let local."
    console.log(v2Global)
}

// const
const c1 = "Testando constante."

console.log(v1)
console.log(c1)

// --------------
// tipos de dados
// --------------

// String

let varString = 'Testando dado ' + 'do tipo string.'
console.log(varString)
console.log(typeof varString)

// Number

let varNumber = 100.0
console.log(varNumber)
console.log(typeof varNumber)

// Boolean

let varBool = true
console.log(varBool)
console.log(typeof varBool)

// Null

let varNull = null
console.log(varNull)
console.log(typeof varNull)

// undefined

let varUndefined
console.log(varUndefined)
console.log(typeof varUndefined)

// Symbol

let varSymbol = Symbol()
console.log(varSymbol)
console.log(typeof varSymbol)

// Arrays

let vector = [10,false,'terceiro dado']
console.log(vector)
console.log(typeof vector)
console.log(vector[2])
console.log(typeof vector[2])

// Object literals

let objectLiteral = {
    name: 'Victor Antunes Vieira',
    age: 18,
    myFunction: function() {
        return 'Testando uma função sendo chamado dentro de um objeto literal.'
    }
}

console.log(objectLiteral.myFunction())
console.log(typeof objectLiteral.myFunction)

// Date

let varDate = new Date()
console.log(varDate.getTime())
console.log(typeof varDate)
