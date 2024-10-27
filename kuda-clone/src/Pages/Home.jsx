
import CardSection from "../Components/Home/CardSection";
import Hero from "../Components/Home/Hero";
import Section1 from "../Components/Home/Section1";
import Section4 from "../Components/Home/Section4";
import Section2 from "../Components/Home/Section2";
import Section3 from "../Components/Home/Section3";
import "./Home.css"
import Section5 from "../Components/Home/Section5";
import Section6 from "../Components/Home/Section6";
import Testimonial from "../Components/Home/Testimonial";
const Home =()=>{
    return(
        <div>
            <Hero/>
            <CardSection/>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>  
            <Testimonial/>  
        </div>
    )
}
export default Home;