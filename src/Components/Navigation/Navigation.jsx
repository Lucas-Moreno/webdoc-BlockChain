import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ol className="navigation__list">
        <li className="item item--one">
          <Link to="/a-propos">
            <button className="button button--secondary">À propos</button>
          </Link>
        </li>
        <li className="item item--two">
          <Link to="/chapitre-un">
            <button className="button button--primary">
              Commencer l'expérience
            </button>
          </Link>
        </li>
        <li className="item item--three">
          <Link to="/sommaire">
            <button className="button button--secondary">Sommaire</button>
          </Link>
        </li>
      </ol>
    </nav>
  );
};

export default Navigation;
