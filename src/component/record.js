import react from 'react';


export default class Student extends react.Component {

    render() {
        return <li>
            【学号】{this.props.sNo}
            【姓名】{this.props.name} 
           
        </li>
    }
}