import React, { Component } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import Newsitem from "./Newsitem"; // Import Newsitem component
import Spinner from "./Spinner"; // Import Spinner component

export class News extends Component {
  constructor() {
    super();
    // Initialize state
    this.state = {
      articles: [],
      loading: true, // Set loading to true initially
      page: 1,
    };
  }

  // Fetch data when component mounts
  async componentDidMount() {
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=33fe70720bf44b6d907f32db4a5b6fde&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false }); // Set loading to false after fetching data
  }

  // Handler for previous button click
  handlePreviousClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b272ce6f8709479da0594f68d93711c1&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true }); // Set loading to true before fetching data
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false, // Set loading to false after fetching data
    });
  };
  
  // Handler for next button click
  handleNextClick = async () => {
    console.log("Next");
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b272ce6f8709479da0594f68d93711c1&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true }); // Set loading to true before fetching data
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false, // Set loading to false after fetching data
      }); 
    }
  };

  render() {
    console.log("render");
    return (
      <div className="container my-3">
        {/* NewsMonkey - Top Headlines */}
        <h2 className="text-center" style={{margin: '40px 0px'}}>NewsMonkey - Top Headlines</h2>
        {/* Render spinner conditionally */}
        {this.state.loading && <Spinner />}
        <div className="row">
          {/* Map through articles and render Newsitem component */}
          {this.state.articles.map((element) => {
            const title = element.title || "";
            const description = element.description || "";
            const imageUrl = element.urlToImage || "default-image-url";

            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={title}
                  description={description}
                  imageUrl={imageUrl}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        {/* Previous and Next buttons */}
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-primary"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            type="button"
            className="btn btn-primary"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

// Define propTypes for News component
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
