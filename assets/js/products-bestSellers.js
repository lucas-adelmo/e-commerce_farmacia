const productsBestSellers = [
    {
        title: 'Medicamento W',
        originalPrice: 'R$ 49,99',
        discountedPrice: false,
        imagePath: './assets/img/generico.png',
        isFavorite: false
    },
    {
        title: 'Medicamento X',
        originalPrice: 'R$ 49,99',
        discountedPrice: false,
        imagePath: './assets/img/generico.png',
        isFavorite: false
    },
    {
        title: 'Medicamento Y',
        originalPrice: 'R$ 49,99',
        discountedPrice: false,
        imagePath: './assets/img/generico.png',
        isFavorite: false
    },
    {
        title: 'Medicamento Z',
        originalPrice: 'R$ 49,99',
        discountedPrice: false,
        imagePath: './assets/img/generico.png',
        isFavorite: false
    }
];

document.addEventListener("DOMContentLoaded", () =>{
    function createBestSeller (product, index) {
        const card = document.createElement('div');
        card.className = 'col-lg-3';
    
        card.innerHTML = `
            <div class="card" id="card-bestSeller-${index + 1}">
                <div class="card-title"><img src="./assets/icons/heart.svg"></div>
                <img class="card-product" src="${product.imagePath}" alt="medicamento-generico" height="224">
                <div class="card-body">
                    <p id="title">${product.title}</p>
                    <p id="price">${product.originalPrice}</p>
                    <button class="button" type="button">
                        <img src="./assets/icons/add-icon.svg">                   
                        <span onclick="addProduct(document.getElementById('card-bestSeller-${index + 1}'))">Adicionar</span>
                    </button>
                </div>
            </div>
        `;
    
        return card;
    };
    
    const maisVendidosSection = document.getElementById('mais-vendidos');
    
    productsBestSellers.forEach((product, index) => {
        const card = createBestSeller(product, index);
        maisVendidosSection.querySelector('.row').appendChild(card);
    });
    
});