import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link> {/* 홈으로 이동 */}
          </li>
          <li>
            <Link to="/projects">Projects</Link> {/* Projects 페이지로 이동 */}
          </li>
          <li>
            <Link to="/contact">Contact</Link> {/* Contact 페이지로 이동 */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
