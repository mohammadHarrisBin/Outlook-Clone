import React from "react";
import "../styles/topbarOptions.css";

function TopbarOptions({ title, icon, isClicked }) {
  return (
    <div className="topBarOptions">
      {isClicked ? (
        <button>
          {icon && icon}
          <p>{title}</p>
        </button>
      ) : (
        <button>
          <p>{title}</p>
        </button>
      )}
    </div>
  );
}

export default TopbarOptions;
