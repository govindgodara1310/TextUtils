import React, { Component } from 'react'


export class Newsitem extends Component {

    render() {
        let { title, description, imageurl, newsurl, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{ width: "18rem" }}>
                    <span class="position-absolute translate-middle badge rounded-pill bg-primary" style={{ left: '90%' , top: "1%" , zIndex: "1"}}>
                        {source}
                    </span>
                    <img height="250rem" src={!imageurl ? "https://t3.ftcdn.net/jpg/01/63/19/26/360_F_163192661_xiqym8AXxoRHT08i1vjxFC0HQF7IKza8.webp" : imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className='card-text'><small className='text-muted'>By {(author) ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsurl} target="_blank" className="btn btn-sm btn-dark btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
