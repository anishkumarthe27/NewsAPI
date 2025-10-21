import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
    constructor(props) {
        super(props);
        this.state= {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0,
            no_of_pages: 0
        }
    }

    async componentDidMount() {
        // Fetch news articles from an API and update the state
        this.setState({loading: true});
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9a45befbd55d456baafd98442bf1dc23&page=${this.state.page}&pageSize=10`;
        await fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    page: this.state.page,
                    articles: data.articles,
                    loading: false,
                    totalResults: data.totalResults,
                    no_of_pages: Math.ceil(data.totalResults / 10) // assuming 10 articles per page
                });
            });
            console.log(this.state.totalResults);
    }

    


  render() {

    let handlePrevious = async () => {
        // this.setState({page: this.state.page - 1}, () => {
            this.setState({loading: true});
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9a45befbd55d456baafd98442bf1dc23&page=${this.state.page - 1}&pageSize=10`;
            let fetchedUrl= await fetch(url);
            let data= await fetchedUrl.json();
            this.setState({
                page: this.state.page - 1,
                articles: data.articles,
                loading: false,
                totalResults: data.totalResults,
                no_of_pages: Math.ceil(data.totalResults / 10) // assuming 20 articles per page
            });
                
        console.log(this.state.page);
        console.log(this.state.no_of_pages);
    }

    let handleNext = async () => {
            this.setState({loading: true});
            console.log(this.state.page);
            let newPage = this.state.page + 1;
            // console.log(newPage);
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9a45befbd55d456baafd98442bf1dc23&page=${newPage}&pageSize=10`;
            let fetchedUrl= await fetch(url);
            let data= await fetchedUrl.json();
            this.setState({
                page: newPage,
                articles: data.articles,
                totalResults: data.totalResults,
                loading: false,
                no_of_pages: Math.ceil(data.totalResults / 10) // assuming 20 articles per page
            });
    }

    return (
      <div className='container my-2'>
        { this.state.loading &&
          <div className="loader" style={{zIndex: '1000'}}></div>
        }
        <div className="row my-2">
            {this.state.articles.map((article) => (
                <div className="col-md-4 my-3" key={article.url}>
                    <NewsItem 
                        title={article.title ? article.title : "Loading title"} 
                        description={article.description ? article.description : "Loading description"} 
                        imageUrl={article.urlToImage ? article.urlToImage : "https://yt3.ggpht.com/WvlIQwlXQpNwK6xdaXieo_0Y9vlr8Pmr-iyMHJIlwYG8oD0R_epXTtOSbtAr1hm8frbZeNsgdw=s88-c-k-c0x00ffffff-no-rj" } 
                        newsUrl={article.url ? article.url : "https://yt3.ggpht.com/WvlIQwlXQpNwK6xdaXieo_0Y9vlr8Pmr-iyMHJIlwYG8oD0R_epXTtOSbtAr1hm8frbZeNsgdw=s88-c-k-c0x00ffffff-no-rj"} 
                    />
                </div>
            ))}
        </div>
        <div className="container">
            <button disabled={this.state.page <= 1} onClick={handlePrevious} type="button" className="btn btn-dark btn-sm">&larr; Previous</button>
            <button disabled={this.state.page >= this.state.no_of_pages} onClick={handleNext} type="button" className="btn btn-dark btn-sm pull-right float-end">Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
