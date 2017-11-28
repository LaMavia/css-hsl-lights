const sliders = document.querySelectorAll('.input')
const state = {
  h: 0,
  s: 100,
  l: 50
} as any
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