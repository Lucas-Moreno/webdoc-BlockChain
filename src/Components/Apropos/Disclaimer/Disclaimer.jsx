import React from "react";
import Img from "../../../Assets/images/disclaimerImg.png";

const Disclaimer = () => {
  return (
    <div>
      <img src={Img} alt="zbeub" />
      <div>
        <h1>Disclaimer</h1>
        <p>
          Ce site a été réalisé à des fins pédagogiques dans le cadre du cursus
          Bachelor de l’école HETIC. Les contenus présentés n'ont pas fait
          l'objet d'une demande de droit d'utilisation.{" "}
        </p>
        <p>
          Ce site ne sera en aucun cas exploité à des fins commerciales et ne
          sera pas publié
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
