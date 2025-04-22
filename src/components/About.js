import React from "react";

function About() {
  const image = "https://via.placeholder.com/150";

  return (
    <div id="about">
      <h2>About</h2>
      <img src={image} alt="About section" />
    </div>
  );
}

export default About;

