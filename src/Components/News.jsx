import React, { Component } from "react";
import NewsCard from "./NewsCard";
import Spinner from "./Spinner";
import propTypes from "prop-types";

export default class News extends Component {
  constructor() {
    console.log("News class constructor running...");
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  static defaultProps = {
    country: "us",
    pageSize: 10,
    category: "general",
  };
  static propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string,
  };

  async updateNews() {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f1ff68fce06c465090e68baae6c48a8d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let response = await fetch(url);
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    this.setState({
      articles: jsonResponse.articles,
      totalResults: jsonResponse.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }
  handlePrevPage = () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };
  handleNextPage = () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  render() {
    const newsCardContainer = {
      minWidth:'300px',
      maxWidth:'350px',
      justifyContent:'center',
      flexWrap:'wrap'
    }
    return (
      <div>
        <div className="container my-3">
          <h1 className="text-center my-3 mb-3">Breaking News</h1>
          <div className="row">
            {this.state.articles.map((element) => {
              // console.log(element)
              return (
                <div className="col-md-3 my-3 d-flex" style={newsCardContainer} key={element.url}>
                  <NewsCard
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 80)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    newsSource={element.source.name}
                  />
                </div>
              );
            })}
            {this.state.loading && <Spinner />}
            <div className="container d-flex justify-content-between">
              <button
                disabled={this.state.page <= 1}
                type="button"
                className="btn btn-sm btn-primary"
                onClick={this.handlePrevPage}
              >
                &#8592; Previous
              </button>
              <button
                disabled={
                  this.state.page + 1 >
                  Math.ceil(this.state.totalResults / this.props.pageSize)
                }
                type="button"
                className="btn btn-sm btn-primary"
                onClick={this.handleNextPage}
              >
                Next &#8594;
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
