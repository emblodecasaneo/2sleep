import React from "react";
import { Link } from "react-router-dom";

const Back = ({title}) => {


  return (
    <div>
      <div
        class="page-title"
        style={{backgroundImage: 'url(assets/images/background/page-title-5.jpg)'}}
      >
        <div class="auto-container">
          <h1>{title}</h1>
        </div>
      </div>
      <div class="bredcrumb-wrap">
        <div class="auto-container">
          <ul class="bredcrumb-list">
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>{title}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Back;
