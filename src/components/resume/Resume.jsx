import React from "react";
import "./resume.css";
import Akash from "./akash.pdf";

const Resume = () => {
  function cnfm() {
    window.confirm("Are you sure you want to download Resume");
  };
  return (
    <div className="resume">
      <div className="resume-left">
        <div className="resume-left-text">
          <h1>Resume/CV</h1>
          <p>
            "Unveiling Excellence on Paper: A Reflection of Skills and
            "
          </p>

          <button className="resume-button" onClick={cnfm}>
            <a href={Akash} download>
              Download
            </a>
          </button>
        </div>

      </div>
      <div className="resume-right">
        <embed
          src={Akash}
          type="application/pdf"
          width="100%"
          height="600px"
        ></embed>
      </div>
    </div>
  );
};

export default Resume;
