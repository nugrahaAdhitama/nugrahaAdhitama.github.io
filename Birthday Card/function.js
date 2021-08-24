function scrollAppear(){
  var introText = document.querySelector('.two');
  var introPosition = introText.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.3;

  if(introPosition < screenPosition) {
      introText.classList.add('is-showing');
  }
}

function scrollAppearTwo(){
  var introText = document.querySelector('.three');
  var introPosition = introText.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.3;

  if(introPosition < screenPosition) {
      introText.classList.add('is-showing');
  }
}

function scrollAppearThree(){
  var introText = document.querySelector('.four');
  var introPosition = introText.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.3;

  if(introPosition < screenPosition) {
      introText.classList.add('is-showing');
  }
}

function JalankanScript() {
  window.addEventListener('scroll',scrollAppear);
  window.addEventListener('scroll',scrollAppearTwo);
  window.addEventListener('scroll',scrollAppearThree);
}

JalankanScript();