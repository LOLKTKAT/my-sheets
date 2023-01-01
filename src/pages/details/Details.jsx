import React, { useEffect, useState } from "react";
import SearchInput from "../../components/SearchInput";
import { useParams } from "react-router-dom";
import { storage } from "../../firebase/config";
import { ref, listAll, getDownloadURL, getMetadata } from "firebase/storage";
import "./details.css";

const Details = () => {
  const [lecturesMetadata, setLecturesMetadata] = useState([]);
  const [lecturesDownloadURL, setLecturesDownloadURL] = useState([]);
  const { courseID } = useParams();

  const lecturesList = ref(storage, `${courseID}/`);

  function getLecturesMetadata() {
    listAll(lecturesList).then((response) => {
      response.items.forEach((item) => {
        getMetadata(item).then((meta) => {
          setLecturesMetadata((prev) => [...prev, meta]);
        });
      });
    });
  }

  function getLectureDownloadURL(name) {
    const lectureLink = ref(storage, `${courseID}/${name}`);
    getDownloadURL(lectureLink).then((res) => {
      window.open(res);
    });
  }

  function getAllLectureDownloadURL() {
    listAll(lecturesList).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setLecturesDownloadURL((prev) => [...prev, url]);
        });
      });
    });
  }

  function downloadAllLectures() {
    if (lecturesDownloadURL.length > 0) {
      for (let i = 0; i < lecturesDownloadURL.length; i++) {
        window.open(lecturesDownloadURL[i]);
      }
    }
  }
  useEffect(() => {
    getLecturesMetadata();
    getAllLectureDownloadURL();
  }, []);

  return (
    <div className="details-page">
      <SearchInput />
      <h1 className="details-page__heading">{courseID}</h1>
      {lecturesMetadata.length <= 0 ? (
        <h1>there are no lectures</h1>
      ) : (
        <div className="details-page__table">
          <div className="detail-page__table-heading">
            <h2>Course sheets</h2>
            <button
              className="download-all-btn"
              onClick={() => downloadAllLectures()}
            >
              Download all
            </button>
          </div>
          {lecturesMetadata?.map((item, i) => {
            const { name, timeCreated, size } = item;
            let x = String(size / 1000000);
            return (
              <>
                <div key={i} className="detail-page__table-row">
                  <div className="detail-page__table-row-course-info">
                    <h3
                      className="detail-page__table-row-heading"
                      onClick={(e) => getLectureDownloadURL(name)}
                    >
                      {name}
                    </h3>
                    <h5>{x.substring(0, 4) + " MB"}</h5>
                  </div>
                  <h4>{timeCreated.slice(0, 10)}</h4>
                </div>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Details;
