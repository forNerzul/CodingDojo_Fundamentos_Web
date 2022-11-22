function pizzaOven ( tipoCorteza, tipoSalsa, quesos, salsas) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;
}

var pizza1 = pizzaOven("estilo Chicago","tradicional",["mozzarella"],["pepperoni","salchicha"]);
var pizza2 = pizzaOven("lanzada a mano","marinara",["mozzarella","feta"],["champiñones","aceitunas", "cebollas"]);
var pizza3 = pizzaOven("a la piedra","salsa de tomate",["cuatro quesos","choclo"],["bacon","aceitunas", "morrones"]);
var pizza4 = pizzaOven("rellena","mexicana",["queso azul"],["carne","picante"]);
console.log(pizza4);