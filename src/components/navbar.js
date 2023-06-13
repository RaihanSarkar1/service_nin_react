import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    function handleClick(){
        window.location.reload(false);
    }
    return (
        <nav>
            <img src={process.env.PUBLIC_URL + "img/snlogo.png"} alt="Service Nin logo" className="nav--img" onClick={handleClick}/>
            {/* Adding Signup/login and search icon */}
            <div className="nav--icons">
                <a href="#" className="search--ico">
                    <img src={process.env.PUBLIC_URL + "img/search-ico.png"} alt="Search Icon" className="search--img" onClick={handleClick}/>
                </a>
                <a href="#" className="login--ico">
                    <img src={process.env.PUBLIC_URL + "img/login-ico.png"} alt="login Icon" className="login--img" onClick={handleClick}/>
                </a>
            </div>
            
            
            
            {/* Adding hamburger menu */}
            <a href="#" className="toggle-button" onClick={() => setOpen(!open)}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            
            <ul className={` ${open? "nav--links":"nav--closed"}`}>
                <li><a href="#">All Services</a></li>
                <li><a href="#">Earn With Us</a></li>
                <li><a href="#">Track order</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            <div className=".login">
                <a href="#" className="btn--login">Login</a>
            </div>

        </nav>

        
    )
}