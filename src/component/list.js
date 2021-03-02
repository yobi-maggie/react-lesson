import Student from './record';

export default function List (props) {
    const listMap = props.data.map((item) => {
        return <Student {...item} key={item.sNo}></Student>
    })

    return <>
        {listMap}
    </>
}