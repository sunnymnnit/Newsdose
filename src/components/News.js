import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1,
            loading: true
            //total result na define hote hue bhi jab humne usko set kiya wo define ho gaya
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=e1bff7dfb14b4ac8afb1b6327ba79ed4&page=1&pageSize=20`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedata = await data.json();
        if (parsedata.status == 'error') {
            alert(parsedata.message);
            return;
        }

        this.setState({
            articles: parsedata.articles,
            totalresult: parsedata.totalResults,
            loading: false
        })
    }
    handlenext = async () => {
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=e1bff7dfb14b4ac8afb1b6327ba79ed4&page=${this.state.page + 1}&pageSize=20`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedata = await data.json();
        if (parsedata.status == 'error') {
            alert(parsedata.message);
            return;
        }
        this.setState({
            page: this.state.page + 1,
            articles: parsedata.articles,
            loading: false
        })
    }
    handleprev = async () => {
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=e1bff7dfb14b4ac8afb1b6327ba79ed4&page=${this.state.page - 1}&pageSize=20`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedata = await data.json();
        if (parsedata.status == 'error') {
            alert(parsedata.message);
            return;
        }
        this.setState({
            page: this.state.page - 1,
            articles: parsedata.articles,
            loading: false
        })
    }
    render() {
        return (
            <div className="container my-3">
                {this.state.loading && <Spinner />}
                <h1 className="text-center"><strong>Top Headlines</strong></h1>
                <div className="row">

                    {!this.state.loading && this.state.articles.map((ele) => {
                        return <div className="col-md-4 my-3" key={ele.url}>
                            <NewsItem title={ele.title ? ele.title.slice(0, 70) : ""} description={ele.description ? ele.description.slice(0, 200) : ""} imageurl={ele.urlToImage} newsurl={ele.url} />
                        </div>
                    })
                    }
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-secondary btn-lg" onClick={this.handleprev}>Prev</button>
                    <button disabled={Math.ceil(this.state.totalresult / 20) <= this.state.page} type="button" className="btn btn-secondary btn-lg" onClick={this.handlenext}>Next</button>
                </div>
            </div>
        )
    }
}
export default News