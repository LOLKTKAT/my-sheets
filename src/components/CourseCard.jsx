import React from "react";
import { Link } from "react-router-dom";
import "./course-card.css";

const CourseCard = ({ id, name, bg_color, lecturer, poster }) => {
  return (
    <>
      <Link to={`details/${name}`}>
        <div className="x">
          <div key={id} className="border course-card__container ">
            <section
              className="course-card__poster-container"
              style={{ backgroundColor: `${bg_color}` }}
            >
              <img className="course-card__poster" src={poster} alt="poster" />
            </section>
            <section className="course-card__info">
              <h2 className="course-card__heading ">{name}</h2>
              <h4 className="course-card__number-of-lec">
                Lecturer: {lecturer}
              </h4>
            </section>
            <div className="border course-card__border1"></div>
            <div className="border course-card__border2"></div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CourseCard;
