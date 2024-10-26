import "./Card.css"
const Card =(props)=>{
    return(
        <div className="Card"> 
        <button className="icons"> <h2>{props.icon}</h2> </button>
        <p>{props.description}</p>
        </div>
    )
}
export default Card;