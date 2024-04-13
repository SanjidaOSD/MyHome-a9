import { Link } from 'react-router-dom';
import contactImg from '../../assets/contact.png'

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css'; // ..
AOS.init();

const ContactUs = () => {
    return (
        <div>

            <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
             className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <span className="label-text text-center justify-center p-4 font-bold text-2xl">Get in Touch</span>

                        <form className="card-body">
                            <div className="form-control">
                                <input type="text" placeholder="enter your name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="email" placeholder="enter your email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="enter your number" className="input input-bordered" />
                            </div>
                            <textarea placeholder="enter your message" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                            <div className="form-control mt-6">
                                <Link to='/welcome' className="btn bg-slate-500">send</Link>
                            </div>
                        </form>
                    </div>
                    <img src={contactImg} alt="" />

                </div>
            </div>

            {/* FAQ */}
            <div data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000" >
                <h2 className='text-3xl font-bold mt-16 text-center justify-center mb-8 text-red-800'>FAQ</h2>
                <hr />


                <div className='flex justify-around mt-4'>
                    <div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" defaultChecked />
                            <div className="collapse-title text-xl font-medium">
                                How can I contact customer support or request assistance with your residential services?

                            </div>
                            <div className="collapse-content">
                                <p>Provide contact information for customer support channels, including phone numbers, email addresses, online chat, or support tickets, and specify response times for inquiries or assistance requests.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                What other resources or support do you provide to residential clients?

                            </div>
                            <div className="collapse-content">
                                <p>Share additional resources, guides, educational materials, or support services available to residential clients to help them make informed decisions and manage their properties effectively.
                                </p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                Do you offer emergency or after-hours residential services?

                            </div>
                            <div className="collapse-content">
                                <p>Inform clients about the availability of emergency services or after-hours support for urgent residential needs, such as repairs, maintenance, or security concerns.
                                </p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                What pricing and payment options are available for your residential services?

                            </div>
                            <div className="collapse-content">
                                <p>Provide transparency about your pricing structure, payment methods, invoicing procedures, and any discounts, promotions, or payment plans offered to customers.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 2 */}
                    <div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" defaultChecked />
                            <div className="collapse-title text-xl font-medium">
                                How do you ensure quality and satisfaction with your residential services?

                            </div>
                            <div className="collapse-content">
                                <p>Describe your quality assurance processes, customer feedback mechanisms, satisfaction guarantees, and follow-up procedures to ensure a positive experience for clients.
                                </p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" defaultChecked />
                            <div className="collapse-title text-xl font-medium">
                                What safety measures do you implement when providing residential services?

                            </div>
                            <div className="collapse-content">
                                <p>Assure customers of your commitment to safety by outlining the safety protocols, training programs, insurance coverage, and background checks for your service professionals.
                                </p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                What qualifications and experience do your service professionals have?

                            </div>
                            <div className="collapse-content">
                                <p>Provide information about the qualifications, certifications, licenses, and experience of your service professionals, ensuring customers of their expertise and reliability.
                                </p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                Are your residential services customizable to my specific needs?

                            </div>
                            <div className="collapse-content">
                                <p>Assure potential clients that your residential services can be tailored to meet their unique requirements, preferences, and budgets.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;