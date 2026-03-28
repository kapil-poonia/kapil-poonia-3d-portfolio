import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am a software engineer focused on integrations and full-stack delivery.
          At Algebrik (InCred Finance), I build and maintain external system
          integrations in Java Spring Boot—credit bureaus, core banking with Jack Henry,
          and indirect lending platforms. Previously at Zetwerk and Jai Kisan, I shipped
          payment systems, bank integrations, and high-scale eligibility flows. I care
          about reliable APIs, SOAP/XML pipelines, and systems that hold up under real
          transaction load.
        </p>
      </div>
    </div>
  );
};

export default About;
