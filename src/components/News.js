import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Loader from './Loader'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


export class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 10,
        category: "general"
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    articles = []
    constructor(props) {
        super(props);
        this.state = {
            articles: this.articles,
            page: 1,
            totalResults: 0
        }
        document.title = `${(this.props.category).charAt(0).toUpperCase() + this.props.category.slice(1) + " - News Monkey"}`;
    }

    async updatepage() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=971b8265780241da9d63fbb6c0ca9b77&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedata = await data.json();
        console.log(parsedata);
        this.setState({
            articles: parsedata.articles,
            totalResults: parsedata.totalResults,
            loading: false
        })
    }

    async componentDidMount() {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=971b8265780241da9d63fbb6c0ca9b77&pagesize=${this.props.pageSize}`;
        // this.setState({loading: true})
        // let data = await fetch(url);
        // let parsedata = await data.json();
        // console.log(parsedata);
        // this.setState({ 
        //     articles: parsedata.articles,
        //     totalResults: parsedata.totalResults,
        //     loading: false
        //     })
        this.updatepage();
    }
    // handlenext = async () => {
    //     console.log("next");
    //     // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=971b8265780241da9d63fbb6c0ca9b77&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
    //     // this.setState({loading: true})
    //     // let data = await fetch(url);
    //     // let parsedata = await data.json();
    //     // this.setState({
    //     //     page: this.state.page + 1,
    //     //     articles: parsedata.articles,
    //     //     loading: false
    //     // })
    //     this.setState({ page: this.state.page + 1 });
    //     this.updatepage();
    // }

    // handleprevious = async () => {
    //     console.log("previous")
    //     // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=971b8265780241da9d63fbb6c0ca9b77&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
    //     // this.setState({loading: true})
    //     // let data = await fetch(url);
    //     // let parsedata = await data.json();
    //     // this.setState({
    //     //     page: this.state.page - 1,
    //     //     articles: parsedata.articles,
    //     //     loading: false
    //     // })
    //     this.setState({ page: this.state.page - 1 });
    //     this.updatepage();
    // }

    fetchData = async () => {
        const nextpage = this.state.page + 1;
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=971b8265780241da9d63fbb6c0ca9b77&page=${nextpage}&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedata = await data.json();
        console.log(parsedata);
        this.setState({
            articles: this.state.articles.concat(parsedata.articles),
            totalResults: parsedata.totalResults,
            loading: false
        })
    }

    render() {
        return (
            <>
                <h2 className='text-center'> Newsmonkey - Top Headlines on {(this.props.category).charAt(0).toUpperCase() + this.props.category.slice(1)}</h2>
                {/* { this.state.loading && <Loader/>} */}
                <InfiniteScroll
                    dataLength={this.state.articles.length} //This is important field to render the next data
                    next={this.fetchData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Loader />}
                >
                    <div className="container">
                        <div className="row">
                            {/* {!this.state.loading && Array.isArray(this.state.articles) && this.state.articles.map((element) => { */}
                            {Array.isArray(this.state.articles) &&this.state.articles.map((element) => {
                                return <div className="col-md-4" key={element.url} >
                                    <Newsitem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container, d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" onClick={this.handleprevious} class="btn btn-dark">Previous &laquo;</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" onClick={this.handlenext} class="btn btn-dark">Next &raquo;</button>
                </div> */}
            </>
        )
    }
}

export default News



