import React, { useState } from "react";
import Username from "./Username";
import "./index.css";
import Activemain from "./Activemain";
function Blog() {
  const [username, setusername] = useState("");
  const [active, setActive] = useState(false);

  return (
    <main style={{ backgroundColor: "white" }}>
      {!active ? (
        <Username setusername={setusername} setActive={setActive} username={username} />
      ) : (
        <Activemain username={username} />
      )}
    </main>
  );
}

export default Blog;
