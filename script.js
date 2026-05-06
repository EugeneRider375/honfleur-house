const data = {
  fr: {
    heroBadge: "Maison historique au centre de Honfleur",
    title: "Séjournez dans une demeure unique à Honfleur",
    subtitle: "Une maison de charme sur 4 étages, au cœur du centre historique, à quelques pas du Vieux Bassin.",
    heroButton: "Voir les disponibilités",
    introTitle: "Un lieu rare pour découvrir la Normandie",
    desc: "Cette belle maison ancienne offre une atmosphère chaleureuse et élégante, parfaite pour un séjour en famille, entre amis ou pour une escapade romantique. Située dans le centre historique de Honfleur, elle permet de profiter à pied du port, des restaurants, des galeries d’art, des ruelles pavées et de l’ambiance unique de la ville.",
    ratingText: "Avis voyageurs",
    feature1: "Bâtiment historique",
    feature2: "Maison sur 4 étages",
    feature3: "Centre-ville",
    feature4: "À deux pas du port",
    galleryTitle: "Galerie photos",
    detailsTitle: "Ce que vous allez aimer",
    detail1: "Adresse idéale dans le centre historique de Honfleur.",
    detail2: "Maison de caractère avec charme ancien et décoration soignée.",
    detail3: "Espaces confortables pour se détendre après une journée de visite.",
    detail4: "Restaurants, cafés, boutiques et galeries accessibles à pied.",
    detail5: "Parfait pour découvrir Honfleur, Deauville, Trouville et la Côte Fleurie.",
    bookingTitle: "Réserver votre séjour",
    arrivalLabel: "Date d’arrivée",
    departureLabel: "Date de départ",
    bookingButton: "Réserver",
    bookingNote: "Formulaire de démonstration — réservation non confirmée automatiquement.",
    contactTitle: "Contact & réservation",
    contactText: "Pour toute question ou demande de disponibilité, contactez-nous directement.",
    emailButton: "📧 Envoyer un email",
    phoneButton: "📞 Appeler",
    whatsappButton: "💬 WhatsApp",
    alert: "Merci ! Le calendrier est une démonstration."
  },
  en: {
    heroBadge: "Historic house in central Honfleur",
    title: "Stay in a unique home in Honfleur",
    subtitle: "A charming 4-floor house in the historic centre, just a short walk from the Vieux Bassin.",
    heroButton: "Check availability",
    introTitle: "A rare place to experience Normandy",
    desc: "This beautiful historic house offers a warm and elegant atmosphere, perfect for a family stay, a trip with friends, or a romantic escape. Located in the historic centre of Honfleur, it lets you enjoy the harbour, restaurants, art galleries and cobbled streets on foot.",
    ratingText: "Guest reviews",
    feature1: "Historic building",
    feature2: "4-floor house",
    feature3: "City centre",
    feature4: "Steps from the harbour",
    galleryTitle: "Photo gallery",
    detailsTitle: "What you will love",
    detail1: "Ideal address in the historic centre of Honfleur.",
    detail2: "Character house with authentic charm and tasteful decoration.",
    detail3: "Comfortable spaces to relax after a day of exploring.",
    detail4: "Restaurants, cafés, shops and galleries within walking distance.",
    detail5: "Perfect for discovering Honfleur, Deauville, Trouville and the Côte Fleurie.",
    bookingTitle: "Book your stay",
    arrivalLabel: "Arrival date",
    departureLabel: "Departure date",
    bookingButton: "Book now",
    bookingNote: "Demo form — booking is not automatically confirmed yet.",
    contactTitle: "Contact & booking",
    contactText: "For questions or availability, contact us directly.",
    emailButton: "📧 Send email",
    phoneButton: "📞 Call",
    whatsappButton: "💬 WhatsApp",
    alert: "Thank you! The calendar is a demo."
  },
  ru: {
    heroBadge: "Исторический дом в центре Онфлёра",
    title: "Остановитесь в уникальном доме в Онфлёре",
    subtitle: "Очаровательный дом в 4 этажа в историческом центре, рядом со старым портом.",
    heroButton: "Посмотреть даты",
    introTitle: "Редкое место для отдыха в Нормандии",
    desc: "Этот красивый старинный дом создаёт тёплую и элегантную атмосферу, идеально подходящую для семейного отдыха, поездки с друзьями или романтического уикенда. Дом расположен в историческом центре Онфлёра, рядом с портом, ресторанами, галереями и старинными улочками.",
    ratingText: "Отзывы гостей",
    feature1: "Историческое здание",
    feature2: "Дом в 4 этажа",
    feature3: "Центр города",
    feature4: "Рядом со старым портом",
    galleryTitle: "Фотогалерея",
    detailsTitle: "Что особенно понравится",
    detail1: "Идеальное расположение в историческом центре Онфлёра.",
    detail2: "Дом с характером, старинным шармом и приятным оформлением.",
    detail3: "Уютные пространства для отдыха после прогулок.",
    detail4: "Рестораны, кафе, магазины и галереи находятся рядом.",
    detail5: "Отличная база для поездок в Онфлёр, Довиль и Трувиль.",
    bookingTitle: "Забронировать проживание",
    arrivalLabel: "Дата заезда",
    departureLabel: "Дата выезда",
    bookingButton: "Забронировать",
    bookingNote: "Демонстрационная форма — бронь пока не подтверждается автоматически.",
    contactTitle: "Контакты и бронирование",
    contactText: "По вопросам свободных дат и бронирования свяжитесь с нами напрямую.",
    emailButton: "📧 Написать email",
    phoneButton: "📞 Позвонить",
    whatsappButton: "💬 WhatsApp",
    alert: "Спасибо! Календарь пока демонстрационный."
  }
};

let currentLang = "fr";

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  Object.keys(data[lang]).forEach(key => {
    const el = document.getElementById(key);
    if (el) el.innerText = data[lang][key];
  });
}

function alertBooking() {
  alert(data[currentLang].alert);
}

document.addEventListener("DOMContentLoaded", () => {
  setLang("fr");

  const images = Array.from(document.querySelectorAll(".gallery img"));
  let currentIndex = 0;

  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      currentIndex = index;
      openGallery();
    });
  });

  function openGallery() {
    const overlay = document.createElement("div");
    overlay.className = "photo-overlay";

    overlay.innerHTML = `
      <button class="close-btn">×</button>
      <button class="nav-btn prev-btn">‹</button>
      <img class="fullscreen-img" src="${images[currentIndex].src}">
      <button class="nav-btn next-btn">›</button>
    `;

    document.body.appendChild(overlay);

    const bigImg = overlay.querySelector(".fullscreen-img");

    overlay.querySelector(".close-btn").onclick = () => overlay.remove();

    overlay.querySelector(".next-btn").onclick = (e) => {
      e.stopPropagation();
      currentIndex = (currentIndex + 1) % images.length;
      bigImg.src = images[currentIndex].src;
    };

    overlay.querySelector(".prev-btn").onclick = (e) => {
      e.stopPropagation();
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      bigImg.src = images[currentIndex].src;
    };

    bigImg.onclick = (e) => e.stopPropagation();

    overlay.onclick = () => overlay.remove();
  }
});
const whatsappLink = "https://wa.me/33677621005?text=Bonjour%2C%20je%20souhaite%20avoir%20des%20informations%20sur%20la%20maison%20%C3%A0%20Honfleur.";

document.addEventListener("DOMContentLoaded", () => {
  const whatsappButton = document.getElementById("whatsappButton");
  if (whatsappButton) {
    whatsappButton.href = whatsappLink;
  }
});