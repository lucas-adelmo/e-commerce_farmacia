const productsPriceDown = [
    {
        title: 'Medicamento A',
        originalPrice: 'R$ 49,99',
        discountedPrice: 'R$ 39,99',
        imagePath: './assets/img/generico.png',
        isFavorite: true
    },
    {
        title: 'Medicamento B',
        originalPrice: 'R$ 49,99',
        discountedPrice: 'R$ 39,99',
        imagePath: './assets/img/generico.png',
        isFavorite: true
    },
    {
        title: 'Medicamento C',
        originalPrice: 'R$ 49,99',
        discountedPrice: 'R$ 39,99',
        imagePath: './assets/img/generico.png',
        isFavorite: true
    },
    {
        title: 'Medicamento D',
        originalPrice: 'R$ 49,99',
        discountedPrice: 'R$ 39,99',
        imagePath: './assets/img/generico.png',
        isFavorite: true
    }
];


document.addEventListener("DOMContentLoaded", () => {

    function createPriceDown (product, index) {
        const card = document.createElement('div');
        card.className = 'col-lg-3';
    
        card.innerHTML = `
            <div class="card" id="card-priceDown-${index}">
                <div class="card-title">
                    <svg id="checkbox-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <path id="my-path" d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                    </svg> 
                    
                </div>
                <img class="card-product" src="${product.imagePath}" alt="medicamento-generico" height="224">
                <div class="card-body">
                    <p id="title">${product.title}</p>
                    <p>De &nbsp;<del>${product.originalPrice}</del></p>
                    <p id="price">Por ${product.discountedPrice}</p>
                    <button class="button" type="button">
                        <img src="./assets/icons/add-icon.svg">                   
                        <span onclick="addProduct(document.getElementById('card-priceDown-${index + 1}'))">Adicionar</span>
                    </button>
                </div>
            </div>
        `;
    
        return card;
    };
    
    const priceDownSection = document.getElementById('baixou-preco');
    
    productsPriceDown.forEach((product, index) => {
        const card = createPriceDown(product, index);
        priceDownSection.querySelector('.row').appendChild(card);
    });
    

})

