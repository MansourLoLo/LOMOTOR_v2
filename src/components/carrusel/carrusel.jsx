import React, { useState, useEffect, useRef } from "react";
import "./Carrusel.css";
import videos from "../../services/video/brabus-cars/BrabusCars";

function Carrusel({ lateralControl = true, dotsControl = true }) {
  const listRef = useRef();

  const [actualVideo, setactualVideo] = useState(0);

  useEffect(() => {
    const listNode = listRef.current;
    const videoNode = listNode.querySelectorAll("li  video")[actualVideo];

    if (videoNode) {
      videoNode.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [actualVideo]);

  const scrollToVideo = (direction) => {
    if (direction == "prev") {
      console.log("prev video pressed");
      setactualVideo((curr) => {
        const isFirstVideo = actualVideo === 0;
        return isFirstVideo ? 0 : curr - 1;
      });
    } else {
      console.log("next video pressed");
      const isLastVideo = actualVideo === videos.length - 1;
      if (!isLastVideo) {
        setactualVideo((curr) => curr + 1);
      }
    }
  };

  const goToVideo = (videoIndex) => {
    setactualVideo(videoIndex);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (actualVideo == videos.length) {
  //       goToVideo(0);
  //     }
      
  //     scrollToVideo("next");
  //   }, 15000);
  // }, [actualVideo]);

  return (
    <div className="main-video-container">
      <div className="carrusel-container">
        <div
          className={lateralControl ? "leftArrow" : "lateralControlHidden"}
          onClick={() => scrollToVideo("prev")}
        >
          &#10092;
        </div>
        <div
          className={lateralControl ? "rightArrow" : "lateralControlHidden"}
          onClick={() => scrollToVideo("next")}
        >
          &#10093;
        </div>
        <div className="container-videos-list">
          <ul ref={listRef}>
            {videos.map((item) => {
              return (
                <li key={item.id}>
                  {/* playsInline preload="none" muted loop autoPlay */}
                  <video
                    playsInline
                    preload="none"
                    muted
                    loop
                    autoPlay
                    className="video"
                    src={item.src}
                  ></video>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={dotsControl ? "control-container" : ""}>
          {videos.map((_, index) => (
            <div
              key={index}
              className={`control-container-item ${
                index === actualVideo ? "active" : ""
              }`}
              onClick={() => goToVideo(index)}
            >
              <div className="control-item"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carrusel;
