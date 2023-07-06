import { useRef } from "react"

export default function Services() {
    const arrowRef = useRef([]);

    const servRef = useRef(null);

    const firstRef = useRef(null); 

    const showHideIcons= () => {
        // console.log(arrowRef.current[0])
        console.log(servRef.current.scrollLeft)
        arrowRef.current[0].style.display = servRef.current.scrollLeft == 0 ? "none" : "block";
    }
    
    
    function handleClick(e) {
        let firstIconWidth = firstRef.current.clientWidth + 20;
        // console.log(e.target);
        
        servRef.current.scrollLeft += e.target.id == "left" ? -firstIconWidth : firstIconWidth;
        setTimeout(() => showHideIcons(), 300); //calling showhide after 300ms
    }



    return (
        <div className="services-box" >
            <i onClick={handleClick} ref={(el) => (arrowRef.current[0] = el)}>
                <img id="left" src={process.env.PUBLIC_URL + "img/left.png"} />
            </i>
            <ul className="service-items" ref={servRef}>
                <li>
                    <a href="#" ref={firstRef}>
                        <img src={process.env.PUBLIC_URL + "img/com.png"} />
                        <p>Computer & IT</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={process.env.PUBLIC_URL + "img/home.png"} />
                        <p>Home Appliance</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={process.env.PUBLIC_URL + "img/bulb.png"} />
                        <p>Electrical & Electronics</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={process.env.PUBLIC_URL + "img/clean.png"} />
                        <p>Plumbing and Cleaning</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={process.env.PUBLIC_URL + "img/health.png"} />
                        <p id="healthp">Health & Emergency</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={process.env.PUBLIC_URL + "img/all.png"} />
                        <p>All Services</p>
                    </a>
                </li>
            </ul>
            <i onClick={handleClick} ref={(el) => (arrowRef.current[1] = el)}> 
                <img id="right" src={process.env.PUBLIC_URL + "img/right.png"} />
            </i>
        </div>
    )
}