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

    });