import React, { useState } from "react";
import SingleMaster from "./SingleMaster/SingleMaster";
import SingleDetail from "./SingleDetail/SingleDetail";

const MasterDetail = ({ articles }) => {
  const [selectedArticle, setSelectedArticle] = useState(articles[0]);
  const [sortedArticles, setSortedArticles] = useState([]);
  const [sorted, setSorted] = useState(false);

  const createList = () => {
    if (sorted) {
      return sortedArticles.map((article) => {
        const { id } = article;
        return (
          <SingleMaster handleDetail={handleDetail} key={id} {...article} />
        );
      });
    }

    return articles.map((article) => {
      const { id } = article;
      return <SingleMaster handleDetail={handleDetail} key={id} {...article} />;
    });
  };

  const handleDetail = (activeId) => {
    articles.map((article) => {
      const { id } = article;
      if (id === activeId) {
        setSelectedArticle(article);
        return true;
      }
      return false;
    });
  };

  const sortArticles = () => {
    let newArray = getArticlesByLevel(2);
    newArray = newArray.concat(getArticlesByLevel(1));
    newArray = newArray.concat(getArticlesByLevel(0));
    setSortedArticles(newArray);
  };

  const getArticlesByLevel = (level) => {
    let newArray = articles.filter((article) => {
      //eslint-disable-next-line
      return article["level"] == level;
    });
    return newArray;
  };

  const handleSort = () => {
    sortArticles();
    if (sorted) {
      setSorted(false);
    } else {
      setSorted(true);
    }
  };

  const handleRed = () => {
    setSortedArticles(getArticlesByLevel(2));
    setSorted(true);
  };
  const handleYellow = () => {
    setSortedArticles(getArticlesByLevel(1));
    setSorted(true);
  };
  const handleGreen = () => {
    setSortedArticles(getArticlesByLevel(0));
    setSorted(true);
  };

  return (
    <div className="container">
      <div className="master-container">
        <div className="button-container">
          <button className="primary" onClick={() => handleSort()}>
            Sort Importance
          </button>
          <button className="button-red" onClick={() => handleRed()}>
            RED
          </button>
          <button className="button-yellow" onClick={() => handleYellow()}>
            YELLOW
          </button>
          <button className="button-green" onClick={() => handleGreen()}>
            GREEN
          </button>
        </div>
        {createList()}
      </div>
      <div className="detail-container">
        <SingleDetail {...selectedArticle} />
      </div>
    </div>
  );
};

export default MasterDetail;
