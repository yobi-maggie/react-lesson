// import react from 'react';
import reactDOM from 'react-dom';
import List from './component/list';

const container = document.getElementById('root');
function getData() {
    fetch('http://open.duyiedu.com/api/student/findAll?appkey=DuYimeiqi_1564986205860')
        .then((res) => res.json())
        .then((res) => {
            render(res.data);
        })
}

function render(data) {

    const list = <ul>
        <List data={data}></List>
    </ul>
    reactDOM.render(list, container)
}


getData()