"use client";
import React, { useState, useRef } from "react";

const Carousel = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const sliderRef = useRef(null);
  const startPosition = useRef(0); // Track where the user started dragging
  const startSliderValue = useRef(0); // Track the initial value at start

  // Handle mouse down to start dragging
  const handleMouseDown = (e) => {
    startPosition.current = e.clientX; // Get the initial position of the mouse
    startSliderValue.current = sliderValue; // Store the slider value at the start
    document.addEventListener("mousemove", handleMouseMove); // Start listening to mouse move
    document.addEventListener("mouseup", handleMouseUp); // Listen for mouse up to stop dragging
  };

  // Handle mouse move to adjust the slider value
  const handleMouseMove = (e) => {
    const diff = e.clientX - startPosition.current; // Calculate the difference in position
    const change = Math.round(diff / 10); // Adjust the slider increment
    let newSliderValue = startSliderValue.current + change; // Update the value based on the movement

    // Make sure the value wraps around when it goes past 35 or below 0
    if (newSliderValue > 35) {
      newSliderValue = 0 + (newSliderValue - 35 - 1); // Wrap to 0 if above 35
    } else if (newSliderValue < 0) {
      newSliderValue = 35 - (Math.abs(newSliderValue) % 35); // Wrap to 35 if below 0
    }

    setSliderValue(newSliderValue); // Update the slider value
  };

  // Stop dragging when mouse is released
  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div style={styles.carouselContainer}>
      <img
        src={`/images/cars/sred/${sliderValue}.webp`}
        alt="carousel-image"
        style={styles.image}
      />
      <input
        ref={sliderRef}
        type="range"
        min="0"
        max="35"
        value={sliderValue}
        onMouseDown={handleMouseDown}
        style={styles.slider}
      />
    </div>
  );
};

const styles = {
  carouselContainer: {
    position: "relative",
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    maxWidth: "600px",
    height: "auto",
    transition: "transform 0.2s ease-in-out", // Smooth transition
  },
  slider: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0, // Make the slider invisible
    zIndex: 1,
  },
};

export default Carousel;
