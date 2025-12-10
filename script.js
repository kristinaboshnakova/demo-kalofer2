const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* ===== SHOW MENU ===== */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/* ===== HIDDEN MENU ===== */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
/*let thumbnail = document.getSelectorAll('thumbnail .item')*/
let thumbnail = document.querySelectorAll('.thumbnail .item');

 

let countItem = items.length;
let itemActive = 0;

next.onclick = function(){
    itemActive = itemActive +1;
    if(itemActive >= countItem){
        itemActive = 0;
    }

    showSlider();
}
/*prev click event*/

prev.onclick = function(){
    itemActive = itemActive -1;
    if (itemActive < 0){
        itemActive = countItem -1;
    }

    showSlider();
}


//auto run slider //

let refreshInterval = setInterval(() => {
    next.click();
}, 3000);



function showSlider(){
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');



    items[itemActive].classList.add('active');
    thumbnail[itemActive].classList.add('active');

    // clear auto time//

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000);
    
}

// click thumbail//

thumbnail.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    });
});

// scroll bar hidden//

const socialBar = document.querySelector('.social-bar');
const slider = document.querySelector('.slider');

window.addEventListener('scroll', () => {
  const sliderBottom = slider.offsetTop + slider.offsetHeight;
  const scrollPosition = window.scrollY + window.innerHeight / 2;

  if (scrollPosition > sliderBottom) {
    socialBar.classList.add('hidden');
  } else {
    socialBar.classList.remove('hidden');
  }
});

/* ===== RESERVATION SECTION SCROLL ANIMATION ===== */
const reservationSection = document.querySelector('.reservation-section');
const formElements = document.querySelectorAll(
  '.reservation-form .form-group, .reserve-btn'
);

if (reservationSection) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // показваме секцията
          reservationSection.classList.add('show');

          // динамика на полетата – излизат едно след друго
          formElements.forEach((el, index) => {
            el.style.transitionDelay = `${0.2 + index * 0.08}s`;
          });

          // спираме да наблюдаваме – да не се анимира всеки път
          observer.unobserve(reservationSection);
        }
      });
    },
    {
      threshold: 0.25, // когато ~25% от секцията е на екрана
    }
  );

  observer.observe(reservationSection);
}
// ============ RESERVATION FORM SUCCESS MESSAGE ============

const reservationForm = document.querySelector('.reservation-form');
const successMessage = document.getElementById('reservationSuccess');

if (reservationForm) {
  reservationForm.addEventListener('submit', function(e) {
    e.preventDefault(); // спира презареждането на страницата

    // Проверка дали формата е валидна
    if (reservationForm.checkValidity()) {
      
      // Скриване на формата
      reservationForm.style.display = "none";

      // Показване на съобщението
      successMessage.style.display = "block";
    } else {
      reservationForm.reportValidity(); // показва стандартните браузърни грешки
    }
  });
}


// ================== SERVICES POPUP CAROUSEL ==================

const servicesData = {
    pool: {
      title: 'Безплатен частен паркинг',
      text:
        'Безплатен частен паркинг е на разположение директно до къщата. Не е нужна предварителна резервация за място – просто паркирате и се настанявате спокойно. Удобен избор за семейства и гости, които пътуват с кола.',
      images: [
        'images/services/parking1.jpg',
        'images/services/parking2.jpg'
      ]
    },
    bbq: {
      title: 'Напълно оборудвана кухня',
      text:
        'Кухнята разполага с всичко необходимо: маса за хранене, кафе машина, тостер, котлони, фурна, миялна машина, микровълнова, електрическа кана, хладилник и разнообразни кухненски съдове. Идеална за домашно приготвенa закуска или вечеря.',
      images: [
        'images/services/kitchen1.jpg',
        'images/services/kitchen2.jpg'
      ]
    },
    bikes: {
      title: 'Комфортни спални и бани',
      text:
        'Уютни спални с висококачествено спално бельо, гардероб или шкаф за багаж. Баните са оборудвани с кърпи, чехли, тоалетни принадлежности, душ или вана, сешоар и всичко нужно за комфортен престой.',
      images: [
        'images/services/bedroom1.jpg',
        'images/services/bathroom1.jpg'
      ]
    },
    horses: {
      title: 'Всекидневна и кът за отдих',
      text:
        'Просторна зона за отдих с удобен диван, маса за хранене и място за събиране на семейството. Има плоскоекранен телевизор с кабелни канали и достатъчно пространство за приятни вечери на закрито.',
      images: [
        'images/services/living1.jpg',
        'images/services/living2.jpg'
      ]
    },
    wifi: {
      title: 'Wi-Fi, климатизация и удобства',
      text:
        'Безплатен Wi-Fi е наличен в цялата къща. Гостите разполагат с климатизация, отопление, мрежи против комари, диван-легло, контакт до леглото, сушилка за дрехи, ютия и удобства, подходящи и за по-дълъг престой. Къщата е с нечуплив режим – за непушачи и семейства.',
      images: [
        'images/services/wifi1.jpg',
        'images/services/wifi2.jpg'
      ]
    },
    views: {
      title: 'Тераса, барбекю и планински гледки',
      text:
        'Двор с градина, външни мебели и кът за хранене на открито. Гостите могат да използват барбекю, тераса и балкони с гледка към планината и градината – идеално за сутрешно кафе или вечерна напитка на чист въздух.',
      images: [
        'images/services/views1.jpg',
        'images/services/views2.jpg'
      ]
    }
  };
  
  const serviceCards = document.querySelectorAll('.service-card');
  const serviceModal = document.getElementById('serviceModal');
  const serviceModalTitle = serviceModal?.querySelector('.service-modal__title');
  const serviceModalText = serviceModal?.querySelector('.service-modal__text');
  const serviceModalImg = serviceModal?.querySelector('.service-modal__image');
  const servicePrevBtn = document.getElementById('servicePrev');
  const serviceNextBtn = document.getElementById('serviceNext');
  const serviceModalClose = document.getElementById('serviceModalClose');
  const serviceModalOverlay = serviceModal?.querySelector('.service-modal__overlay');
  
  let currentServiceKey = null;
  let currentServiceIndex = 0;
  
  function updateServiceImage() {
    if (!currentServiceKey) return;
    const data = servicesData[currentServiceKey];
    if (!data) return;
  
    const imgs = data.images;
    if (!imgs || !imgs.length) return;
  
    serviceModalImg.src = imgs[currentServiceIndex];
    serviceModalImg.alt = data.title;
  }
  
  function openServiceModal(key) {
    const data = servicesData[key];
    if (!data || !serviceModal) return;
  
    currentServiceKey = key;
    currentServiceIndex = 0;
  
    serviceModalTitle.textContent = data.title;
    serviceModalText.textContent = data.text;
    updateServiceImage();
  
    serviceModal.classList.add('open');
  }
  
  function closeServiceModal() {
    if (!serviceModal) return;
    serviceModal.classList.remove('open');
    currentServiceKey = null;
    currentServiceIndex = 0;
  }
  
  serviceCards.forEach((card) => {
    card.addEventListener('click', () => {
      const key = card.dataset.service;
      openServiceModal(key);
    });
  });
  
  if (servicePrevBtn) {
    servicePrevBtn.addEventListener('click', () => {
      if (!currentServiceKey) return;
      const imgs = servicesData[currentServiceKey].images;
      currentServiceIndex =
        (currentServiceIndex - 1 + imgs.length) % imgs.length;
      updateServiceImage();
    });
  }
  
  if (serviceNextBtn) {
    serviceNextBtn.addEventListener('click', () => {
      if (!currentServiceKey) return;
      const imgs = servicesData[currentServiceKey].images;
      currentServiceIndex = (currentServiceIndex + 1) % imgs.length;
      updateServiceImage();
    });
  }
  
  if (serviceModalClose) {
    serviceModalClose.addEventListener('click', closeServiceModal);
  }
  
  if (serviceModalOverlay) {
    serviceModalOverlay.addEventListener('click', closeServiceModal);
  }
  
  // Затваряне с ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && serviceModal?.classList.contains('open')) {
      closeServiceModal();
    }
  });


  // ================== PRICES SECTION SCROLL EFFECT ==================
const pricesSection = document.getElementById('prices');
const priceCards = document.querySelectorAll('.price-card');

if (pricesSection && priceCards.length) {
  const pricesObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // при скрол – светват картите
          priceCards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('is-visible');
            }, index * 120); // леко закъснение между тях
          });

          pricesObserver.unobserve(pricesSection); // само веднъж
        }
      });
    },
    {
      threshold: 0.25, // когато ~25% от секцията е влезнала
    }
  );

  pricesObserver.observe(pricesSection);
}
