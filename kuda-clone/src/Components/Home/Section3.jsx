import ReUseAbleText from "./ReUseAbleText"
import section3image from "../../assets/sectionthree.png"
import sectionCSS from "./Section3.module.css"

const Section3 =()=>{
    return(
        <div className={sectionCSS.container}>
            <ReUseAbleText subheading = "Save money as you spend it, seriously."
            
            description ="You can’t avoid spending. That’s how you pay for your needs. But we can help you put money away every time you pay for something. Just set a percentage to save and watch your money grow."
            linkname = "See all our Savings"
            />
            <img src={section3image} alt="" />

        </div>
    )
}

export default Section3