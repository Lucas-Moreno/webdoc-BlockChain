import React from 'react';
import Illustration from '../../../Assets/images/creditsImg.png';

const ContentAbout = (props) => {
  const addContents = (_) => {
    if (props.title === 'INFORMATIONS') {
      return (
        <div className="content__text">
          <span className="alert">
            Le contenu de notre webdocumentaire est en cours de réalisation, le
            Chapitre 2 et 3 seront prochainement disponible.
          </span>
          <br></br>
          <br></br>
          <span className="bold">
            “Le Bitcoin, c’est de l'arnaque, on ne sait pas qui contrôle ça !”
            <br></br>
            “Bien-sûr que je sais ce qu'est la Blockchain, ca sert a acheter des
            armes et de la drogue sur le DarkNet !”<br></br>“De toute façon je
            n'achète jamais sur Internet, donc je ne vois pas ce que pourrait
            m’apporter la Blockchain ...”
          </span>
          <br></br>
          <br></br>
          <span className="bold">Blockchain: le web-documentaire​</span> à pour
          but de vous faire découvrir une technologie innovante, purger toutes
          vos fausses bonnes idées, en vulgarisant nos explications afin
          d'éduquer à tous et à toutes.
          <br></br>
          <br></br>
          “Comment peut elle changer notre quotidien ?”<br></br>“Pourquoi le
          système actuel présente t il des failles ?”<br></br>“Dans quels
          domaines cette technologie peut elle être utilisée ?”<br></br>Vous
          trouverez les réponses à ces questions parmi les trois chapitres que
          nous vous proposons.
          <br></br>
          <br></br>
          Vous pénétré dans une expérience
          <span className="bold"> visuelle</span> et
          <span className="bold"> sonore</span>.<br></br>
          Afin de profiter au maximum de l'expérience, consultez notre
          webdocumentaire sur un ordinateur, munis d'un casque ou de vos
          écouteurs.
          <br></br>
          <br></br>
          Chaque fin de Chapitre comporte un quiz rapide afin de mettre vos
          nouvelles connaissances à l'essais.
        </div>
      );
    } else if (props.title === 'CREDITS') {
      return (
        <div>
          <h2 className="content__subtitle">Web</h2>
          <div className="content__text">
            <span className="medium">J​eremy Schiappapietre</span> - Développeur
            BACK-END<br></br>
            <span className="medium">Lucas Moreno</span> - Développeur FRONT-END
            <br></br>
            <span className="medium">Maxime Barlet</span> - Développeur
            FRONT-END
            <br></br>
            <span className="medium">Rémi Tiab</span> - Développeur FRONT-END
            <br></br>
          </div>
          <h2 className="content__subtitle">Design & Animations</h2>
          <div className="content__text">
            <span className="medium">Lucas Cunault</span> - Directeur artistique
            <br></br>
            <span className="medium">Rémi Tiab</span> - Assistant Directeur
            artistique
          </div>
          <h2 className="content__subtitle">Scénarios & Scripts</h2>
          <div className="content__text">
            <span className="medium">Maxime Barlet</span> - Auteur
            <br></br>
            <span className="medium">Rémi Tiab</span> - Adaptation
          </div>
          <h2 className="content__subtitle">Sons & Voix</h2>
          <div className="content__text">
            <span className="medium">Maxime Barlet</span> - Voix Homme
            <br></br>
            <span className="medium">Caracalla</span> - Voix Femme
          </div>
        </div>
      );
    } else if (props.title === 'REMERCIEMENTS') {
      return (
        <div className="content__text">
          Un grand remerciement à tous les acteurs ayant permis la réalisation
          de ce webdocumentaire.
          <br></br>
          <br></br>
          Mais particuliérement à :<br></br>
          <br></br>
          <span className="bold">Hélène Linglet</span> pour nous avoir guidé et
          suivis tout au long de ce projet.
          <br></br>
          <br></br>
          <span className="bold">Gabriel Avedikian</span>, ses précieux conseils
          et son expértise UX/UI.
          <br></br>
          <br></br>
          <span className="bold">Bastien Calou</span>, son expértises de
          Développeur FRONT-END ainsi que sa précieuse aide.
          <br></br>
          <br></br>
          <span className="bold">Aymeric Mayeux</span> pour son expértises de
          Développeur BACK-END.
          <br></br>
          <br></br>
          Car sans elle, ce projet n'aurait jamais vu le jour:
          <span className="bold">HETIC</span>.
        </div>
      );
    }
  };
  return (
    <div className="about__contents">
      <div className="illustration">
        <img src={Illustration} alt="" />
      </div>
      <div className="content">
        <h1 className="content__title">{props.title}</h1>
        {addContents()}
        <div className="content__text">{props.text}</div>
      </div>
    </div>
  );
};

export default ContentAbout;
