const shareToHelp = {};

shareToHelp.getOffers = function () {
  return [
    {
      name: 'Estufa Eléctrica Kenmore 5.4 Cu Ft Con Horno De Convección',
      text: 'La superficie lisa de vidrio cerámico muestra elementos duales 12/6 y una zona de calentamiento para mantener la temperatura de servicio perfecta',
      image: 'estufa.jpg'
    },
    {
      name: 'Audifonos Sony Bluetooth Zx330bt Nfc Inalambricos Celulares',
      text: 'Transmisión inalámbrica con Bluetooth® : Transmite tus canciones favoritas de manera inalámbrica a través de Bluetooth®.',
      image: 'audifonos.jpg'
    },
    {
      name: 'Mochila Inteligente Anti Robo Impermeable C/cargador Power',
      text: 'Compartimento Notebook (hasta 15 pulgadas) con multiples bolsillos',
      image: 'mochila.jpg'
    },
    {
      name: 'Wifi Xiaomi Pro 300M',
      text: 'Dos potentes antenas externas de alta ganancia proporcionan una mayor cobertura y un mejor rendimiento',
      image: 'amplificador.jpg'
    },
    {
      name: 'Impresora 3D FINDER',
      text: 'Dos potentes antenas externas de alta ganancia proporcionan una mayor cobertura y un mejor rendimiento',
      image: 'impresora.jpg'
    }
  ];
}

shareToHelp.insertCards = function () {

  const offers = shareToHelp.getOffers();
  const offersView = offers.map(function (item) {
    return shareToHelp.createCards(item);
  });
  
  document.getElementById('products').innerHTML = offersView.join();
};

shareToHelp.createCards = function (offer) {
  const item =
    `<section class='card'> 
    <img class='card-image' alt='${offer.name}' src='${offer.image}'> 
    <h1 class='card-title'>${offer.name}</h1> 
    <p class='card-text'>${offer.text}</p> 
    <button class='card-button'><a href='#'>Comprar ahora</a></button> 
   </section>`;
  return item;
}

shareToHelp.insertCards();