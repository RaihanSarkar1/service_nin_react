import { useRef } from "react"

export default function Hero() {

    const modalRef = useRef(null);

    function handleLocClick() {
        modalRef.current.showModal();
        
        // Close modal on outside click
        modalRef.current.addEventListener("click", e => {
        const dialogDimensions = modalRef.current.getBoundingClientRect()
            if (
                e.clientX < dialogDimensions.left ||
                e.clientX > dialogDimensions.right ||
                e.clientY < dialogDimensions.top ||
                e.clientY > dialogDimensions.bottom
            ) {
                modalRef.current.close()
            }
            })  
    }

    return (
        <>
        <div className="hero">
            
            <div className="location" onClick={() => handleLocClick()}>
                <button className="btn-loc">
                    <span>
                        <img src={process.env.PUBLIC_URL + "img/location-ico.png"}/>
                    </span>
                    <span className="btn-loc-txt">Mohammadpur</span>
                </button>
            </div>
            <div className="hero-serach-sect">
                <input className="hero-search" type="text" placeholder="Search.."></input>
                <button className="btn-hero-search">
                    <img src={process.env.PUBLIC_URL + "img/btn-search-ico.png"}/>
                </button>
            </div>
            

        </div>

        <dialog className="modal" ref={modalRef}>
            <div className="modal-title">
                <img src={process.env.PUBLIC_URL + "img/modal-loc.png"} />
                <span className="modal-text">Select your Area in Dhaka</span>
            </div>
            <div className="modal-body">
                <input className="modal-search"></input>
                <button className="modal-button">Current Location</button>
            </div>
        </dialog>
        </>
    )
}