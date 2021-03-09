// import react from 'react';
import reactDOM from 'react-dom';
import Ball from './component/ball';

const container = document.getElementById('root');

function render(data) {

    const list = <ul>
        <Ball ></Ball>
    </ul>
    reactDOM.render(list, container)
}


render()