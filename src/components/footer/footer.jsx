import './footer.css'
import { RiFacebookFill } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const footer = () => {
    return (
            <div className="footer">
                <div className="text">
                    <p>We make onboaring new employees ridiculously<br /> easy. On day one, they're ready to go. And retaining<br />them is easier</p>
                    <p className='follow'>Follow us on :
                        <IoLogoLinkedin />
                        <FaInstagram />
                        <FaYoutube />
                        <RiFacebookFill />

                    </p>
                </div>
                <ul className='first-nav'>
                    <li>Home</li>
                    <li>Why Us</li>
                    <li>Deal</li>
                </ul>
                <ul className='second-nav'>
                    <li>Service</li>
                    <li>Case Studies</li>
                    <li>Plan</li>
                </ul>
                <ul className='third-nav'>
                    <li>Testimonial</li>
                    <li>About</li>
                    <li>FAQ</li>
                </ul>

            </div>

    )
}
export default footer;