import React from "react";
import { Link } from "react-router-dom";

function Heading() {
  return (
    <>
      <div className="bg-red-400 w-[100vw] h-[10vh] flex items-center justify-between px-5">
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/components">Components</Link>
        <Link to="/shows">Shows</Link>
      </div>
    </>
  );
}

export default Heading;
