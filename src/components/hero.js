
export default function Hero() {
    return (
        <>
            <div className="hero">
                
                <div className="location">
                    <button className="btn-loc">
                        <span>
                            <img src={process.env.PUBLIC_URL + "img/location-ico.png"}/>
                        </span>
                        <span className="btn-loc-txt">Uttara</span>
                    </button>
                </div>
                <div className="hero-serach-sect">
                    <input className="hero-search" type="text" placeholder="Search.."></input>
                    <button className="btn-hero-search">
                        <img src={process.env.PUBLIC_URL + "img/btn-search-ico.png"}/>
                    </button>
                </div>
                

            </div>
        </>
    )
}