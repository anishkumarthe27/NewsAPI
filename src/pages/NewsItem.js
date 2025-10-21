import React, { Component } from 'react'

export class NewsItem extends Component {
    constructor(props) {
        super(props);
        
        // Destructure props inside constructor
        const { title, description, imageUrl, newsUrl } = this.props;
        
        // If you need these as instance properties (usually not necessary)
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.newsUrl = newsUrl;
    }
  render() {
    return (
      <div className="card">
        <img src={this.imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{this.title}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    )
  }
}

export default NewsItem
