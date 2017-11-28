const random = (max:any,min = 1) => {
  return Math.floor(Math.random() * (max - min) + min)
}
const sliders = document.querySelectorAll('.input')
const state = {
  h: 0,
  s: 100,
  l: 50
} as any
(() => {
  for(let i = 0; i < 20; i++){
    let el = document.createElement('div')
    el.classList.add('light')
    el.style.setProperty('--x', `${random(window.innerHeight,0)}px`)
    el.style.setProperty('--y', `${random(window.innerHeight,0)}px`)
    document.body.appendChild(el)
  }
})()
const handleSlide = (e:any) => {
  let id:string = e.target.id,
      value = e.target.value,
      styleVal = id !== 'h' ? `${value}%` : value
  state[id] = value
  document.body.style.setProperty(`--${id}`, styleVal)
}

sliders.forEach(slider => {
  slider.addEventListener('change', handleSlide,)
})