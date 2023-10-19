// TODO 0 - Instalar el proyecto con "npm install"

// TODO 1 - Importar productos
import products from "./products.json"; 

const filterSmartphones = (products) => {
    //TODO 2.1 - Filtrar utilizando

	return products.filter(products => products.category === 'smartphones');
}
const returnProductName = (products) => {
    return products.map((product) => `Marca: ${product.brand} | Modelo: ${product.title} | Precio: ${product.price}`);
}
const calcTotalPrice = (products) => {
     const totalPrice = products.reduce((acumulador, productos) => acumulador + productos.price, 0);
    return totalPrice.toFixed(2);
}
const calcQuantity = (products) => {
	return products.length;
}
export default function Practica1 () {
    // TODO 2 - Filtrar productos donde sean "category" igual a "smartphone"
	let smartphones = filterSmartphones(products);
    // TODO 3 - Armar un arreglo de nombres de productos con "marca" y "nombre". 
    let nameArray = returnProductName(smartphones);
    // TODO 4 - Calcular el precio total de los teléfonos filtrados
    let total = calcTotalPrice(smartphones);
    // TODO 5 - Calcular la cantidad de productos
    let quantity = calcQuantity(smartphones);
    console.log(nameArray);
    if (!Array.isArray(nameArray)) {
        nameArray = [];
    }
    return (
        <div>
            <p>Productos de smartphones son { quantity } por un total de $ { total } </p>
            <ul>
                { nameArray.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
} 