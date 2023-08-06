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
            <div class="card" id="card-product-${index + 1}">
                <div class="card-title"><img src="./assets/icons/heart.svg"></div>
                <img class="card-product" src="${product.imagePath}" alt="medicamento-generico" height="224">
                <div class="card-body">
                    <p>${product.title}</p>
                    <p>De &nbsp;<del>${product.originalPrice}</del></p>
                    <p>Por ${product.discountedPrice}</p>
                    <button class="button" type="button">
                        <img src="./assets/icons/add-icon.svg">                   
                        <span>Adicionar</span>
                    </button>
                </div>
            </div>
        `;
    
        return card;
    };
    
    const baixouPrecoSection = document.getElementById('baixou-preco');
    
    productsPriceDown.forEach((product, index) => {
        const card = createPriceDown(product, index);
        baixouPrecoSection.querySelector('.row').appendChild(card);
    });
    

})

