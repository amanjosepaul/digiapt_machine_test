import React from "react";
import "./card.css";
import FinanceIcon from "../../../assets/pngIcons/financeIcon.png";
import TechnologyIcon from "../../../assets/pngIcons/technologyIcon.png";
import AutoIcon from "../../../assets/pngIcons/autoIcon.png";
const Card = (props) => {
  const { name, title, description, category, date } = props;
  const desWordOverflow =
    description.split(" ").length > 50 ? "decscription-overflow" : "";
  console.log("desWordOverflow: ", desWordOverflow);

  let icon =
    category === "auto"
      ? AutoIcon
      : category === "finance"
      ? FinanceIcon
      : TechnologyIcon;
  return (
    <div className="solution_card">
      <div className="hover_color_bubble"></div>
      <div className="header">
        <div className="so_top_icon">
          <img src={icon} alt="fireSpot" />
        </div>
        <div className="solu_title">
          <h1>{name}</h1>
        </div>
      </div>
      <div className={`${desWordOverflow} solu_description`}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
