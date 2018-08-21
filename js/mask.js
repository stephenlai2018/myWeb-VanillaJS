let main = document.querySelector('.main')
let video = document.querySelector('.video')

function maskIn(){
  video.style.backgroundColor = '#000'
  video.style.opacity = 0.5
  // main.style.opacity = 0.5
  // video.pause()

}
function maskOut(){
  video.style.backgroundColor = 'rgba(186, 219, 199)'
  video.style.opacity = 1
  // video.play()
}