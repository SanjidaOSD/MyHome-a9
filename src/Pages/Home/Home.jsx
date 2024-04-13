import { useEffect, useState } from "react";
import Slider from "../../Components/Slider";
import { IoHome } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdArrowDropright } from "react-icons/io";
import searchImg from '../../assets/search.png'
import contactImg from '../../assets/contact (2).png'
import enjoyImg from '../../assets/enjoy.png'

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
// ..
AOS.init();





const Home = () => {
    const [cards, setCards] = useState([]);

    // const {state_title, image, segment_name, status} = cards;
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, []);

    return (
        <div>
            <div className="mt-24">
                <Slider></Slider>
            </div>

            <div className="mt-24">
                <div>
                    <h2 className=" flex items-center md:text-5xl text-3xl justify-center font-bold text-center mb-12"><IoHome></IoHome>
                        Latest Listings<IoHome></IoHome></h2>
                </div>
                <div
                    className="md:grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-16">
                    {
                        cards.map(card => <div key={card.id}>
                            <div data-aos="fade-up"
                                data-aos-duration="2000" className="card w-96 bg-base-100 shadow-xl">
                                <figure><img className="h-72" src={card.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title"><IoHome className="w-8 h-8"></IoHome>
                                        {card.state_title}</h2>
                                    <p className="font-bold flex items-center mt-2 mb-2"><IoMdArrowDropright></IoMdArrowDropright>{card.segment_name}</p>
                                    <p className="flex items-center"><FaLocationDot />
                                        {card.location}</p>

                                    <div className="card-actions">
                                        <Link to={`/cards/${card.id}`}><button className="btn bg-slate-600 w-[320px] text-white hover:text-black">Show Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            {/* 3steps */}
            <p className=" text-center justify-center text-4xl font-bold text-red-900 mt-24 lg:mt-32 mb-16">3 Simple Steps</p>
            <div className="lg:flex justify-around gap-6">
                <div data-aos="zoom-out-right" className="card shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img src={searchImg} alt="Shoes" className="rounded-xl h-36 w-36" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Search Property</h2>
                        <p>Are you looking a beautiful and gorgeous property?</p>
                    </div>
                </div>
                <div data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000" className="card shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img src={contactImg} alt="Shoes" className="rounded-xl h-36 w-36" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Contact Us</h2>
                        <p>Dont'Worry contact with us.</p>

                    </div>
                </div>
                <div data-aos="zoom-out-left" className="card shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={enjoyImg} alt="Shoes" className="rounded-xl h-36 w-36" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Enjoy Property</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;