import React from 'react'

export default function list(props) {
    let listElement = [];
    props.data.forEach((item, index) => {
        listElement.push(<li key={index}>
            【学号】{item.sNo}
            【姓名】{item.name}
        </li>)
    })
    
    return (
        <ul>
            {listElement}
        </ul>
    )
}
