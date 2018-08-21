let movie = document.querySelector('.video')
let title = document.querySelector('.content')
let mov1 = document.querySelector('.mov1')
let mov2 = document.querySelector('.mov2')
let mov3 = document.querySelector('.mov3')
let mov4 = document.querySelector('.mov4')
let mov5 = document.querySelector('.mov5')
let mov6 = document.querySelector('.mov6')
let link = document.querySelector('p')

movie.style.display = 'none'

link.addEventListener('click', reloadMovie())

function reloadMovie(){
  mov1.onclick = function(){
    title.style.display = 'none'
    mov1.classList.add('active')
    mov2.classList.remove('active')
    mov3.classList.remove('active')
    mov4.classList.remove('active')
    mov5.classList.remove('active')
    mov6.classList.remove('active')
    movie.style.display = 'block'
    document.querySelector('.video').src = 'https://www.youtube.com/embed/SwO1MLL5NzI'
  }
  mov2.onclick = function(){
    title.style.display = 'none'
    mov1.classList.remove('active')
    mov2.classList.add('active')
    mov3.classList.remove('active')
    mov4.classList.remove('active')
    mov5.classList.remove('active')
    mov6.classList.remove('active')
    movie.style.display = 'block'
    document.querySelector('.video').src = 'https://www.youtube.com/embed/JAHQqHnovDM'
  }
  mov3.onclick = function(){
    title.style.display = 'none'
    mov1.classList.remove('active')
    mov2.classList.remove('active')
    mov3.classList.add('active')
    mov4.classList.remove('active')
    mov5.classList.remove('active')
    mov6.classList.remove('active')
    movie.style.display = 'block'
    document.querySelector('.video').src = 'https://www.youtube.com/embed/lRCfdhMw5A4'
  }
  mov4.onclick = function(){
    title.style.display = 'none'
    mov1.classList.remove('active')
    mov2.classList.remove('active')
    mov3.classList.remove('active')
    mov4.classList.add('active')
    mov5.classList.remove('active')
    mov6.classList.remove('active')
    movie.style.display = 'block'
    document.querySelector('.video').src = 'https://www.youtube.com/embed/37rl8uz7WjA'
  }
  mov5.onclick = function(){
    title.style.display = 'none'
    mov1.classList.remove('active')
    mov2.classList.remove('active')
    mov3.classList.remove('active')
    mov4.classList.remove('active')
    mov5.classList.add('active')
    mov6.classList.remove('active')
    movie.style.display = 'block'
    document.querySelector('.video').src = 'https://www.youtube.com/embed/i0RiOmbiT_c'
  }
  mov6.onclick = function(){
    title.style.display = 'none'
    mov1.classList.remove('active')
    mov2.classList.remove('active')
    mov3.classList.remove('active')
    mov4.classList.remove('active')
    mov5.classList.remove('active')
    mov6.classList.add('active')
    movie.style.display = 'block'
    document.querySelector('.video').src = 'https://www.youtube.com/embed/1upXcky1S8s'
  }
}
