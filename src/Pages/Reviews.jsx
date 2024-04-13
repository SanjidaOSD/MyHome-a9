import { useEffect, useState } from 'react';
import { FcCloseUpMode } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { IoStar } from "react-icons/io5";

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css'; // ..
AOS.init();

const Reviews = () => {
    const [customerReviews, setCustomerReviews] = useState([]);

    useEffect(() => {
        fetch('/review.json')
            .then(res => res.json())
            .then(data => setCustomerReviews(data))
    }, [])

    return (
        <div>
            <h2 className='flex text-3xl font-bold text-center justify-center text-red-800 mt-12'>
                <FcCloseUpMode />
                Our Customer Reviews
                <FcCloseUpMode />
            </h2>
            <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
             className="md:grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-16 mt-16">

                {
                    customerReviews.map(review => (
                        <div key={review.rating}>
                            <div className="card card-side bg-base-100 shadow-xl">
                                <img src={review.image} alt='' />
                                <div className="card-body">
                                    <h2 className="card-title">{review.customer_name}</h2>
                                    <p className='text-red-800'>{review.residential_type}</p>
                                    <p><span className='font-bold'>review</span>: <span className='text-orange-400'>{review.reviews}</span></p>
                                    <p className='flex item-center text-center'><IoStar></IoStar>rating: {review.rating}</p>
                                    <div className="card-actions justify-end">
                                        <Link to='/about' className="btn bg-slate-400">Back</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    );
};

export default Reviews;
