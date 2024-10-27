import ReUseAbleText from "./ReUseAbleText"
import section4image from "../../assets/sectionfour.png"
import sectionCSS from "./Section2.module.css"

const Section4 =()=>{
    return(
        <div className={sectionCSS.container}>
            <img src={section4image} alt="" />
            <ReUseAbleText subheading = "Turn off access, turn on safety."
            
            description ="Life happens. Milk spills. Debit cards go missing. If that ever happens, you can block your missing card on the app so no one can use it. We’d like to see them try."
            linkname = "Learn more about Cards"
            />
            

        </div>
    )
}

export default Section4