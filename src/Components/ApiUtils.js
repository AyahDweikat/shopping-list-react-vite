export default function fetchData(category){
    return fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then(res=>res.json())
    .then(json=> json)
}
