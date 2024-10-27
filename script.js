function showDetails(houseId) {
    const details = document.getElementById('house-details');
    const title = document.getElementById('house-title');
    const description = document.getElementById('house-description');
    
    if (houseId === 'casa1') {
        title.textContent = 'Casa Moderna';
        description.textContent = 'Esta casa moderna cuenta con 3 dormitorios, 2 baños y un hermoso jardín.';
    } else if (houseId === 'casa2') {
        title.textContent = 'Casa Familiar';
        description.textContent = 'Ideal para familias grandes, esta casa tiene 4 dormitorios, 3 baños y garaje.';
    } else if (houseId === 'casa3') {
        title.textContent = 'Casa con Piscina';
        description.textContent = 'Disfruta del lujo de una piscina y terraza en esta casa de 5 dormitorios y 4 baños.';
    }
    
    details.style.display = 'block';
}

function closeDetails() {
    document.getElementById('house-details').style.display = 'none';
}
