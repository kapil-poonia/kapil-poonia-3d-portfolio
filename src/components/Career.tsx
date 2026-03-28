import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Algebrik (InCred Finance)</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Integration engineer: Java Spring Boot integrations with credit bureaus
              (TransUnion, Equifax), Jack Henry core banking, RouteOne and Dealertrack;
              SOAP/XML flows, mappings, retries, and reliability for financial
              transactions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SDE-1 Full Stack</h4>
                <h5>Zetwerk · Bengaluru</h5>
              </div>
              <h3>2024–25</h3>
            </div>
            <p>
              BIS (Bank Integration System): Node.js, MongoDB—HDFC, ICICI, SBI with
              IMPS, RTGS, NEFT, A2A; maker-checker, OTP, reconciliation. OMS: Angular,
              Node.js—region-aware tax engine for India and Spain with i18n.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Jai Kisan · Bengaluru</h5>
              </div>
              <h3>2022–24</h3>
            </div>
            <p>
              Bharat Khata, Check Eligibility V2 (Angular, Node.js), Neo4j, Kafka,
              WhatsApp bot, POS dashboards—scaled eligibility to 2M+ users and 1000+
              concurrent users; A/B testing and partner integrations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SDE Intern</h4>
                <h5>Jai Kisan</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Jest tests at 90–92% coverage; asynchronous logging across microservices,
              improving API latency by ~20%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
