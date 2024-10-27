import ReUseAbleText from "./ReUseAbleText"
import section6image from "../../assets/sectionsix.png"
import sectionCSS from "./Section2.module.css"

const Section6 =()=>{
    return(
        <div className={sectionCSS.container}>
            <img src={section6image} alt="" />
            <ReUseAbleText subheading = "Fees as clear as glass."
            
            description ="We’re serious about free banking, and we will never, ever charge you for anything without your consent."
            linkname = "See all our fees"
            />
            

        </div>
    )
}

export default Section6