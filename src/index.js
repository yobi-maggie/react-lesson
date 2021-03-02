import React from 'react';
import ReactDOM from 'react-dom';
import src1 from './assets/1.jpg';
import src2 from './assets/2.jpg';
import src3 from './assets/3.jpg';

import "./index.css";
const srcs = [src1, src2, src3];
let index = 0;
let timer;
const container =  document.getElementById('root');
function render () {
    ReactDOM.render(<img src={srcs[index]} alt={index}></img>, container)
}
function start () {
    clearInterval(timer);
    timer = setInterval(() => {
        index = (index + 1) % 3;
        render()
    }, 1000)
}

container.onmouseenter = () => {
    clearInterval(timer);
}
container.onmouseleave = () => {
    start()
}
render()
start()