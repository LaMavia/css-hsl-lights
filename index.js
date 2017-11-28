"use strict";
const random = (max, min = 1) => {
    return Math.floor(Math.random() * (max - min) + min);
};
const sliders = document.querySelectorAll('.input');
const state = {
    h: 0,
    s: 100,
    l: 50
};
(() => {
    for (let i = 0; i < 20; i++) {
        let el = document.createElement('div');
        el.classList.add('light');
        el.style.setProperty('--x', `${random(100, 0)}%`);
        el.style.setProperty('--y', `${random(100, 0)}%`);
        el.style.setProperty('--rand', `${Math.random()}`);
        document.body.appendChild(el);
    }
})();
const handleSlide = (e) => {
    let id = e.target.id, value = e.target.value, styleVal = id !== 'h' ? `${value}%` : value;
    state[id] = value;
    document.body.style.setProperty(`--${id}`, styleVal);
};
sliders.forEach(slider => {
    slider.addEventListener('change', handleSlide);
});
