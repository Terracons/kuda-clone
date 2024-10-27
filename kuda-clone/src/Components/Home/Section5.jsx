import ReUseAbleText from "./ReUseAbleText"
import section5image from "../../assets/sectionfive.png"
import sectionCSS from "./Section3.module.css"

const Section5 =()=>{
    return(
        <div className={sectionCSS.container}>
            <ReUseAbleText subheading = "We’re always happy to help you."
            
            description ="You can chat with us on the app, slide into our DMs, tweet, leave an Instagram comment, send an email or call. However you choose to reach out, there’ll always be a friendly person there to make your life easy."
            linkname = "Get Help"
            />
            <img src={section5image} alt="" />

        </div>
    )
}

export default Section5