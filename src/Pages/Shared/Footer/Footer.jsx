import { GiFamilyHouse } from "react-icons/gi";

const Footer = () => {
    return (
        <div className="md:mt-24">
            <hr />
<footer className="footer p-10 bg-White text-black">
  <aside>
  <GiFamilyHouse className="font-extrabold w-12 h-16"></GiFamilyHouse>
    <p className="font-bold"><span className="text-red-800 text-2xl">HOME</span> Industries Ltd.<br/>Providing reliable tech since 1992</p>
  </aside> 
  <nav>
    <h6 className="footer-title text-xl font-bold">Services</h6> 
    <a className="link link-hover">Buy house</a>
    <a className="link link-hover">Rent house</a>
    <a className="link link-hover">Sell house</a>
    <a className="link link-hover">Shop and malls</a>
  </nav> 
  <nav>
    <h6 className="footer-title text-xl font-bold">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title text-xl font-bold">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
<hr />
<footer className="footer footer-center p-4 bg-white font-bold text-black">
  <aside>
    <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>

        </div>
    );
};

export default Footer;