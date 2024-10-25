import "./Header.css"
import logo from "../assets/logo.png"
import { IoMdArrowDropdown } from "react-icons/io";
import naijalogo from "../assets/naija.png"
const Header =()=>{
    return(
        <div className="HeaderContainer">
            <div className="logoNav">
                <img src={logo} alt="" />
                <div className="navigation">
                    <nav>Personal<span><IoMdArrowDropdown  size={20}/></span></nav>
                    <nav>Business<span><IoMdArrowDropdown size={20}/></span></nav>
                    <nav>Company<span><IoMdArrowDropdown size={20}/></span></nav>
                    <nav>Help<span><IoMdArrowDropdown size={20}/></span></nav>

                </div>

            </div>
            <div className="buttonnav">
                <button className="sigin">Sign In</button>
                <button className="join">Join Kuda</button>
                <img src={naijalogo} alt="" />


            </div>
        </div>
    )
}
export default Header;