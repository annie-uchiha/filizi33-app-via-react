import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import "./OnlineCourses.scss";

function OnlineCourse1() {
  return (
    <div className="online-course-container">
      <h2>Hieronymus Bosch</h2>
      <p>Author and lecturer: Associate Professor Liza Boeva, PhD</p>
      <p>Illustrative texts read by Itzhak Fintzi</p>
      <div className="accordion-wrapper">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Lecture 1</Accordion.Header>
            <Accordion.Body>
              <h3>The Beginning. Hieronymus Bosch</h3>
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/another-video-id"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Lecture 2</Accordion.Header>
            <Accordion.Body>
              <h3>The Seven Deadly Sins and the Four Last Things</h3>
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/another-video-id"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <Link className="goBack" to="/landing">
        Go back
      </Link>
    </div>
  );
}

export default OnlineCourse1;
