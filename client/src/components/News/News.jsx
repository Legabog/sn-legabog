import React from "react";
import classes from "./News.module.css";
import store from "../../redux/redux-store";
import news from "../../assets/images/icons/navbar/news.svg";
import settings_news from "../../assets/images/icons/settings-news.svg";

const News = (props) => {
  return (
    <div className={classes.root}>
      <div className={classes.optionsTogether}>
        <div className={classes.optionsLabel}>
          <img src={news} alt="news"></img>
          <h1>Headline News</h1>
        </div>
        <div className={classes.options}>
          <div className={classes.optionstitle}>
            <img src={settings_news} alt="settings news"></img>
            <h1>Options</h1>
          </div>

          <div className={classes.optionCountries}>
            <div className={classes.inputGroup1}>
              <select
                id="inputGroupSelect04"
                aria-label="Example select with button addon"
              >
                {props.countries.map((e) => (
                  <option value={e.id} key={e.id}>
                    {e.title}
                  </option>
                ))}
              </select>
                <button
                  type="button"
                  onClick={() => {
                    props.setCountry(
                      document.getElementById("inputGroupSelect04").value
                    );
                    props.getNews(
                      store.getState().newsReducer.country,
                      store.getState().newsReducer.category
                    );
                  }}
                >
                  Choose country
                </button>
            </div>
          </div>

          <div className={classes.optionCategories}>
            <div className={classes.inputGroup2}>
              <select
                id="inputGroupSelect03"
                aria-label="Example select with button addon"
              >
                {props.categories.map((e) => (
                  <option value={e} key={e}>
                    {e}
                  </option>
                ))}
              </select>
                <button
                  type="button"
                  onClick={() => {
                    props.setCategory(
                      document.getElementById("inputGroupSelect03").value
                    );
                    props.getNews(
                      store.getState().newsReducer.country,
                      store.getState().newsReducer.category
                    );
                  }}
                >
                  Choose category
                </button>
            </div>
          </div>
        </div>
      </div>

      {props.news.map((e) => {
        let date = new Date(e.publishedAt);
        return (
          <div className={classes.newsCard} key={Math.random(1000)}>
            <h2>{e.title}</h2>
            <p className={classes.newsHeader}>
              {date.toLocaleString()} ● Источник: {e.source.name}
              {" ● "}
              {e.author ? `Автор: ` + e.author : ""}
            </p>
            <div className={classes.newsInfo}>
              <a href={e.url}>
                <img src={e.urlToImage} alt="description"></img>
              </a>
              <p>{e.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default News;
