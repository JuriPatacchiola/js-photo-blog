/**
 * leggenda
    - Argomento principale / Azione / Funzione
    -- Argomento secondario / Ragionamento interno
 */
//-creo il docunet con  addeventlistener per crearmi l'evento principaleche terra dentro tutte le funzioni e elementi

    document.addEventListener('DOMContentLoaded', () => {

        // - prendo i riferimenti per l'url che ho usato dentro postman e il ID per il griled 
    const galleryContainer = document.getElementById('photo-gallery'); 
    const apiUrl = 'https://lanciweb.github.io/demo/api/pictures/';

     // - prendo i Dati Locali (che sono all'interno del link che ho usato denro postman )
    const localPhotoData = [
        {"id": 1, "url": "https://marcolanci.it/boolean/assets/pictures/1.png", "date": "01-07-2024", "title": "SKATE PARK"},
        {"id": 2, "url": "https://marcolanci.it/boolean/assets/pictures/2.png", "date": "16-07-2024", "title": "PASSEGGIATA"},
        {"id": 3, "url": "https://marcolanci.it/boolean/assets/pictures/3.png", "date": "01-07-2024", "title": "ALPI"},
        {"id": 4, "url": "https://marcolanci.it/boolean/assets/pictures/4.png", "date": "21-08-2024", "title": "SAGRA"},
        {"id": 5, "url": "https://marcolanci.it/boolean/assets/pictures/5.png", "date": "23-08-2024", "title": "WATERGUN"},
        {"id": 6, "url": "https://marcolanci.it/boolean/assets/pictures/6.png", "date": "30-08-2024", "title": "RIVIERA"}
    ];

     // - mi creo la Funzione per creare la Singola Card
    function createPhotoCard(photo) {
        //-- creo gli elementi che mi servono dentro la card
        const card = document.createElement('div');
        card.classList.add('card_photo');
        
        const img = document.createElement('img');
        img.classList.add('photo_img');
        img.src = photo.url;        
        img.alt = photo.title;

        const pin = document.createElement('img');
        pin.classList.add('pin');
        pin.src = './assets/img/pin.svg';
        
        const textContent = document.createElement('div');
        textContent.classList.add('text_content');
        
        const dateP = document.createElement('p');
        dateP.classList.add('date');
        dateP.textContent = photo.date; 
        
        const titleP = document.createElement('p');
        titleP.classList.add('title');
        titleP.textContent = photo.title;


        //--creo i child per richiamre il nodo principale attraverso l'elelemto che ho creato
        textContent.appendChild(dateP);
        textContent.appendChild(titleP);
        card.appendChild(img);
        card.appendChild(pin);
        card.appendChild(textContent);

        return card; 

    }

    });