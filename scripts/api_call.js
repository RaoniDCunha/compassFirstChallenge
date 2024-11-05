// Mock API Data
let appartaments = [];

// API data fetch
fetch('../data.json')
  .then(response => response.json())
  .then(data => {
    appartaments = data;

    // Generate Appartaments Cards with API Data
    let appartamentCardsContainer = document.getElementById("appartament-cards-container");

    appartamentCardsContainer.innerHTML = appartaments.map((appartament, index) => `
        <div class="appartament-card" data-index="${index}"> 
            <img src="${appartament.image}" alt="" srcset="" >
            <span class="appartament-card-price">${appartament.price}</span>
            <span class="appartament-card-dimensions">${appartament.size} m²</span>
            <div class="appartament-card-specifics">
                <div class="appartament-card-specifics-information">${appartament.bedrooms} ${appartament.bedrooms != 1 ? `quartos` : `quarto`}</div>
                <div class="appartament-card-specifics-information">${appartament.bathrooms} ${appartament.bathrooms != 1 ? `banheiros` : `banheiro`}</div>
            </div>
        </div> 
    `).join('');



    // Populating the modal with data from the apartment-card
    let appartamentCards = document.querySelectorAll(".appartament-card");
    
    let modalImage = document.getElementById("modal-image");
    let modalRoom = document.getElementById("modal-room");
    let modalBathroom = document.getElementById("modal-bathroom");
    let modalDimensions = document.getElementById("modal-dimensions");
    let modalPrice = document.getElementById("modal-price");

    appartamentCards.forEach((card) => {
      card.addEventListener("click", (event) => {
        let modalBottom = document.getElementById("modal-bottom");
        modalBottom.style.display = "flex";

        let apartmentIndex = parseInt(card.dataset.index);
        modalImage.src = appartaments[apartmentIndex]['image'];
        modalRoom.innerHTML = `${appartaments[apartmentIndex]['bedrooms']} ${appartaments[apartmentIndex]['bedrooms'] != 1 ? "quartos" : "quarto"}`;
        modalBathroom.innerText = `${appartaments[apartmentIndex]['bathrooms']} ${appartaments[apartmentIndex]['bathrooms'] != 1 ? "banheiros" : "banheiro"}`;
        modalDimensions.innerText = `${appartaments[apartmentIndex]['size']} m²`;
        modalPrice.innerText = appartaments[apartmentIndex]['price'];
      });
    });
  });

// Close Modal
let closeModalButton = document.getElementById("close-modal");
let modalBottom = document.getElementById("modal-bottom");
let modalContainer = document.getElementById("modal-container");

closeModalButton.addEventListener('click', () => {
  modalBottom.style.display = "none";
});

modalBottom.addEventListener('click', () => {
  modalBottom.style.display = "none";
});

modalContainer.addEventListener('click', (event) => {
    event.stopPropagation();
});

// Modal PurchasedButton Click
let modalPurchasedButton = document.getElementById("button-purchase");

modalPurchasedButton.addEventListener('click', () => {
    alert('Redirecionando Para a Página de Compras e comfirmação do Pedido')
  });


// Go back to the start

let pageButton = document.getElementById("page-button");

pageButton.addEventListener('click', () => {
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});