import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="/apropos">
        <button>A propos</button>
      </Link>
      <Link to="/doc">
        <button>Commencer l'expérience</button>
      </Link>
      <Link to="/sommaire">
        <button>Sommaire</button>
      </Link>
    </div>
  );
};

export default Navigation;
