import React from "react";

const SingleMaster = ({ title, handleDetail, id, level, body }) => {
  return (
    <div className="master" onClick={() => handleDetail(id)}>
      <div className="header">
        <span className={`level color-${level}`}></span>
        <h1 className="title">{title}</h1>
      </div>
      <p className="body">{body}</p>
    </div>
  );
};

export default SingleMaster;
