
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BsHouseHeartFill } from "react-icons/bs";
import { FaHandPointRight } from "react-icons/fa";
import { RiUserStarLine } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";

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
            {/* <h2 className="text-3xl">This is card details:</h2> */}
            {/* <p>ID: {id}</p> */}
            {cardDetail && (
                <div className="card card-side bg-base-100 mt-16 shadow-xl">
                    <figure>
                        <img className="h-full w-full" src={cardDetail.image} alt="image" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title"><BsHouseHeartFill className="h-6 w-6"></BsHouseHeartFill>{cardDetail.state_title}<BsHouseHeartFill className="h-6 w-6"></BsHouseHeartFill></h2>
                        <p className="flex font-semibold items-center gap-2"><RiUserStarLine></RiUserStarLine>{cardDetail.segment_name}</p>
                        <p className="flex items-center gap-2"><FaHandPointRight></FaHandPointRight>{cardDetail.description}</p>
                        <p className="flex items-center gap-2"><FaHandPointRight className="4-3 w-3"></FaHandPointRight>{cardDetail.area}</p>
                        <hr />
                        <div className="flex">
                            <p className="flex items-center gap-2 font-bold"><FaHandPointRight className="h-3 w-3"></FaHandPointRight>{cardDetail.status}</p>
                            <p className="font-bold">{cardDetail.price}</p>
                        </div>
                        <hr />
                        <div className="mr-16">
                            <ul>
                                <h2 className="font-bold">Our facilities:</h2>
                                {cardDetail.facilities.map((facility, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <span className="text-green-500">✓</span> {/* Checkmark or any other icon */}
                                        <span>{facility}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <hr />
                        <p className="flex items-center gap-3"><FaLocationDot></FaLocationDot>{cardDetail.location}</p>
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
