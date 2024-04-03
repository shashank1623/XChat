var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 500,
    delay: (el, i) => 50 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 10,
    easing: "easeOutExpo",
    delay: 200
  });