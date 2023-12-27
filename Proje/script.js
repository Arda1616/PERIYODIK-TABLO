document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.element');
  const infoBlocks = document.querySelectorAll('.infoBlock');
  const closeButtons = document.querySelectorAll('.closeButton');

  buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
          toggleInfoBlock(infoBlocks[index]);
      });
      
      button.addEventListener('mouseover', () => { //oto Açılma engelleme
          preventAutoOpen(infoBlocks[index]);  //oto Açılmayı engelleme
      });
  });

  closeButtons.forEach((closeButton, index) => {
      closeButton.addEventListener('click', (event) => {
          event.stopPropagation(); 
          closeInfoBlock(infoBlocks[index]);
      });
  });

  function toggleInfoBlock(block) {
      if (block.style.height === 'auto') {
          closeInfoBlock(block);
      } else {
          closeAllInfoBlocks();
          openInfoBlock(block);
      }
  }

  function openInfoBlock(block) {
      block.style.height = 'auto';
      block.style.opacity = 1;
      block.style.visibility = 'visible';
  }

  function closeInfoBlock(block) {
      block.style.height = '0';
      block.style.opacity = 0;
      block.style.visibility = 'hidden';
  }

  function closeAllInfoBlocks() {
      infoBlocks.forEach((block) => {
          closeInfoBlock(block);
      });
  }

  function preventAutoOpen(block) {
      if (block.style.height !== 'auto') {
          closeAllInfoBlocks();
      }
  }
});





// Tepedki yazılar 


document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.element-button');
  const elements = document.querySelectorAll('.element-group');
  let activeGroup = null;

  buttons.forEach((button) => {
      button.addEventListener('click', () => {
          const group = button.getAttribute('data-group');
          toggleOpacity(group);
      });
  });

  function toggleOpacity(groupToKeepVisible) {
      if (activeGroup === groupToKeepVisible) {
          // Eğer aynı butona tekrar tıklanırsa, opaklığı %100 yaparak eski haline döndür.
          elements.forEach((element) => {
              element.classList.remove('reduce-opacity');
          });
          activeGroup = null;
      } else {
          // İlgili element grubunun opaklığını düşür.
          elements.forEach((element) => {
              const elementGroup = element.classList[1];
              if (elementGroup === groupToKeepVisible) {
                  element.classList.remove('reduce-opacity');
              } else {
                  element.classList.add('reduce-opacity');
              }
          });
          activeGroup = groupToKeepVisible;
      }
  }
});





// Arka plan

function lines() {
  let sizeW = Math.random() * 12;
  let duration = Math.random() * 3;
  let e = document.createElement('div');
  e.setAttribute('class', 'circle');
  document.body.appendChild(e);
  e.style.width = 2 + sizeW + 'px';
  e.style.left = Math.random() * + innerWidth + 'px';
  e.style.animationDuration = 2 + duration + 's';

  setTimeout(function () {
      document.body.removeChild(e);
  }, 5000);
}



setInterval(function () {
  lines();
}, 200);

lines()




