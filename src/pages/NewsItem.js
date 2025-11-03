import React, { Component } from 'react';
import DefaultImage from '../components/DefaultImage';

export class NewsItem extends Component {
    constructor(props) {
        super(props);
        
        // Destructure props inside constructor
        const { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        
        // If you need these as instance properties (usually not necessary)
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.newsUrl = newsUrl;
        this.author = author;
        this.source = source;

        const utcDate = new Date(date);
        const istDate = utcDate.toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        }).replace(',', '');

        this.date = istDate;
    }
  render() {
    return (
      <div className="card">
        <span style={{zIndex: '1', left: '0'}} className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">{this.source}</span>
        
        {this.imageUrl == "https://yt3.ggpht.com/WvlIQwlXQpNwK6xdaXieo_0Y9vlr8Pmr-iyMHJIlwYG8oD0R_epXTtOSbtAr1hm8frbZeNsgdw=s88-c-k-c0x00ffffff-no-rj" ? <DefaultImage /> : <img src={this.imageUrl} className="card-img-top" alt="..." />}
        <div className="card-body">
            <h5 className="card-title">{this.title}</h5>
            <p className="card-text">{this.description}</p>
                <p className="card-text"><small className="text-body-secondary">Author: {this.author}<br />
                Date: {this.date}
                </small></p>
                <a href={this.newsUrl} className="btn btn-primary">Read more...</a>
        </div>
        </div>
    )
  }
}

export default NewsItem
