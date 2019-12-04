import React, {Component, useEffect, useState} from 'react'
import styled from "styled-components";

class News extends Component {
    constructor(props) {
        super(props);
        this.state= {
            articles: ""
        }
    }
    // componentDidMount() {

    //     let newsQueryURL =  `https://api.sportsdata.io/v3/nfl/scores/json/News?key=e785706d32a54b8f850c248da415cb73`
    
    //     fetch(newsQueryURL).then((response) => {
    //       return response.json();
    //     }).then((newsData) => {
    //       console.log(newsData[0].NewsID);
    //       this.setState({
    //         articles: newsData[0].NewsID
    //       })
    //     console.log(this.state.articles)
    //     })
    //   }


    render() {
        console.log(this.state.articles)
        return (
            <h3>News </h3>
        )
    }
}

export default News;