export default function Services() {
    return (
        <div className="services-box">
            <ul className="service-items">
                <li>
                    <a href="#">
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
                        <p>Health & Emergency</p>
                    </a>
                </li>
            </ul>
        </div>
    )
}