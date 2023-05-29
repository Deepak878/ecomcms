import "./Footer.scss";
import {
  FaLocationArrow,
  FaMobileAlt,
  FaEnvelope,
  FaVoicemail,
} from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            ducimus fugiat officia quae consectetur debitis culpa iste
            repudiandae repellat voluptas magni, vel ullam nulla officiis cum
            possimus consequuntur aut suscipit!
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam?
            </div>
          </div>
          <div className="c-item">
            <FaVoicemail />
            <div className="text">Phone: 984567895</div>
          </div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">Email : hahahahhaha@gmail.com</div>
          </div>
        </div>

        <div className="col">
          <div className="title">Categories</div>
          <div className="text">Headphones</div>
          <div className="text">Smart Watches</div>
          <div className="text">Bluetooth Speakers</div>
          <div className="text">Wireless Earbuds</div>
          <div className="text">Home Theatre</div>
          <div className="text">Projectors</div>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <div className="text">Home</div>
          <div className="text">About</div>
          <div className="text">Privacy Policy</div>
          <div className="text">Returns</div>
          <div className="text">Terms & Conditions</div>
          <div className="text">Contact us</div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
            <div className="text">HAMRO STORE 2023, Premium E-Commerce Solutions</div>
            <img src={Payment} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
