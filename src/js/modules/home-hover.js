function homeHover() {
    const bright = document.getElementById('bright');
    const arch = document.getElementById('arch');
    const drone = document.getElementById('drone');
    const space = document.getElementById('space');

    const middleItemLeft = document.querySelector('.middleline__item-left');
    const middleItemMiddle = document.querySelector('.middleline__item-middle');
    const middleItemRight = document.querySelector('.middleline__item-right');



    bright.addEventListener('mouseenter', () => {
        middleItemLeft.classList.add('middleline__item-left--bright');
        middleItemMiddle.classList.add('middleline__item-middle--bright');
        middleItemRight.classList.add('middleline__item-right--bright');
    });

    arch.addEventListener('mouseenter', () => {
        middleItemLeft.classList.add('middleline__item-left--arch');
        middleItemMiddle.classList.add('middleline__item-middle--arch');
        middleItemRight.classList.add('middleline__item-right--arch');
    })

    drone.addEventListener('mouseenter', () => {
        middleItemLeft.classList.add('middleline__item-left--drone');
        middleItemMiddle.classList.add('middleline__item-middle--drone');
        middleItemRight.classList.add('middleline__item-right--drone');
    })

    space.addEventListener('mouseenter', () => {
        middleItemLeft.classList.add('middleline__item-left--space');
        middleItemMiddle.classList.add('middleline__item-middle--space');
        middleItemRight.classList.add('middleline__item-right--space');
    })

    bright.addEventListener('mouseleave', () => {
        middleItemLeft.classList.remove('middleline__item-left--bright');
        middleItemMiddle.classList.remove('middleline__item-middle--bright'); 
        middleItemRight.classList.remove('middleline__item-right--bright');
    });

    arch.addEventListener('mouseleave', () => {
        middleItemLeft.classList.remove('middleline__item-left--arch');
        middleItemMiddle.classList.remove('middleline__item-middle--arch'); 
        middleItemRight.classList.remove('middleline__item-right--arch');
    })

    drone.addEventListener('mouseleave', () => {
        middleItemLeft.classList.remove('middleline__item-left--drone');
        middleItemMiddle.classList.remove('middleline__item-middle--drone'); 
        middleItemRight.classList.remove('middleline__item-right--drone');
    })
    
    space.addEventListener('mouseleave', () => {
        middleItemLeft.classList.remove('middleline__item-left--space');
        middleItemMiddle.classList.remove('middleline__item-middle--space'); 
        middleItemRight.classList.remove('middleline__item-right--space');
    })

}

export default homeHover;