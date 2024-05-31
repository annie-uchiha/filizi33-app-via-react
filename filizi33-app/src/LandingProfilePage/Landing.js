import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { users } from "../users";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaUpload } from "react-icons/fa"; // Importing an upload icon
import "./Landing.scss";

function Landing() {
  const navigate = useNavigate();
  const { userEmail, logout } = useAuth();
  const user = users.find((u) => u.email === userEmail);
  const [imageUrl, setImageUrl] = useState(user.imageUrl);
  const userName = user.userName;

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result);
      user.imageUrl = reader.result;
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const courses = [
    {
      id: 1,
      title: "Italian and Northern Renaissance",
      description: "lectures-documentary films",
      imgSrc: "https://via.placeholder.com/150?text=Course+1",
    },
    {
      id: 2,
      title: "Hieronymus Bosch",
      description: "lectures-documentary films",
      imgSrc: "https://via.placeholder.com/150?text=Course+2",
    },
    {
      id: 3,
      title: "Pieter Bruegel the Elder",
      description: "lectures-documentary films",
      imgSrc: "https://via.placeholder.com/150?text=Course+3",
    },
    {
      id: 4,
      title: "Dante Alighieri. The Path to Happiness",
      description: "lecture-documentary film",
      imgSrc: "https://via.placeholder.com/150?text=Course+4",
    },
    {
      id: 5,
      title: "Who killed Romeo and Juliet?",
      description: "online course",
      imgSrc: "https://via.placeholder.com/150?text=Course+5",
    },
    {
      id: 6,
      title: "Michelangelo. The Medici Chapel",
      description: "lecture-documentary film",
      imgSrc: "https://via.placeholder.com/150?text=Course+6",
    },
  ];

  const handleCourseClick = (courseId) => {
    navigate(`/courses/${courseId}`);
  };

  return (
    <div className="landing-container">
      <div className="header">
        <div className="logout-button">
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        </div>
        <div className="profile-info">
          <div className="profile-image-container">
            <img
              className="profile-image"
              src={imageUrl || "https://via.placeholder.com/150"}
              alt="Profile"
            />
            <label htmlFor="file-upload" className="upload-icon">
              <FaUpload />
            </label>
            <input
              type="file"
              onChange={handleImageUpload}
              style={{ display: "none" }}
              id="file-upload"
            />
          </div>
          <h1 className="user-greeting">Hello, {userName}</h1>
        </div>
      </div>
      <div>
        <h2>Your Courses</h2>
        <div className="course-list">
          {user.courses.map((courseId) => {
            const course = courses.find((c) => c.id === courseId);
            return (
              <Card key={course.id} style={{ width: "18rem", margin: "10px" }}>
                <Card.Img variant="top" src={course.imgSrc} />
                <Card.Body>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text>{course.description}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => handleCourseClick(course.id)}
                  >
                    Go to Course
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Landing;
