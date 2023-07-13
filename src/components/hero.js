import { useRef, useState } from "react"

export default function Hero() {

    const modalRef = useRef(null);

    // Creating a list of locations
    const locations = ['Hatirjheel Lake', 'Abdullahpur', 'Uttara', 'Mirpur', 'Pallabi', 'Kazipara', 'Kafrul', 'Agargaon', 'Sher-e-Bangla Nagar', 'Cantonment area', 'Banani', 'Gulshan', 'Mohakhali', 'Bashundhara R/A', 'Banasree', 'Baridhara', 'Uttarkhan', 'Dakshinkhan', 'Bawnia', 'Khilkhet', 'Tejgaon', 'Farmgate', 'Mohammadpur', 'Rampura', 'Badda', 'Satarkul', 'Beraid', 'Khilgaon', 'Vatara', 'Gabtali']

    // Creating a found state or result of the search app
    const [loc, setLoc] = useState('Bashundhara');

    // Creating a state that shows the search result locations
    const [foundLoc, setFoundLoc] = useState(locations);

    // When a location is clicked in the modal update loc & close modal
    function handleLocsClick(e) {
        console.log(e);
        setLoc(e);
        modalRef.current.close()
    }

    // filtering list after string is typed in input
    const filter = (e) => {
        // getting the value of the input field using event
        const searchword = e.target.value;

        if (searchword !== '') {
            const result = locations.filter((location) => {
                return location.toLowerCase().startsWith(searchword.toLowerCase());
            });
            setFoundLoc(result);
        } else {
            setFoundLoc(locations);
        }
    }



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
            
            <button className="btn-loc" onClick={() => handleLocClick()}>
                <span>
                    <img src={process.env.PUBLIC_URL + "img/location-ico.png"}/>
                </span>
                <span className="btn-loc-txt">{loc}</span>
            </button>
            

            <div className="hero-search-sect">


                
                <input className="hero-search" type="text" placeholder="Search.."></input>
                <button className="btn-hero-search">
                    <img src={process.env.PUBLIC_URL + "img/btn-search-ico.png"}/>
                </button>
            </div>
            

        </div>

        <dialog className="modal" ref={modalRef}>
            <div className="modal-title">
                <img src={process.env.PUBLIC_URL + "img/mod-loc.png"} />
                <span className="modal-text">Select your Area in Dhaka</span>
            </div>
            <div className="modal-body">
                <input className="modal-search" onChange={filter}></input>
                <button className="modal-button">Current Location</button>

                <div className="locations">
                    {foundLoc.map((location, index) => (
                        <li key={index} onClick={() => {handleLocsClick(location)}}>
                            <span className="location" >{location}</span>
                        </li>
                    ))}
                </div>
            </div>
        </dialog>
        </>
    )
}