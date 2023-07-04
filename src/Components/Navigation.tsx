import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white">
      <span>My Little Shop</span>
      <span>
        <Link to="/">Products Page</Link>
        <Link to="/about">About</Link>
      </span>
    </nav>
  );
}
