import React from "react";
import classes from "./News.module.css";
import map_svg from "../../assets/images/map.svg";


const News = React.memo((props) => {

  const changeHander = (e) => {
    props.setCountry(
      document.getElementById("inputGroupSelect04").value
    );
  }

  const changeHander_2 = (e) => {
    props.setCategory(
      document.getElementById("inputGroupSelect03").value
    );
  }


  return (
    <div className={classes.root}>
      <div className={classes.optionsTogether}>
        <div className={classes.optionsLabel}>
          <svg>
            <use href={map_svg + "#news_icon"} />
          </svg>
          <h1>Headline News</h1>
        </div>
        <div className={classes.options}>
          <div className={classes.optionstitle}>
            <svg>
              <use href={map_svg + "#news_settings"} />
            </svg>
            <h1>Options</h1>
          </div>

          <div className={classes.optionCountries}>
            <div className={classes.inputGroup1}>
              <select
                id="inputGroupSelect04"
                aria-label="Example select with button addon"
                value={props.country}
                onChange={changeHander}
                
              >
                {props.countries.map((e) => (
                  <option value={e.id} key={e.id} >
                    {e.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className={classes.optionCategories}>
            <div className={classes.inputGroup2}>
              <select
                id="inputGroupSelect03"
                aria-label="Example select with button addon"
                value={props.category}
                onChange={changeHander_2}
              >
                {props.categories.map((e) => (
                  <option value={e} key={e}>
                    {e}
                  </option>
                ))}
              </select>
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
});

export default News;
