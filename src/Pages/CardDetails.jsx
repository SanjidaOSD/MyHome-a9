
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BsHouseHeartFill } from "react-icons/bs";
import { FaHandPointRight } from "react-icons/fa";
import { RiUserStarLine } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";


// AOS
import AOS from 'aos';
import 'aos/dist/aos.css'; // ..
import { Helmet } from "react-helmet";
AOS.init();



const CardDetails = () => {
    const [cardsDetails, setCardsDetails] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setCardsDetails(data))
            .catch(error =>
                console.error("Error:", error));
    }, []);

    const { id } = useParams();

    // Accessing state data after it's been populated
    const cardDetail = cardsDetails.find(card => card.id === id);

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Card Details</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            {/* <h2 className="text-3xl">This is card details:</h2> */}
            {/* <p>ID: {id}</p> */}
            {cardDetail && (
                <div data-aos="zoom-in" data-aos-duration="1000" className="card card-side bg-base-100 mt-16 shadow-xl">
                    <figure data-aos="zoom-in-right">
                        <img className="h-full w-full" src={cardDetail.image} alt="image" />
                    </figure>
                    <div data-aos="zoom-in-left" className="card-body">
                        <h2 className="card-title text-red-800"><BsHouseHeartFill className="h-6 w-6"></BsHouseHeartFill>{cardDetail.state_title}<BsHouseHeartFill className="h-6 w-6"></BsHouseHeartFill></h2>
                        <p className="flex font-semibold text-red-800 items-center gap-2"><RiUserStarLine></RiUserStarLine>{cardDetail.segment_name}</p>
                        <p className="flex text-gray-800">{cardDetail.description}</p>
                        <p className="flex items-center gap-2 text-bold"><span className="font-bold text-gray-800">Area</span>: <span>{cardDetail.area}</span></p>
                        <hr />
                        <div className="lg:flex">
                            <p className="flex items-center gap-2 font-bold"><FaHandPointRight className="h-3 w-3"></FaHandPointRight>Status: <span className="text-orange-600 font-bold">{cardDetail.status}</span></p>
                            <p className="font-bold">Price: <span className="text-orange-600 font-bold">{cardDetail.price}</span></p>
                        </div>
                        <hr />
                        <div className="mr-16">
                            <ul>
                                <h2 className="font-bold text-gray-800">Our facilities:</h2>
                                {cardDetail.facilities.map((facility, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <span className="text-green-600 font-bold">✓</span> {/* Checkmark or any other icon */}
                                        <span className="text-gray-800">{facility}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <hr />
                        <p className="flex items-center gap-3"><FaLocationDot></FaLocationDot> <span className="text-orange-600">{cardDetail.location}</span></p>
                        <div className="card-actions justify-end">
                            <Link to='/' className="btn bg-slate-500">Back</Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CardDetails;
