import React, { Component } from "react";
import sampleOutput from "../../sampleOutput.json";

export class NewsCard extends Component {
  render() {
    const cardStyles = {
      backgroundColor: "#f5fdfff7",
      boxShadow: "2px 2px 8px 2px #6b6b6b",
      
    };

    const { title, description, imageUrl, newsUrl, author, date,newsSource } = this.props;
    // console.log(sampleOutput.articles);
    return (
      <div>
        <div className="card" style={cardStyles}>
          <img
            style={{ width: "100%", height: "166px", objectFit: "cover" }}
            src={
              !imageUrl
                ? "https://image.cnbcfm.com/api/v1/image/107067502-1653564514625-gettyimages-1149449076-BPS01_Branding_Location_OC_4.jpeg?v=1725613880&w=1920&h=1080"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}...
              <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"85%",fontSize:"0.7rem",zIndex:1}}>
                {newsSource?newsSource:null}
              </span>
            </h5>

            <p className="card-text">{description}...</p>
            <p class="card-text">
              <small class="text-body-secondary">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toDateString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-primary btn-sm"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsCard;
