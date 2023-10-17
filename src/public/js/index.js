
const divProducts = document.getElementById('products-container')
const form = document.getElementById('formulario')
const title = document.getElementById('title')
const description = document.getElementById('description')
const price = document.getElementById('price')
const code = document.getElementById('code')
const stock = document.getElementById('stock')
const category = document.getElementById('category')



const resetForm = () => {
    title.value = ''
    description.value = ''
    price.value = ''
    code.value = ''
    stock.value = ''
    category.value = ''

}

let deleteButton = document.querySelectorAll('.btn-success')
console.log(deleteButton)
deleteButton.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
        const idProduct = e.target.getAttribute('data-id')
        console.log(idProduct)
        try {
            await axios.post("http://localhost:8080/api/carts/6528437ecfd95e4cbf9f8347/product/" + idProduct)
            alert("Producto agregado")
        } catch (error) {
            alert(error.message)
        }
    })
})



