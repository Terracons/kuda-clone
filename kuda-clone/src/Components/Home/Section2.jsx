import ReUseAbleText from "./ReUseAbleText"
import section2image from "../../assets/sectiontwo.png"
import sectionCSS from "./Section2.module.css"

const Section2 =()=>{
    return(
        <div className={sectionCSS.container}>
            <img src={section2image} alt="" />
            <ReUseAbleText subheading = "It’s your money, we just help you manage it."
            
            description ="Save it, spend it, send it. It’s up to you. Whatever you choose to do with your money, we’ll make sure it’s done better and free of charge. We take responsibility for that."
            
            />
            

        </div>
    )
}

export default Section2;