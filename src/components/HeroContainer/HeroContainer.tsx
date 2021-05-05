import React, { useState, useEffect, useRef } from "react";
import "./HeroContainer.scss";
import { TEST_DATA } from "../../config/StaticData";
import { Link } from "react-router-dom";
import { CONFIG } from "../../config/Config";

export default function HeroContainer() {
  const { HERO_DATA } = TEST_DATA;
  const {
    ROUTES: { PRODUCTS },
  } = CONFIG;
  const delay = 5000;

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<any>(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === HERO_DATA.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);
  //style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
  return (
    <div className="slideshow w3-animate-fading" id="hero-slideshow">
      <div className="slideshowSlider">
        {HERO_DATA.filter((data) => data.id === index + 1).map((hero, idex) => (
          <div className="hero-container" key={idex}>
            <img
              src={hero.photo}
              alt={hero.category}
              className="hero-image "
            ></img>
            <div className="hero-text">
              <h1>{hero.text}</h1>
              <Link
                to={`${PRODUCTS}?cid=${hero.categoryId}&cname=${hero.category}`}
                key={hero.categoryId}
              >
                <p>{hero.category}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {HERO_DATA.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
