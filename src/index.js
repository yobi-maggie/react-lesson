import react from 'react';
import reactDOM from 'react-dom';
import Page from './component/page';
import List from './component/list';
const container = document.getElementById('root');

function render({currentPage = 1, size = 10}) {
    getData(currentPage, size)

}

function getData(page, size) {
    fetch(`http://open.duyiedu.com/api/student/findByPage?appkey=DuYimeiqi_1564986205860&page=${page}&size=${size}`).then((res) => res.json()).then(data => {
        reactDOM.render(<>
            <List data={data.data.findByPage}></List>
            <Page currentPage={page} totalPage={Math.ceil(data.data.cont / size)} onChangeHandle={(p) => {
                render({currentPage: p, size: 10})
            }}></Page>
        </>,container)
    })

}



render({currentPage: 1, size: 10})