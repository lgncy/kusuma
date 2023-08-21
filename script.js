document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.querySelector('.mode-button');
  const body = document.body;
  const profileCard = document.querySelector('.profile-card');
  const profileImg = document.querySelector('.profile-img');
  const background = document.querySelector('.background-image'); 
  
  toggleButton.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    profileCard.classList.toggle('dark-mode');
  
    profileCard.classList.add('animate');
  
    setTimeout(function() {
      profileCard.classList.remove('animate');
    }, 500);
  
    profileImg.classList.add('hide');
  
    setTimeout(function() {
      if (body.classList.contains('dark-mode')) {
        profileImg.src = 'sele.jpg';
        profileImg.style.filter = 'none';
        background.style.backgroundImage = "url('gambar_malam.jpg')"; 
      } else {
        profileImg.src = 'kafka2.jpg';
        profileImg.style.filter = 'none';
        background.style.backgroundImage = "url('anime4.jpg')"; 
      }

      profileImg.classList.remove('hide');
    }, 500);
  });
  const typingText = "Web Developer | Programmer"; // Teks yang ingin ditampilkan
  const typingElement = document.getElementById('typing-text');
  const cursorElement = document.createElement('span');
  cursorElement.className = 'typing-cursor';
  typingElement.appendChild(cursorElement);

  let charIndex = 0;
  let animationDelay = 50; // Waktu pengetikan tiap karakter (ms)

  function typeText() {
    const text = typingText.slice(0, charIndex);
    typingElement.textContent = text;

    charIndex += 1;

    if (charIndex <= typingText.length) {
      setTimeout(typeText, animationDelay);
    }
  }

  typeText();
});
