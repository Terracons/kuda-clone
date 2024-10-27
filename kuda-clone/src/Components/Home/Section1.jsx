import ReUseAbleText from "./ReUseAbleText"
import section1image from "../../assets/sectionone.png"
import sectionCSS from "./Section1.module.css"

const Section1 =()=>{
    return(
        <div className={sectionCSS.container}>
            <ReUseAbleText subheading = "Your phone + our app + a debit card = a simpler life."
            
            description ="We designed a money app for your lifestyle, and you can get a debit card to go with it. That's all you need to make the right money moves."
            linkname = "Open An Account in Minutes"
            />
            <img src={section1image} alt="" />

        </div>
    )
}

export default Section1