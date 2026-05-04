const data = {
  fr: {
    heroBadge: "Maison historique au centre de Honfleur",
    title: "Séjournez dans une demeure unique à Honfleur",
    subtitle: "Une maison de charme sur 4 étages, au cœur du centre historique, à quelques pas du Vieux Bassin.",
    heroButton: "Voir les disponibilités",
    introTitle: "Un lieu rare pour découvrir la Normandie",
    desc: "Cette belle maison ancienne offre une atmosphère chaleureuse et élégante, parfaite pour un séjour en famille, entre amis ou pour une escapade romantique. Située dans le centre historique de Honfleur, elle permet de profiter à pied du port, des restaurants, des galeries d’art, des ruelles pavées et de l’ambiance unique de la ville. Avec ses 4 étages, son caractère authentique et son confort moderne, la maison offre une expérience beaucoup plus intime et mémorable qu’un simple hôtel.",
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
    alert: "Merci ! Le calendrier est une démonstration. La réservation sera connectée plus tard."
  },

  en: {
    heroBadge: "Historic house in central Honfleur",
    title: "Stay in a unique home in Honfleur",
    subtitle: "A charming 4-floor house in the historic centre, just a short walk from the Vieux Bassin.",
    heroButton: "Check availability",
    introTitle: "A rare place to experience Normandy",
    desc: "This beautiful historic house offers a warm and elegant atmosphere, perfect for a family stay, a trip with friends, or a romantic escape. Located in the historic centre of Honfleur, it lets you enjoy the harbour, restaurants, art galleries, cobbled streets and the unique charm of the town on foot. With its 4 floors, authentic character and modern comfort, the house offers a much more personal and memorable experience than a standard hotel.",
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
    alert: "Thank you! The calendar is a demo. Booking will be connected later."
  },

  ru: {
    heroBadge: "Исторический дом в центре Онфлёра",
    title: "Остановитесь в уникальном доме в Онфлёре",
    subtitle: "Очаровательный дом в 4 этажа в историческом центре, всего в нескольких минутах от старого порта.",
    heroButton: "Посмотреть даты",
    introTitle: "Редкое место для отдыха в Нормандии",
    desc: "Этот красивый старинный дом создаёт тёплую и элегантную атмосферу, идеально подходящую для семейного отдыха, поездки с друзьями или романтического уикенда. Дом расположен в историческом центре Онфлёра, поэтому до порта, ресторанов, художественных галерей, старинных улочек и главных достопримечательностей можно дойти пешком. Четыре этажа, характер исторического здания и современный комфорт делают проживание здесь гораздо более личным и запоминающимся, чем обычный отель.",
    ratingText: "Отзывы гостей",
    feature1: "Историческое здание",
    feature2: "Дом в 4 этажа",
    feature3: "Центр города",
    feature4: "Рядом со старым портом",
    galleryTitle: "Фотогалерея",
    detailsTitle: "Что особенно понравится",
    detail1: "Идеальное расположение в историческом центре Онфлёра.",
    detail2: "Дом с характером, старинным шармом и приятным оформлением.",
    detail3: "Уютные пространства для отдыха после прогулок и экскурсий.",
    detail4: "Рестораны, кафе, магазины и галереи находятся рядом.",
    detail5: "Отличная база для поездок в Онфлёр, Довиль, Трувиль и по Цветочному берегу.",
    bookingTitle: "Забронировать проживание",
    arrivalLabel: "Дата заезда",
    departureLabel: "Дата выезда",
    bookingButton: "Забронировать",
    bookingNote: "Демонстрационная форма — бронь пока не подтверждается автоматически.",
    contactTitle: "Контакты и бронирование",
    contactText: "По вопросам свободных дат и бронирования свяжитесь с нами напрямую.",
    emailButton: "📧 Написать email",
    phoneButton: "📞 Позвонить",
    alert: "Спасибо! Календарь пока демонстрационный. Бронирование подключим позже."
  }
};

let currentLang = "fr";

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  Object.keys(data[lang]).forEach((key) => {
    const el = document.getElementById(key);
    if (el) el.innerText = data[lang][key];
  });
}

function alertBooking() {
  alert(data[currentLang].alert);
}

setLang("fr");
document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {

    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.background = "rgba(0,0,0,0.95)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = "9999";

    const bigImg = document.createElement("img");
    bigImg.src = img.src;
    bigImg.style.width = "100%";
    bigImg.style.height = "100%";
    bigImg.style.objectFit = "cover";
    bigImg.style.cursor = "zoom-out";

    overlay.appendChild(bigImg);

    overlay.addEventListener("click", () => {
      overlay.remove();
    });

    document.body.appendChild(overlay);
  });
});