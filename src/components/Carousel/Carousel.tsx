import React, { FC, useEffect, useState } from 'react';
import { CarouselModel } from '../../models/Carousel.model';
import './Carousel.scss';

const Carousel: FC<CarouselModel.IProps> = ({
  children,
  show,
  infiniteLoop,
  carouselContainerClass,
  selectedImage,
  updateCurrentIndex,
}) => {
  const [currentIndex, setCurrentIndex] = useState(
    infiniteLoop ? show : selectedImage ? selectedImage : 0
  );
  const [length, setLength] = useState(children.length);

  const [isRepeating, setIsRepeating] = useState(
    infiniteLoop && children.length > show
  );
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const [touchPosition, setTouchPosition] = useState(null);

  useEffect(() => {
    if (selectedImage || selectedImage === 0) {
      setCurrentIndex(selectedImage!);
    }
  }, [selectedImage]);

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length);
    setIsRepeating(infiniteLoop && children.length > show);
  }, [children, infiniteLoop, show]);

  useEffect(() => {
    if (isRepeating) {
      if (currentIndex === show || currentIndex === length) {
        setTransitionEnabled(true);
      }
    }
  }, [currentIndex, isRepeating, show, length]);

  const next = () => {
    if (isRepeating || currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1);
      if (updateCurrentIndex) {
        updateCurrentIndex(currentIndex + 1);
      }
    }
  };

  const prev = () => {
    if (isRepeating || currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
      if (updateCurrentIndex) {
        updateCurrentIndex(currentIndex - 1);
      }
    }
  };

  const handleTouchStart = (e: any) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e: any) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  const handleTransitionEnd = () => {
    if (isRepeating) {
      if (currentIndex === 0) {
        setTransitionEnabled(false);
        setCurrentIndex(length);
      } else if (currentIndex === length + show) {
        setTransitionEnabled(false);
        setCurrentIndex(show);
      }
    }
  };

  const renderExtraPrev = () => {
    const output = [];
    for (let index = 0; index < show; index++) {
      output.push(children[length - 1 - index]);
    }
    output.reverse();
    return output;
  };

  const renderExtraNext = () => {
    const output = [];
    for (let index = 0; index < show; index++) {
      output.push(children[index]);
    }
    return output;
  };

  return (
    <div className={`carousel-container ${carouselContainerClass}`}>
      <div className='carousel-wrapper'>
        {/* You can alwas change the content of the button to other things */}
        {(isRepeating || currentIndex > 0) && (
          <div className='left-arrow'>
            <button onClick={prev}>&lt;</button>
          </div>
        )}
        <div
          className='carousel-content-wrapper'
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className={`carousel-content show-${show}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
              transition: !transitionEnabled ? 'none' : undefined,
            }}
            onTransitionEnd={() => handleTransitionEnd()}
          >
            {length > show && isRepeating && renderExtraPrev()}
            {children}
            {length > show && isRepeating && renderExtraNext()}
          </div>
        </div>
        {/* You can alwas change the content of the button to other things */}
        {(isRepeating || currentIndex < length - show) && (
          <div className='right-arrow'>
            <button onClick={next}>&gt;</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
