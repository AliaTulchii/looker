import title from '/src/img/home/Union.png';

function addedImg() {
    const div = document.querySelector('.title__img');
      div.style.backgroundImage = `url(${title})`;
      div.style.backgroundSize = 'cover'; // Опціонально: підлаштувати розмір
      div.style.backgroundPosition = 'center'; // Опціонально: вирівняти
  }

export default addedImg;