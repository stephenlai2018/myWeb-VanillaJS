let content = document.querySelector('.content')
let a = document.querySelector('a')

a.addEventListener('click', fadeIn)
function fadeIn(){
  content.style.opacity = 0
  setInterval(function(){
    content.style.opacity = 1
  }, 10)
}


