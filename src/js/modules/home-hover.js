function homeHover() {
    document.addEventListener('DOMContentLoaded', () => {
        const listItems = document.querySelectorAll('.home__item'); 
        const leftBlock = document.querySelector('.middleline__item--left');
        const middleBlock = document.querySelector('.middleline__item--middle');
        const rightBlock = document.querySelector('.middleline__item--right');

        let imagesData = {};
        fetch('../../data/home.json',{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
         })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                imagesData = data.images;
            })
            .catch((error) => {
                console.error('Error loading home.json:', error.message);
            });

        listItems.forEach((item) => {
            item.addEventListener('mouseenter', (event) => {
                const id = event.target.id; 
                const images = imagesData[id]; 

                if (images) {
                    leftBlock.innerHTML = '';
                    middleBlock.innerHTML = '';
                    rightBlock.innerHTML = ''; 

                    images.forEach((imageData) => {
                        const img = document.createElement('img');
                        img.src = imageData.img; 
                        img.alt = imageData.title;
                        img.id = imageData.id; 
                        img.classList.add('hover-image'); 

                        
                        if (imageData.id === `${id}-1`) {
                            leftBlock.appendChild(img); 
                        } else if (imageData.id === `${id}-2`) {
                            middleBlock.appendChild(img); 
                        } else if (imageData.id === `${id}-3`) {
                            rightBlock.appendChild(img); 
                        }
                    });

                    
                    leftBlock.style.display = 'block';
                    middleBlock.style.display = 'block';
                    rightBlock.style.display = 'block';

                   
                    const rect = event.target.getBoundingClientRect(); 
                    leftBlock.style.top = `${rect.bottom + window.scrollY}px`;
                    middleBlock.style.top = `${rect.bottom + window.scrollY}px`;
                    rightBlock.style.top = `${rect.bottom + window.scrollY}px`;
                    leftBlock.style.left = `${rect.left}px`;
                    middleBlock.style.left = `${rect.left}px`;
                    rightBlock.style.left = `${rect.left}px`;
                }
            });

            item.addEventListener('mouseleave', () => {
                leftBlock.innerHTML = '';
    middleBlock.innerHTML = '';
    rightBlock.innerHTML = '';
            });
        });
    });
}

export default homeHover;