import React from "react";
import "./home.css";
import CourseCard from "../../components/CourseCard";
import SearchInput from "../../components/SearchInput";
import Footer from "../../components/Footer";
import { courseInfo } from "../../data/courseInfo";
import { storage } from "../../firebase/config";
import { ref } from "firebase/storage";

const Home = () => {
  const foldersList = ref(storage, `courses/`);

  const mappedCard = courseInfo.map((course, i) => {
    const { id, name, bg_color, lecturer, link, poster } = course;
    return (
      <CourseCard
        key={i}
        id={id}
        name={name}
        bg_color={bg_color}
        lecturer={lecturer}
        link={link}
        poster={poster}
      />
    );
  });

  return (
    <div className="home">
      <div className="nav-bar">
        <SearchInput />
      </div>
      <div className="home__cards-container">{mappedCard}</div>
      <Footer />
    </div>
  );
};

export default Home;
