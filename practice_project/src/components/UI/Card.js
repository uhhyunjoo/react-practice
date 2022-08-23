import './Card.css'
// Wrapper Component
function Card(props){
    const classes = 'card ' + props.className;
    // 이를 통해, 밖에서 className 으로 받는 것들이 문자열로 추가된다.
    return (
        <div className= {classes}>{props.children}</div>
    );
}
export default Card