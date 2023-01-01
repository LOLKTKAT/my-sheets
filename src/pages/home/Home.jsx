import React, { useState, useEffect } from "react";
import "./home.css";
import CourseCard from "../../components/CourseCard";
import SearchInput from "../../components/SearchInput";
import { courseInfo } from "../../data/courseInfo";
import { storage } from "../../firebase/config";
import { ref, listAll, getMetadata } from "firebase/storage";

const Home = () => {
  const { coursesName, setCoursesNames } = useState([]);

  const foldersList = ref(storage, `courses/`);

  const mappedCard = courseInfo.map((course) => {
    const { id, name, bg_color, lecturer, link, poster } = course;
    return (
      <CourseCard
        id={id}
        name={name}
        bg_color={bg_color}
        lecturer={lecturer}
        link={link}
        poster={poster}
      />
    );
  });
  function getLecturesMetadata() {
    listAll(foldersList).then((response) => {
      response.items.forEach((item) => {
        getMetadata(item).then((meta) => {
          setCoursesNames((prev) => [...prev, meta]);
        });
      });
    });
  }

  useEffect(() => {
    getLecturesMetadata();
  }, []);

  return (
    <div className="home">
      <div className="nav-bar">
        <SearchInput />
      </div>
      <div className="home__cards-container">{mappedCard}</div>
    </div>
  );
};

export default Home;
