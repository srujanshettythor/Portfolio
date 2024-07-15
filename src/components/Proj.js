import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import college from "../assets/img/sri.png";
import weather from "../assets/img/wthr.jpg";
import bus from "../assets/img/buswatch.png";
import stock from "../assets/img/stockprediction.png";
import expen from "../assets/img/expensive.png";
import qui from "../assets/img/quiz.png";
import ag from "../assets/img/agro.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Myprojects = () => {
  const projects = [
    {
      title: "College Management System",
      description: "Web Development Project | HTML, CSS, JavaScript, PHP, SQL",
      imgUrl: college,
      link: "https://github.com/srujanshettythor/CollegeManagement",
    },
    {
      title: "Weather App",
      description: "Android Application: | Flutter, Dart",
      imgUrl: weather,
      link: "https://github.com/srujanshettythor/WeatherApp",
    },
    {
      title: "Bus Watch",
      description: "Bus Watch − Web Project/Android Application ",
      imgUrl: bus,
      link: "https://github.com/vikasrai19/adbs_web_frontend",
    },
    {
      title: "Stock Market Prediction",
      description: "Shiny App| R programming",
      imgUrl: stock,
      link: "https://github.com/srujanshettythor/Stockprediction",
    },
    {
      title: "Monthly Expensive tracker",
      description: "Shiny App| R programming",
      imgUrl: expen,
      link: "https://github.com/srujanshettythor/ExpensiveTracker",
    },
    {
      title: "Quiz Point",
      description:
        "Developed using React.js and Java (Spring Boot) with SQL database.",
      imgUrl: qui,
      link: "https://github.com/srujanshettythor/SpringBoot",
    },
    {
      title: "Potato Leaf Disease classification",
      description: "Tensorflow|Keras|React",
      imgUrl: ag,
      link: "https://github.com/srujanshettythor/AI-ML-Mini-project",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>My Projects</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p></p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p></p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      />
    </section>
  );
};
