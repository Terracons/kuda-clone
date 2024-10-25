import "./Hero.css"
import { FaApple } from "react-icons/fa6";
import heroimg from "../../assets/hero.png"
import playstoreicon from "../../assets/icons8-google-play.svg"

const Hero =()=>{
    return(
        <div className="HeroContainer">
            <div className="heroText">
                <h1>
                The money app for Africans.
                </h1>
                <p>Make free transfers, enjoy cashless payment options and earn interest on your savings with Kuda</p>
                <div className="appleplaystore">
                    <button><div className="playstore">
                        <div className="icon">
                            <FaApple  size={30}/>

                        </div>
                        <div className="text">
                            <p>Download on the</p>
                            <h3>App Store</h3>
                        </div>
                        </div></button>
                        <button><div className="playstore">
                        <div className="icon">
                            <img src={playstoreicon} alt="" />

                        </div>
                        <div className="text">
                            <p>Get it on</p>
                            <h3>Google Play</h3>
                        </div>
                        </div></button>
                </div>

            </div>
            <div className="heroimg">
                <img src={heroimg} alt="" />

            </div>
            
        </div>
    )
}
export default Hero;