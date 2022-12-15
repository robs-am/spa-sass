var input = document.querySelector('.images')

var glide = new Glide('.images', {
  autoplay: input.value,
  hoverpause: false,
  perView: 2
})

input.addEventListener('input', function (event) {
  glide.update({
    autoplay: (event.target.value != 0) ? event.target.value : false
  })
})

glide.mount()


//new Glide('.images', {}).mount();