import React from "react";

function Home() {
  const username = "Jane";
  const city = "Los Angeles";

  return (
    <div id="home">
      <h1>{username} from {city}</h1>
    </div>
  );
}

export default Home;

