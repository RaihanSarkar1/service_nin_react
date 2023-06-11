import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    function handleClick(){
        window.location.reload(false);
    }
    return (
        <nav>
            <img src={process.env.PUBLIC_URL + "img/snlogo.png"} alt="Service Nin logo" className="nav--img" onClick={handleClick}/>
            {/* Adding hamburger menu */}
            <a href="#" className="toggle-button">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            
            <ul className="nav--links">
                <li><a href="" onClick={() => setOpen(!open)}>All Services</a></li>
                <li><a href="">Earn With Us</a></li>
                <li><a href="">Track order</a></li>
                <li><a href="">Contact</a></li>
            </ul>

            <div className=".login">
                <a href="#" className="btn--login">Login</a>
            </div>

        </nav>
    )
}