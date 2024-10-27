import ReUseAbleTextCSS from "./ReUseAbleText.module.css"
import { IoIosArrowForward } from "react-icons/io";
const ReUseAbleText=(props)=>{
    return(
        <div className={ReUseAbleTextCSS.container}> 
         <h1 className={ReUseAbleTextCSS.subheading}>{props.subheading}</h1>
         <p className={ReUseAbleTextCSS.paragraph}>{props.description}</p>
         <p className={ReUseAbleTextCSS.link}>{props.linkname}<span><IoIosArrowForward size={18}/></span></p>
        </div>
    )
}
export default ReUseAbleText;