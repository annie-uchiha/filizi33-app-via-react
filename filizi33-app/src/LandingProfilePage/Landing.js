import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { users } from "../users";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Landing.scss";

function Landing() {
  const navigate = useNavigate();
  const { userEmail, logout } = useAuth();
  const user = users.find((u) => u.email === userEmail);
  const [imageUrl, setImageUrl] = useState(user.imageUrl);

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
      title: "Course 1",
      description: "Description for Course 1",
      imgSrc: "https://via.placeholder.com/150?text=Course+1",
    },
    {
      id: 2,
      title: "Course 2",
      description: "Description for Course 2",
      imgSrc: "https://via.placeholder.com/150?text=Course+2",
    },
    {
      id: 3,
      title: "Course 3",
      description: "Description for Course 3",
      imgSrc: "https://via.placeholder.com/150?text=Course+3",
    },
    {
      id: 4,
      title: "Course 4",
      description: "Description for Course 4",
      imgSrc: "https://via.placeholder.com/150?text=Course+4",
    },
    {
      id: 5,
      title: "Course 5",
      description: "Description for Course 5",
      imgSrc: "https://via.placeholder.com/150?text=Course+5",
    },
    {
      id: 6,
      title: "Course 6",
      description: "Description for Course 6",
      imgSrc: "https://via.placeholder.com/150?text=Course+6",
    },
  ];

  return (
    <div className="landing-container">
      <div className="header">
        <h1 className="text-center">Hello, {userEmail}</h1>
        <Button variant="danger" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="image-upload-container">
        <img
          className="profile-image"
          src={imageUrl || "https://via.placeholder.com/150"}
          alt="Profile"
        />
        <input
          type="file"
          onChange={handleImageUpload}
          style={{ display: "none" }}
          id="file-upload"
        />
        <label htmlFor="file-upload" className="btn btn-primary">
          Upload Photo
        </label>
      </div>
      <div>
        <h2>Your Courses</h2>
        <div className="course-list">
          {user.courses.map((courseId, index) => {
            const course = courses.find((c) => c.id === courseId);
            return (
              <Card key={course.id} style={{ width: "18rem", margin: "10px" }}>
                <Card.Img variant="top" src={course.imgSrc} />
                <Card.Body>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text>{course.description}</Card.Text>
                  {/* Use Link instead of Button with href */}
                  <Link
                    to={`/courses/${index + 1}`}
                    className="btn btn-primary"
                  >
                    Go to Course
                  </Link>
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
