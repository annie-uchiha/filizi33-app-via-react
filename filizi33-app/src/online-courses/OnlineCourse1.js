import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

function OnlineCourse1() {
  return (
    <div>
      <h2>Italian and Northern Renaissance</h2>
      <p>
        Course Information Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Nullam euismod eros id orci lacinia, a condimentum dolor rutrum.
        Donec auctor tortor a dolor hendrerit ullamcorper.
      </p>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Lecture 1</Accordion.Header>
          <Accordion.Body>
            <h3>Title of Lecture 1</h3>
            <video controls>
              <source src="path_to_video_file.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Lecture 2</Accordion.Header>
          <Accordion.Body>
            <h3>Title of Lecture 2</h3>
            <video controls>
              <source src="path_to_video_file.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Link to="/landing">Go back</Link>
    </div>
  );
}

export default OnlineCourse1;
