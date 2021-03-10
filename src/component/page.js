import React, { Component } from 'react'
import './page.css';
export default class page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalPage: props.totalPage || 1,
            currentPage: props.currentPage || 1,
            onChangeHandle: props.onChangeHandle || ((page) => { })
        }
    }

    change(page) {
        this.setState({
            currentPage: page,
        })
        this.state.onChangeHandle && this.state.onChangeHandle(page)
    }
    render() {

        let nums = [];
        const datas = this.state;
        // 中间的页码
        if (datas.totalPage <= 10) {
            for (let i = 0; i < datas.totalPage; i++) {
                nums.push(<li className={i + 1 === datas.currentPage ? 'current' : ''}
                    onClick={() => { this.change(i + 1, datas) }}
                    key={i}
                >{i + 1}</li>)
            }
        } else {
            if (datas.currentPage <= 5) {
                for (let i = 0; i < 10; i++) {
                    nums.push(<li className={i + 1 === datas.currentPage ? 'current' : ''}
                        key={i}
                        onClick={() => { this.change(i + 1, datas) }}>{i + 1}</li>)
                }
            } else {
                for (let i = datas.currentPage - 5; i < datas.currentPage + 5; i++) {
                    nums.push(<li className={i + 1 === datas.currentPage ? 'current' : ''}
                        key={i}
                        onClick={() => { this.change(i + 1, datas) }}>{i + 1}</li>)
                }
            }
        }
        return (
            <ul className="page">
                <li className="prev" disabled={datas.currentPage > 1 ? false : true} onClick={() => {datas.currentPage > 1 && this.change(datas.currentPage - 1, datas) }}>上一页</li>
                {nums}
                <li className="next" disabled={datas.currentPage < datas.totalPage ? false : true} onClick={() => { datas.currentPage < datas.totalPage && this.change(datas.currentPage + 1, datas) }}>下一页</li>
            </ul>
        )
    }
}
