import "./Mainstyle.css";
import Signup from "../../ui/Signup";
import Button from "react-bootstrap/Button"
import SecondMain from "../second-main/SecondMain"
import Thirdmain from "../third-main/Thirdmain";
import FourthMain from "../fourth-main/FourthMain";
import FifthMain from "../fifth-main/FifthMain";
import SixthMain from "../sixth-main/SixthMain";
import LastMain from "../last-main/LastMain";
import { BrowserRouter,Route } from "react-router-dom";
import { Link } from "react-router-dom";
function handleclick(e){
    return window.location.href="/SecondMain"
}

function Main() {
    return(
        <>
            <div className="main">
                <div className="container">
                    <div className="header">
                        <h1 className="logo">Wallnaut</h1>
                        <a className = "login" href="/">Log in</a>
                        <Button className="sign-up">Sign Up</Button>
                    </div>
                    <div className="main-explained">
                        <h2 className="join">Join Wallnaut Nation to be Leader of industry</h2>
                        <p className="join-explained">The Wallnaut Virtual Study Club is a #1 Dental Study Club Platform 
                        which grows Dentistry bigger by providing major specialized online and offline courses</p>
                        <div className="buttons">
                            <Button className="signup" >Sign Up</Button>
                                <Button className="signup" href="#Main">
                                    Read more
                                    </Button>
                        </div>
                    </div>
                </div>
            </div>
            <SecondMain />
            <Thirdmain />
            <FourthMain />
            <FifthMain />
            <SixthMain />
            <LastMain />
        </>
    );
}

export default Main;