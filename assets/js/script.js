/**
 * leggenda
    - Argomento principale / Azione / Funzione
    -- Argomento secondario / Ragionamento interno
 */
//-creo il docunet con  addeventlistener per crearmi l'evento principaleche terra dentro tutte le funzioni e elementi

    document.addEventListener('DOMContentLoaded', () => {
        
    // - qui mi riprendo i Riferimenti della  DOM che sno sia variabili che costanti
    const galleryContainer = document.getElementById('photo-gallery'); 
    const lightbox = document.getElementById('lightbox');
    const modalImage = document.getElementById('modal-image');
    const closeModalButton = document.getElementById('close-modal');
    // -- aggiungo il nuovo: Riferimento attraverso il tag <body> per bloccare lo scroll
    const body = document.body; 

        // - prendo i riferimenti per l'url che ho usato dentro postman e il ID per il griled 
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
  // - mi creo la Funzione per il Rendering della Galleria 
        function renderGallery(photosArray) {
          // -- faccio un Ciclo for classico 
            for (let i = 0; i < photosArray.length; i++) {
                
                // --ottengo  l'elemento foto corrente usando l'indice i
                const photo = photosArray[i];
                
                // -- richiamo la funzione di creazione per la foto 
                const newCard = createPhotoCard(photo);
                
                // -- inserisco la card nel contenitore della griglia che avevo all'inizio come nuova card
                galleryContainer.appendChild(newCard);
            }

        }

         // -mi creo la Funzione Principale per il Caricamento da API con Fallback
        function loadGalleryFromAPI() {
            //-- mi creo il fetch che mi richiama l'url per poter vedere se ci stanno errori e se il API funziona perfettamente
             fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Errore API: ' + response.statusText);
                }
                return response.json();
            })
            .then(photos => {
                renderGallery(photos);
            })
            .catch(error => {
                console.error('API non disponibile. Carico dati locali.', error);
                galleryContainer.innerHTML = '<p style="text-align: center; color: orange; font-size: 1.2rem; padding: 10px;">Attenzione: Caricamento dati di fallback locali.</p>';
                renderGallery(localPhotoData); 
            });
        }

        // - aggiungo per concludere l'Esecuzione
        loadGalleryFromAPI(); 
    });