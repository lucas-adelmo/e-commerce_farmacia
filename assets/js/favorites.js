const favorites = []

function addFavorite(id){
    const title = id.querySelector('#title').textContent
    const price = id.querySelector('#price').textContent.replace("Por","").trim()
    console.log(`O produto "${title}" foi adicionado aos favoritos`)
    alert(`O produto "${title}" foi adicionado aos favoritos`)

    favorites.push({
        title,
        price
    })

    console.log(favorites)
}

function removeFavorite(id){
    
    const title = id.querySelector('#title').textContent

    const elementIndex = favorites.findIndex((obj) => {
        return obj.title == title
    })

    favorites.splice(elementIndex,1)
    console.log(favorites)
}

document.addEventListener("DOMContentLoaded", () =>{

    const svg = document.querySelectorAll('#checkbox-icon');
    const path = document.querySelectorAll('#my-path');

    // Defina os diferentes caminhos que você deseja usar
    const newPath1 = "m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
    const newPath2 = "M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"

    // Adicione um ouvinte de evento para o clique no elemento SVG

    svg.forEach((element, index) => element.addEventListener('click', () => {
        
        if (path[index].getAttribute('d') === newPath1) {
            // Mude para o novo caminho quando clicar
            path[index].setAttribute('d', newPath2);
            addFavorite(document.getElementById(`${index}`))
        } else {
            path[index].setAttribute('d', newPath1);
            removeFavorite(document.getElementById(`${index}`))
        }
    }))

});


