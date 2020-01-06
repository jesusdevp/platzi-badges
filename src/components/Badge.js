import React from "react";

import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://www.gravatar.com/avatar?d=identicon"
            alt="Avatar"
          />
          <h1>
            Jesús <br />
            Ramírez
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>Frontend Enginer</h3>
          <div>@jesusdevp</div>
        </div>

        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
