import React from "react";
import imgTiroir1 from "../Images/1.JPG";
import imgTiroir2 from "../Images/2.JPG";

import "../Styles/Tiroirs.css";

function Tiroirs() {
  return (
    <>
      <h1 className="title-tiroirs">Tiroirs</h1>
      <div className="tiroirs1">
        <p className="text-tiroirs1">
          Grâce à ses rebords bas et transparents, le tiroir offre une rangés et
          facilite la prise en main par le pharmacien. Tous les tiroirs sont
          dotés des accessoires standards conçus pour garantir une
          fonctionnalité maximale.
        </p>
        <img src={imgTiroir1} className="image-tiroir1" alt="Tiroir"></img>
      </div>
      <br />
      <br />
      <div className="tiroirs2">
        <p className="text-tiroirs2">
          Les façades de tiroir avec prise de doigt sont réalisées en MDF avec
          un traitement de peinture epoxy polyuréthane opaque. Celles-ci peuvent
          être équipées de porte-lettre pour donner une référence sur chaque
          façade de tiroir.
        </p>
        <img src={imgTiroir2} className="image-tiroir2" alt="Tiroir"></img>
      </div>
    </>
  );
}

export default Tiroirs;
