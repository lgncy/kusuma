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
});
