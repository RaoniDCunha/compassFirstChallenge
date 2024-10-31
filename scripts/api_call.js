
// Mock API Data

let appartaments = [
    {
        "image": "../assets/image_container_logged_page.jpg",
        "price": "R$ 500.000",
        "size": 120,
        "bedrooms": 3,
        "bathrooms": 2
    },
    {
        "image": "../assets/image_container_logged_page.jpg",
        "price": "R$ 850.000",
        "size": 180,
        "bedrooms": 4,
        "bathrooms": 3
    },
    {
        "image": "../assets/image_container_logged_page.jpg",
        "price": "R$ 1.200.000",
        "size": 250,
        "bedrooms": 5,
        "bathrooms": 4
    },
    {
        "image": "../assets/image_container_logged_page.jpg",
        "price": "R$ 300.000",
        "size": 90,
        "bedrooms": 2,
        "bathrooms": 1
    },
    {
        "image": "../assets/image_container_logged_page.jpg",
        "price": "R$ 1.500.000",
        "size": 320,
        "bedrooms": 6,
        "bathrooms": 5
    },
    {
        "image": "../assets/image_container_logged_page.jpg",
        "price": "R$ 700.000",
        "size": 150,
        "bedrooms": 3,
        "bathrooms": 2
    },
    {
        "image": "../assets/image_container_logged_page.jpg",
        "price": "R$ 950.000",
        "size": 220,
        "bedrooms": 4,
        "bathrooms": 3
    },
    {
        "image": "../assets/image_container_logged_page.jpg",
        "price": "R$ 400.000",
        "size": 100,
        "bedrooms": 2,
        "bathrooms": 1
    },
    {
        "image": "../assets/image_container_logged_page.jpg",
        "price": "R$ 300.000",
        "size": 120,
        "bedrooms": 1,
        "bathrooms": 2
    }
];

// Generate Appartaments Cards with API Data

let appartamentCardsContainer = document.getElementById("appartament-cards-container");


appartamentCardsContainer.innerHTML = appartaments.map((appartament) => `
    <div class="appartament-card" >
        <img src="${appartament.image}" alt="" srcset="" >
        <span class="appartament-card-price">${appartament.price}</span>
        <span class="appartament-card-dimensions">${appartament.size} m²</span>
        <div class="appartament-card-specifics">
            <div class="appartament-card-specifics-information">${appartament.bedrooms} ${ appartament.bedrooms != 1 ? `quartos` : `quarto`}</div>
            <div class="appartament-card-specifics-information">${appartament.bathrooms} ${ appartament.bathrooms != 1 ? `banheiros` : `banheiro`}</div>
        </div>
    </div> `).join('');




// Go back to the start

let pageButton = document.getElementById("page-button");

pageButton.addEventListener('click', () => {
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});


let closeModalButton = document.getElementById("close-modal");
let modalBottom = document.getElementById("modal-bottom");

closeModalButton.addEventListener('click', () => {
modalBottom.style.display = "none";
});

// Populating the modal with data from the apartment-card

let appartamentCards = document.querySelectorAll(".appartament-card");

let modalImage = document.getElementById("modal-image");
let modalRoom = document.getElementById("modal-room");
let modalBathroom = document.getElementById("modal-bathroom");
let modalDimensions = document.getElementById("modal-dimensions");
let modalPrice = document.getElementById("modal-price");

appartamentCards.forEach((card) => {
  card.addEventListener("click", (event) => {
    

    modalBottom.style.display = "none";

    let apartmentIndex = Array.from(appartamentCards).indexOf(card);

    
    modalBottom.style.display = "flex";



    modalImage.src = appartaments[apartmentIndex]['image'];
    modalRoom.innerHTML = `${appartaments[apartmentIndex]['bedrooms']} ${appartaments[apartmentIndex]['bedrooms'] != 1 ? "quartos" : "quarto"}`;
    modalBathroom.innerText = `${appartaments[apartmentIndex]['bathrooms']} ${appartaments[apartmentIndex]['bathrooms'] != 1 ? "banheiros" : "banheiro"}`;
    modalDimensions.innerText = `${appartaments[apartmentIndex]['size']} m²`;
    modalPrice.innerText= appartaments[apartmentIndex]['price'];
    


  });
});


    