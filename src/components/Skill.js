import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Myskills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skills = [
    {
      name: "Programming Languages: Python, C++, SQL, Java, JavaScript",
      level: "80%",
    },
    { name: "Deep Learning Frameworks: TensorFlow, Keras", level: "50%" },
    { name: "Web Development: HTML, CSS, React.js, Node.js", level: "70%" },
    {
      name: "Android Development: Flutter, Android Studio, Dart",
      level: "60%",
    },
    { name: "Database: SQL, MySQL", level: "80%" },
    {
      name: "Libraries & Tools: RStudio, Git, Tableau, Microsoft Tools",
      level: "70%",
    },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {skills.map((skill, index) => (
                  <div className="item" key={index}>
                    {/* <img
                      src={
                        index % 3 === 0
                          ? meter1
                          : index % 3 === 1
                          ? meter2
                          : meter3
                      }
                      alt="Skill Meter"
                    /> */}
                    <h5>{skill.name}</h5>
                    <p>Proficiency: {skill.level}</p>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Background"
      />
    </section>
  );
};
