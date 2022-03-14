// Object proprety shorthand

const name = 'Abdellatif';
const userAge = 33;

const user = {

    name:name,
    age:userAge,
    location:'Rabat'
}

console.log(user);

const product = {

    label:'note book',
    price:3,
    stock:201,
    salePrice:undefined,
    rating:3
}

// const {label:productName,stock,rating = 5} = product;
// console.log(productName);
// console.log(stock);
// console.log(rating);


const transaction = (type, {label,stock}) => {

    console.log(type,label,stock);
     
}

transaction('order',product);