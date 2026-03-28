import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:123kapilpoonia123@gmail.com"
                data-cursor="disable"
              >
                123kapilpoonia123@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+919588702594" data-cursor="disable">
                +91 9588702594
              </a>
            </p>
            <p>
              <a
                href="https://kapilpoonia.co.in"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                kapilpoonia.co.in
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.Tech Information Technology, Vellore Institute of Technology —
              2018–2022 (CGPA 8.20)
            </p>
            <p>
              CBSE Class XII, St. Mary&apos;s School, Hisar — 2016–2018 (85%)
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/kapil-poonia"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/kapil-poonia"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://kapilpoonia.co.in"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Website <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Kapil Poonia</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
