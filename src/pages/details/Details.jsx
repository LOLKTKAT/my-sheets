import React, { useEffect, useState } from "react";
import SearchInput from "../../components/SearchInput";
import { useParams } from "react-router-dom";
import { storage } from "../../firebase/config";
import { ref, listAll, getDownloadURL, getMetadata } from "firebase/storage";
import info_square from "../../assets/images/info-square.svg";
import Footer from "../../components/Footer";
import "./details.css";

const Details = () => {
  const [lecturesMetadata, setLecturesMetadata] = useState([]);
  const [lecturesDownloadURL, setLecturesDownloadURL] = useState([]);
  const [loading, setLoading] = useState(true);
  const { courseID } = useParams();

  const lecturesList = ref(storage, `${courseID}/`);

  function getLecturesMetadata() {
    listAll(lecturesList).then((response) => {
      checkLoading(response);
      response.items.forEach((item) => {
        getMetadata(item).then((meta) => {
          setLecturesMetadata((prev) => [...prev, meta]);
          setLoading(false);
        });
      });
    });
  }

  function getLectureDownloadURL(name) {
    const lectureLink = ref(storage, `${courseID}/${name}`);
    getDownloadURL(lectureLink).then((res) => {
      window.location.href = res;
    });
  }

  function checkLoading(res) {
    if (res.items.length == 0) {
      setLoading(false);
    }
  }

  // function downloadAllLectures() {
  //   if (lecturesDownloadURL.length > 0) {
  //     for (let i = 0; i < lecturesDownloadURL.length; i++) {
  //       window.location.href(lecturesDownloadURL[i]);
  //     }
  //   }
  // }
  useEffect(() => {
    getLecturesMetadata();
  }, []);

  return (
    <div className="details-page">
      <SearchInput />
      <h1 className="details-page__heading">{courseID}</h1>
      {loading ? (
        <h1>loading...</h1>
      ) : lecturesMetadata.length == 0 ? (
        <center>
          <img src={info_square} alt="info square" height="45px" />
          <h1>there are no lectures</h1>
          <a href="/">go back home</a>
        </center>
      ) : (
        <>
          <div className="details-page__table">
            <div className="detail-page__table-heading">
              <h2>Course sheets</h2>
            </div>
            {lecturesMetadata?.map((item, i) => {
              const { name, size } = item;
              let x = String(size / 1000000);
              return (
                <>
                  <div key={i} className="detail-page__table-row">
                    <div className="detail-page__table-row-course-info">
                      <h3 className="detail-page__table-row-heading">{name}</h3>
                      <h5>{x.substring(0, 4) + " MB"}</h5>
                    </div>
                    <button
                      className="download-btn"
                      onClick={(e) => getLectureDownloadURL(name)}
                    >
                      Download
                    </button>
                  </div>
                </>
              );
            })}
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Details;
