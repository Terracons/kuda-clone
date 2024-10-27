import ReviewCSS from "./Review.module.css"

const Review = (props)=>{
    return (
        <div className={ReviewCSS.container}>
            <p>{props.description}</p>
            <div className={ReviewCSS.bio}>
                <img src={props.image} alt="" />
                <h3>{props.name}</h3>
            </div>
        

        </div>
    )
}
export default Review;