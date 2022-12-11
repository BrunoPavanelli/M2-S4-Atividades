const products =  [
    {
    title: "Lasanha",
    category: "massas",
    price: 20.00
 },
 {
    title: "Pizza",
    category: "massas",
    price: 45.00
 },
 {
    title: "Chocolate Quente",
    category: "bebidas",
    price: 11.00
 },
 {
    title: "Café expresso",
    category: "bebidas",
    price: 8.00
 },
 {
    title: "Camarão Internacional",
    category: "massas",
    price: 90.00
 }
];

const orderFromSmallestToLargestPrice = (array = []) => {
   const arrayInDecrescentOrder = array.sort((productA, productB) => {
      if (productA.price < productB.price) return -1
   });
   return arrayInDecrescentOrder;
};

console.log('Ordered in decrescent order');
console.log(products, orderFromSmallestToLargestPrice());

const orderLargestFromToSmallestPrice = (array = []) => {
   const arrayInDecrescentOrder = array.sort((productA, productB) => {
      if (productA.price > productB.price) return -1
   });
   return arrayInDecrescentOrder;
};

console.log('Ordered in crescent order');
console.log(products, orderLargestFromToSmallestPrice());
