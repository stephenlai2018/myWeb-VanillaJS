window.addEventListener('resize', updateSize)
function updateSize(){
  let width = document.body.clientWidth
  let height = document.body.clientHeight
  // let width = window.outerWidth
  // let height = window.outerHeight
  document.title = width+' x '+height
}