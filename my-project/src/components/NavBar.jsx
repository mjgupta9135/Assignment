import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="bg-red-300">
        <Link to="./">
          <div>
            <img
              src="https://img.icons8.com/?size=100&id=84005&format=png&color=FFFFFF"
              width="30px"
              height="30px"
            />
            <h2 className="text-3xl ">Home</h2>{" "}
          </div>
        </Link>
      </nav>
    </div>
  );
}
