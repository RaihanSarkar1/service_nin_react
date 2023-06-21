
export default function Hero() {
    
    const modal = document.querySelector('dialog');
    function handleLocClick() {
        modal.showModal();

    }

    // Close modal on clicking outside
    modal.addEventListener("click", e => {
        const dialogDimensions = modal.getBoundingClientRect()
        if (
          e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom
        ) {
          modal.close()
        }
      })

    return (
        <>
            <div className="hero">
                
                <div className="location">
                    <button className="btn-loc" onClick={() => {handleLocClick()}}>
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

            <dialog className="modal">
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