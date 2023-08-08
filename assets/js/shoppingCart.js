const shoppingCart = []

function addProduct(id){
    const title = id.querySelector('#title').textContent
    const price = id.querySelector('#price').textContent.replace("Por","").trim()
    console.log(`O produto "${title}" foi adicionado ao carrinho ao custo de ${price}`)
    alert(`O produto "${title}" foi adicionado ao carrinho ao custo de ${price}`)

    shoppingCart.push({
        title,
        price
    })

    console.log(shoppingCart)
}

