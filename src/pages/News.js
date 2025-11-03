import React, { Component } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
    static defaultProps= {
        country: 'in',
        category: 'general',
        pageSize: 12
    }

    static propTypes= {
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number
    }
    constructor(props) {
        super(props);
        this.state= {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0,
            no_of_pages: 0,
            hasMore: true
        }
        document.title = `${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} - News Anish`;
        this.props.setCategory(`${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}`);
    }

    async updateNews() {
        this.setState({loading: true});
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let fetchedUrl= await fetch(url);
                this.props.setProgress(50);
        let data= await fetchedUrl.json();
        this.setState({
            page: this.state.page,
            articles: data.articles,
            loading: false,
            totalResults: data.totalResults,
            hasMore: data.articles.length < data.totalResults,
            no_of_pages: Math.ceil(data.totalResults / this.props.pageSize) // assuming 20 articles per page
        });
                this.props.setProgress(100);
    }

    async componentDidMount() {
        this.updateNews();
    }

    fetchData = async () => {
        try {
            const nextPage = this.state.page + 1;
            this.setState({ loading: true });

            const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${nextPage}&pageSize=${this.props.pageSize}`;

            let fetchedUrl;
            try {
                fetchedUrl = await fetch(url);
            } catch (err) {
                console.error('Network/fetch error:', err);
                this.setState({ hasMore: false, loading: false });
                return;
            }

            if (!fetchedUrl || !fetchedUrl.ok) {
                console.error('Fetch returned non-OK response:', fetchedUrl && fetchedUrl.status);
                this.setState({ hasMore: false, loading: false });
                return;
            }

            let data;
            try {
                data = await fetchedUrl.json();
            } catch (err) {
                console.error('Failed to parse JSON:', err);
                this.setState({ hasMore: false, loading: false });
                return;
            }

            // If no articles or articles is not an array, stop further loading and hide loader
            if (!data || !Array.isArray(data.articles) || data.articles.length === 0) {
                this.setState({ hasMore: false, loading: false });
                return;
            }

            const newArticles = this.state.articles.concat(data.articles);
            this.setState({
                page: nextPage,
                articles: newArticles,
                loading: false,
                totalResults: data.totalResults,
                hasMore: newArticles.length < data.totalResults,
                no_of_pages: Math.ceil(data.totalResults / this.props.pageSize)
            });

            setTimeout(() => {
                this.setState({ loading: false });
            }, 3000);

        } catch (err) {
            console.error('Unexpected error in fetchData:', err);
            this.setState({ hasMore: false, loading: false });
        }
    }
    //     const nextPage = this.state.page + 1;
    //     this.setState({loading: true});
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${nextPage}&pageSize=${this.props.pageSize}`;
    //     let fetchedUrl= await fetch(url);
    //     let data= await fetchedUrl.json();
    //     // console.log(data);
        
    //     const newArticles = this.state.articles.concat(data.articles);
    //     this.setState({
    //         page: nextPage,
    //         articles: newArticles,
    //         loading: false,
    //         totalResults: data.totalResults,
    //         hasMore: newArticles.length < data.totalResults,
    //         no_of_pages: Math.ceil(data.totalResults / this.props.pageSize)
    //     });

    //     setTimeout(() => {
    //         this.setState({loading: false});
    //     }, 3000);
    //     // this.props.setProgress(100);
    // }

    


  render() {

    // let handlePrevious = async () => {
    //     this.setState({page: this.state.page - 1});
    //     this.updateNews();
    // }

    // let handleNext = async () => {
    //     this.setState({page: this.state.page + 1});
    //     this.updateNews();
    // }

    

    return (
      <div className="container my-3">
        {/* { this.state.loading &&
          <div className="loader" style={{zIndex: '1000'}}></div>
        } */}
            <InfiniteScroll
                dataLength={this.state.articles.length} //This is important field to render the next data
                next={this.fetchData}
                hasMore={this.state.hasMore}
                loader={<div className="spinner"></div>}
                // loader={<div className="loader" ></div>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                    </p>
                }
                >
        <div className="row my-2">
            {this.state.articles.map((article) => (
                <div className="col-md-4 my-3" key={article.url}>
                    <NewsItem 
                        source={article.source.name ? article.source.name : "Hidden source"} 
                        author={article.author ? article.author : "-"} 
                        date={article.publishedAt ? article.publishedAt : "-"} 
                        title={article.title ? article.title : " "} 
                        description={article.description ? article.description : " "} 
                        imageUrl={article.urlToImage ? article.urlToImage : "https://yt3.ggpht.com/WvlIQwlXQpNwK6xdaXieo_0Y9vlr8Pmr-iyMHJIlwYG8oD0R_epXTtOSbtAr1hm8frbZeNsgdw=s88-c-k-c0x00ffffff-no-rj" } 
                        newsUrl={article.url ? article.url : "https://yt3.ggpht.com/WvlIQwlXQpNwK6xdaXieo_0Y9vlr8Pmr-iyMHJIlwYG8oD0R_epXTtOSbtAr1hm8frbZeNsgdw=s88-c-k-c0x00ffffff-no-rj"} 
                    />
                </div>
            ))}
        </div>
            </InfiniteScroll>
        {/* <div className="container">
            <button disabled={this.state.page <= 1} onClick={handlePrevious} type="button" className="btn btn-dark btn-sm">&larr; Previous</button>
            <button disabled={this.state.page >= this.state.no_of_pages - 1} onClick={handleNext} type="button" className="btn btn-dark btn-sm pull-right float-end">Next &rarr;</button>
        </div> */}
      </div>
    )
  }
}

export default News;
