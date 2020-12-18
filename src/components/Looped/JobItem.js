import React from "react";

const JobItem = (props) => {
  return (
    <div
      className={props.featured ? "job featured" : "job"}
      style={{ display: props.display ? "flex" : "none" }}
    >
      <div className="details">
        <img src={props.logo} alt="" />

        <div className="info">
          <div className="job-setter">
            <span>{props.company}</span>
            {props.new && <span>New!</span>}
            {props.featured && <span>Featured</span>}
          </div>
          <div className="job-title">{props.position}</div>
          <div className="extra-info">
            <span>{props.postedAt}</span>
            <span>{props.contract}</span>
            <span>{props.location}</span>
          </div>
        </div>
      </div>
      <div className="tags">
        <div className="tag">{props.role}</div>
        <div className="tag">{props.level}</div>
        {props.languages.map((lang, index) => (
          <div key={index} className="tag">
            {lang}
          </div>
        ))}
        {props.tools.map((tool, index) => (
          <div key={index} className="tag">
            {tool}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobItem;
