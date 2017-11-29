const random = (max:number,min = 1) => {
  return Math.floor(Math.random() * (max - min) + min)
}

class Light{
  x:number
  y:number
  dx:number
  dy:number
  el:HTMLElement
  constructor(){
    this.x = random(100,0)
    this.y = random(100,0)
    this.dx = 1
    this.dy = 1
    this.el
  }

  init(){
    let el = document.createElement('div')
    el.classList.add('light')
    this.el = el
    document.body.appendChild(el)
    el.style.setProperty('--x', `${this.x}vw`)
    el.style.setProperty('--y', `${this.y}vh`)
    el.style.setProperty('--rand', `${Math.random()}`)
  }
  update(){
    if(this.x < 0 || this.x > 100) this.dx *= -1
    if(this.y < 0 || this.y > 100) this.dy *= -1
    this.x += this.dx
    this.y += this.dy
  }
  draw(){
    this.el.style.setProperty('--x',`${this.x}vw`)
    this.el.style.setProperty('--y',`${this.y}vh`)
  }
}
const lights:Light[] = []
const state = {
  h: 0,
  s: 100,
  l: 50
} as any
(() => {
  const slowdown = 20
  for(let i = 0; i < 100; i++){
    let newLight = new Light()
    newLight.init()
    lights.push(newLight)
  }
})()
const handleSlide = (e:any) => {
  let id:string = e.target.id,
      value = e.target.value,
      styleVal = id !== 'h' ? `${value}%` : value
  state[id] = value
  document.body.style.setProperty(`--${id}`, styleVal)
}
const sliders = document.querySelectorAll('.input')
sliders.forEach(slider => {
  slider.addEventListener('change', handleSlide)
})


const animate = () => {
  requestAnimationFrame(animate)
  lights.forEach(light => {
    light.update()
    light.draw()
  })
}
requestAnimationFrame(animate)