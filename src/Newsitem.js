import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    // Destructuring props for easier access
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    
    return (
      <div>
        {/* Card container */}
        <div className="card mb-3" style={{ width: "18rem" }}>
          {/* Badge for news source */}
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-primary" style={{left:"86%", zIndex:"1"}}>
            {source}
          </span>
          {/* Image */}
          <img src={imageUrl} className="card-img-top" alt="..." />
          {/* Card body */}
          <div className="card-body">
            {/* Title */}
            <h5 className="card-title">
              {title}...
            </h5>
            {/* Description */}
            <p className="card-text">{description}...</p>
            {/* Author and date */}
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            {/* Read more button */}
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
