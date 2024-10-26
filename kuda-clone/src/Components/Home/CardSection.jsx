import Card from "./Card";
import "./CardSection.css"
import { FaCreditCard } from "react-icons/fa";
const CardSection =()=>{
    return(
        <div className="CardContainer">
            <div className="upper">
            <Card  icon = {<FaCreditCard  size={20}/>} description ="Order a Kuda card on the app with pickup and delivery options." /> 
            <Card  icon = {<FaCreditCard  size={20}/>} description ="Enjoy cashless payment options online and offline" /> 
            <Card  icon = {<FaCreditCard  size={20}/>} description ="Pay your essential bills and buy gift cards easily." /> 
            </div>
            <div className="lower">
            <Card  icon = {<FaCreditCard  size={20}/>} description ="Get 25 free transfers to Nigerian banks every month." /> 
            <Card  icon = {<FaCreditCard  size={20}/>} description ="Save money automatically any time you spend." /> 

            </div>
                
        </div>
    )
}
export default CardSection;