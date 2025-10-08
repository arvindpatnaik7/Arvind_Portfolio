import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/stopwatch.jpg";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/photoport.jpeg";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/arvindpatnaik7/chaitfy"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Voice-Of-JavaDev"
              description="A full-stack platform for Java developers to share blogs and podcasts, built with React, Spring Boot, and MongoDB, featuring JWT authentication and AWS deployment."
              ghLink="https://github.com/arvindpatnaik7/javafrontend"
            //="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="photography Portfolio"
              description="Capturing stories through light and emotion — specializing in portraits, nature, and cinematic visuals"
              ghLink="https://github.com/arvindpatnaik7/Photography-Portfolio"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Modern stopwatch"
              description="A modern and responsive stopwatch application built using React.js. It features start, pause, reset, and lap functionalities with a smooth user experience. Designed with an elegant and minimal UI, it ensures precise time tracking and real-time updates. The project focuses on clean component structure, efficient state management using React hooks, and a fully responsive layout that adapts seamlessly to all devices."
              ghLink="https://github.com/arvindpatnaik7/Stop-Watch-web-application"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
