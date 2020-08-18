import React from "react";
import News from "./News";
import { connect } from "react-redux";
import {
  getNews,
  setCountry,
  setCategory,
  setNewsData,
} from "../../redux/news-reducer";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class NewsContainer extends React.Component {
  componentDidMount() {
    this.props.getNews(this.props.country, this.props.category);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.country !== prevProps.country ||
      this.props.category !== prevProps.category
    ) {
      this.props.getNews(this.props.country, this.props.category);
    }
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <News {...this.props} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.newsReducer.news,
    isFetching: state.newsReducer.isFetching,
    country: state.newsReducer.country,
    category: state.newsReducer.category,
    countries: state.settingsReducer.countries,
    categories: state.settingsReducer.categories,
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    getNews,
    setCountry,
    setCategory,
    setNewsData,
  })
)(NewsContainer);
