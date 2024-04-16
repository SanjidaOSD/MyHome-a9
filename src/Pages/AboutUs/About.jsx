import { Link } from 'react-router-dom';
import aboutImg from '../../assets/about us.png'
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { GiFamilyHouse } from "react-icons/gi";
import { FaHouseLock } from "react-icons/fa6";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { BsHouseCheckFill } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";


// AOS
import AOS from 'aos';
import 'aos/dist/aos.css'; // ..
import { Helmet } from 'react-helmet';
AOS.init();


const About = () => {


    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About Us</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className='lg:mt-16'>

                <div data-aos="zoom-out-up" className="card card-side md:h-[600px] bg-base-100 shadow-xl">
                    <figure data-aos="zoom-out-right"><img className='h-[200px] w-[300px]md:h-auto md:w-auto lg:h-auto lg:w-auto' src={aboutImg} alt="Movie" /></figure>
                    <div data-aos="zoom-out-left" className="card-body text-center mx-auto md:mt-44">
                        <h2 className="card-title text-center justify-center lg:text-2xl font-bold">Why Choose Us?</h2>
                        <p className='lg:font-bold'>We offer high-quality products or services that meet or exceed customer expectations.</p>
                        <div className="card-actions justify-center md:mb-44">
                            <Link to='/contact' className="btn bg-slate-500">Contact Us</Link>
                            <Link to='/review' className="btn bg-slate-500">See Customer Review</Link>
                        </div>
                    </div>
                </div>


                {/* services */}
                <h3 className="lg:text-4xl font-bold  text-center justify-center mt-16 lg:mt-24">Our Servisces</h3>

                <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <div data-aos="flip-left" data-aos-duration="2000" className='mt-4 lg:mt-16'>
                        <div className="card w-96 bg-base-100 shadow-xl mt-16">
                            <figure className="px-10 pt-10">
                                <SiHomeassistantcommunitystore className='h-[90px] w-[90px] lg:h-[90px] lg:w-[100px]'></SiHomeassistantcommunitystore>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title font-bold">Buy House!</h2>
                                <p>We assist clients in finding and purchasing their dream homes. from property search to closing the deal.</p>
                            </div>
                        </div>
                    </div>


                    <div data-aos="flip-left" data-aos-duration="2000" className='mt-4 lg:mt-16'>
                        <div className="card w-96 bg-base-100 shadow-xl mt-16">
                            <figure className="px-10 pt-10">
                                <BsHouseCheckFill className='h-[90px] w-[90px] lg:h-[90px] lg:w-[100px]'></BsHouseCheckFill>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title font-bold">Rent House!</h2>
                                <p>We specialize in helping clients find rental properties that suit their needs and preferences residential clients.</p>
                            </div>
                        </div>
                    </div>


                    <div data-aos="flip-left" data-aos-duration="2000" className='mt-4 lg:mt-16'>
                        <div className="card w-96 bg-base-100 shadow-xl mt-16">
                            <figure className="px-10 pt-10">
                                <FaHouseLock className='h-[90px] w-[90px] lg:h-[90px] lg:w-[100px]'></FaHouseLock>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title font-bold">Sell House!</h2>
                                <p>We help homeowners sell their properties quickly and efficiently, maximizing their minimizing stress.</p>
                            </div>
                        </div>
                    </div>


                    <div data-aos="flip-left" data-aos-duration="2000" className='mt-4 lg:mt-8'>
                        <div className="card w-96 bg-base-100 shadow-xl mt-16">
                            <figure className="px-10 pt-10">
                                <GiFamilyHouse className='h-[90px] w-[90px] lg:h-[90px] lg:w-[100px]'></GiFamilyHouse>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title font-bold">Flats and Building!</h2>
                                <p>We offer a wide selection of flats and buildings for sale or rent, catering to both residential and clients. </p>
                            </div>
                        </div>
                    </div>


                    <div data-aos="flip-left" data-aos-duration="2000" className='mt-4 lg:mt-8'>
                        <div className="card w-96 bg-base-100 shadow-xl mt-16">
                            <figure className="px-10 pt-10">
                                <BiSolidBuildingHouse className='h-[90px] w-[90px] lg:h-[90px] lg:w-[100px]'></BiSolidBuildingHouse>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title font-bold">Shop and malls!</h2>
                                <p>We specialize in retail and commercial real estate, offering a wide range of shops and malls for sale . </p>
                            </div>
                        </div>
                    </div>


                    <div data-aos="flip-left" data-aos-duration="2000" className='mt-4 lg:mt-8'>
                        <div className="card w-96 bg-base-100 shadow-xl mt-16">
                            <figure className="px-10 pt-10">
                                <RiCustomerService2Line className='h-[90px] w-[90px] lg:h-[90px] lg:w-[100px]'></RiCustomerService2Line>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title font-bold">24/7Service!</h2>
                                <p>We give 24 hours service and full week. service is available around the clock, every day of the week and month.</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default About;