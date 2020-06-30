import React from "react";

const SingleDetail = ({ title, body, level, url_action, url_explanation }) => {
  return (
    <div className="detail">
      <div className="header">
        <span className={`level color-${level}`}></span>
        <h1 className="title">{title}</h1>
      </div>
      <div className="body">
        <p>{body}</p>
        <div className="link-container">
          <h1 className="title">weiterlesen:</h1>
          <a
            className="link"
            target="_blank"
            href={url_action[0]["url"]}
            rel="noopener noreferrer"
          >
            {url_action[0]["title"]}
          </a>
          <a
            className="link"
            target="_blank"
            href={url_explanation[0]["url"]}
            rel="noopener noreferrer"
          >
            {url_explanation[0]["title"]}
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleDetail;
