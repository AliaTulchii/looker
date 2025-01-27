import '../../scss/main.scss';
import gsap from 'gsap';

function loadAndInitMobileNav() {
  document.addEventListener('DOMContentLoaded', () => {
    const headerContainer = document.querySelector('.header__container');
    const toggleButton = document.querySelector('.mobile-nav-btn');
    const overlay = document.querySelector('.overlay');
    const body = document.body;
    const navText = document.querySelector('.nav-text');
    const navTextClose = document.querySelector('.nav-text--close');
    const header = document.querySelector('.header');
    let isOpen = false;

    // Ініціалізація анімації GSAP
    gsap.set(".menu__list .menu__item-content", { y: 95 });

    const timeline = gsap.timeline({ paused: true });

    if (toggleButton) {
      // Завантажуємо меню
      fetch('/src/html/mobile-nav.html')
        .then(response => {
          if (!response.ok) {
            throw new Error('Файл не знайдено');
          }
          return response.text();
        })
        .then(data => {
          headerContainer.insertAdjacentHTML('beforeend', data);

          // ініціалізуємо анімацію після додавання контенту меню
          if (overlay && navText && navTextClose) {
            timeline.to(overlay, {
              duration: 1.5,
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              stagger: 0.2,
              ease: "power4.inOut",
              onStart: () => (overlay.style.visibility = 'visible'),
            });

            timeline.to(".menu__list .menu__item-content", {
              duration: 1,
              y: 0,
              stagger: 0.2,
              ease: "power4.inOut",
            }, "-=1");
          }
        })
        .catch(error => {
          console.error('Помилка при завантаженні mobile-nav.html:', error);
        });
    }

    // Обробник натискання кнопки
    toggleButton.addEventListener("click", () => {
      if (isOpen) {
        timeline.reverse().then(() => {
          overlay.style.visibility = 'hidden';
        });

        body.classList.remove("overlay-active");
        navText.style.display = "block"; 
        navTextClose.style.display = "none";		

      } else {
        if (overlay && navText && navTextClose) {
          timeline.play();
          body.classList.add("overlay-active");
          navText.style.display = "none"; 
          navTextClose.style.display = "block"; 
        }
      }
      header.style.zIndex = isOpen ? "1100" : "1100";  // Ви можете змінити значення, якщо потрібна логіка зміни z-index
      isOpen = !isOpen;
    });
  });
}

export default loadAndInitMobileNav;


// import '../../scss/main.scss';
// import gsap from 'gsap';

// function loadAndInitMobileNav() {
//   document.addEventListener('DOMContentLoaded', () => {
//     const headerContainer = document.querySelector('.header__container');
//     const toggleButton = document.querySelector('.mobile-nav-btn');
// 		const overlay = document.querySelector('.overlay');
// 		const body = document.body;
// 		const navText =document.querySelector('.nav-text');
// 		const navTextClose = document.querySelector('.nav-text--close');
// 		const header = document.querySelector('.header');
// 		let isOpen = false;

// 		// Ініціалізація анімації GSAP
// 		gsap.set(".menu__list .menu__item-content", { y: 95 });


// 		const timeline = gsap.timeline({ paused: true });

//         if (toggleButton) {
//             // Завантажуємо меню
//             fetch('/src/html/mobile-nav.html')
//               .then(response => {
//                 if (!response.ok) {
//                   throw new Error('Файл не знайдено');
//                 }
//                 return response.text();
//               })
//               .then(data => {
//                 headerContainer.insertAdjacentHTML('beforeend', data);
      
//                 timeline.to(overlay, {
//                   duration: 1.5,
//                   clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//                   stagger: 0.2,
//                   ease: "power4.inOut",
//                   onStart: () => (overlay.style.visibility = 'visible'),
//               })
      
//               timeline.to(".menu__list .menu__item-content",{
//                       duration: 1,
//                       y: 0,
//                       stagger: 0.2,
//                       ease: "power4.inOut",
//                   },"-=1"	)
      
//               })
//               .catch(error => {
//                 console.error('Помилка при завантаженні mobile-nav.html:', error);
//               });
//           }


// 		// Обробник натискання кнопки
// 		toggleButton.addEventListener("click", () => {
// 			if (isOpen) {
// 				timeline.reverse().then(() => {
// 					overlay.style.visibility = 'hidden';
					
// 				});

// 				body.classList.remove("overlay-active");
// 				navText.style.display = "block"; 
//                 navTextClose.style.display = "none";		
				
// 			} else {
// 				timeline.play();
// 				body.classList.add("overlay-active");
// 				navText.style.display = "none"; 
//                 navTextClose.style.display = "block"; 
				
				
// 			}
// 			header.style.zIndex = isOpen ? "1100" : "1100";
// 			isOpen = !isOpen;
// 		});

   
//   });
// }


// export default loadAndInitMobileNav;