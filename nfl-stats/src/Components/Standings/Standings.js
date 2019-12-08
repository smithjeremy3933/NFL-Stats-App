import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import styled from "styled-components";


class Standings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      standings: [],
      isLoaded: false,
    }

  }
  componentDidMount() {
    let queryURL = `https://api.sportsdata.io/v3/nfl/scores/json/Standings/2019REG?key=44eac85464bf4939a05156483c9dc690`;

    fetch(queryURL).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      //   console.log(data.name);
      this.setState({
        isLoaded: true,
        standings: data
      })
      console.log(this.state.standings)
    });
  }


  render() {

    var { isLoaded, standings } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>
    }

    else {
      return (
        <div className="App">
          <div id="afcEast" class="box one"
            style={{
              
            }}>
             <h1>AFC East</h1>
            
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Wins</th>
                  <th scope="col">Losses</th>
                  <th scope="col">Ties</th>
                  <th scope="col">Percentage</th>
                </tr>
              </thead>
              <tbody>

                {standings.filter((data) => { return data.Division === "East" && data.Conference === "AFC" }).map(item => {

                  return (<tr key={item.id}>
                    <td>{item.Name}</td>
                    <td>{item.Wins}</td>
                    <td>{item.Losses}</td>
                    <td>{item.Ties}</td>
                    <td>{item.Percentage}</td>
                  </tr>);


                })}

          
                {/* <tr>| Wins: {item.wins} |
                                       Losses: {item.losses} | Ties: {Items.ties} | Percentage: {item.percentage}
                                    </tr> */}
            
            
            
              </tbody>

            </table>
        </div>


            <div class="box">
              <h1 > AFC West </h1>
              <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Wins</th>
                  <th scope="col">Losses</th>
                  <th scope="col">Ties</th>
                  <th scope="col">Percentage</th>
                </tr>
              </thead> 
                <tbody>

                {standings.filter((data) => { return data.Division === "West" && data.Conference === "AFC" }).map(item => {

                  return (<tr key={item.id}>
                    <td>{item.Name}</td>
                    <td>{item.Wins}</td>
                    <td>{item.Losses}</td>
                    <td>{item.Ties}</td>
                    <td>{item.Percentage}</td>
                  </tr>);


                    })}                

                  {/* <tr>| Wins: {item.wins} |
                                       Losses: {item.losses} | Ties: {Items.ties} | Percentage: {item.percentage}
                                    </tr> */}
                </tbody>

                </table>
                                    
            </div>
            <div class="box">
            <h1> AFC North </h1>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Wins</th>
                  <th scope="col">Losses</th>
                  <th scope="col">Ties</th>
                  <th scope="col">Percentage</th>
                </tr>
                </thead>
                <tbody>
                  {standings.filter((data) => { return data.Division === "North" && data.Conference === "AFC" }).map(item => {

                    return (<tr key={item.id}>
                      <td>{item.Name}</td>
                      <td>{item.Wins}</td>
                      <td>{item.Losses}</td>
                      <td>{item.Ties}</td>
                      <td>{item.Percentage}</td>
                      </tr>);


                  })}

                  {/* <tr>| Wins: {item.wins} |
                                       Losses: {item.losses} | Ties: {Items.ties} | Percentage: {item.percentage}
                                    </tr> */}
                </tbody>

            </table>

            </div>

            <div class="box">                      
            <h1> AFC South </h1>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Wins</th>
                  <th scope="col">Losses</th>
                  <th scope="col">Ties</th>
                  <th scope="col">Percentage</th>
                </tr>
                </thead>
                <tbody>

                {standings.filter((data) => { return data.Division === "South" && data.Conference === "AFC" }).map(item => {

                  return (<tr key={item.id}>
                  <td>{item.Name}</td>
                  <td>{item.Wins}</td>
                  <td>{item.Losses}</td>
                  <td>{item.Ties}</td>
                  <td>{item.Percentage}</td>
                  </tr>);


                    })}


                  {/* <tr>| Wins: {item.wins} |
                                       Losses: {item.losses} | Ties: {Items.ties} | Percentage: {item.percentage}
                                    </tr> */}
                </tbody>

            </table>

            </div>

            <div class="box">
            <h1>NFC East</h1>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Wins</th>
                  <th scope="col">Losses</th>
                  <th scope="col">Ties</th>
                  <th scope="col">Percentage</th>
                </tr>
              </thead>
              <tbody>

                {standings.filter((data) => { return data.Division === "East" && data.Conference === "NFC" }).map(item => {

                  return (<tr key={item.id}>
                    <td>{item.Name}</td>
                    <td>{item.Wins}</td>
                    <td>{item.Losses}</td>
                    <td>{item.Ties}</td>
                    <td>{item.Percentage}</td>
                  </tr>);


                })}


                {/* <tr>| Wins: {item.wins} |
                                       Losses: {item.losses} | Ties: {Items.ties} | Percentage: {item.percentage}
                                    </tr> */}
              </tbody>

            </table>

            </div>


            <div class="box">                       
            <h1> NFC West</h1>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Wins</th>
                  <th scope="col">Losses</th>
                  <th scope="col">Ties</th>
                  <th scope="col">Percentage</th>
                </tr>
              </thead> 
                <tbody>

                {standings.filter((data) => { return data.Division === "West" && data.Conference === "NFC" }).map(item => {

                  return (<tr key={item.id}>
                    <td>{item.Name}</td>
                    <td>{item.Wins}</td>
                    <td>{item.Losses}</td>
                    <td>{item.Ties}</td>
                    <td>{item.Percentage}</td>
                  </tr>);


                    })}                

                  {/* <tr>| Wins: {item.wins} |
                                       Losses: {item.losses} | Ties: {Items.ties} | Percentage: {item.percentage}
                                    </tr> */}
                </tbody>

            </table>

            </div>

            <div class="box">
            <h1> NFC North </h1>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Wins</th>
                  <th scope="col">Losses</th>
                  <th scope="col">Ties</th>
                  <th scope="col">Percentage</th>
                </tr>
                </thead>
                <tbody>
                  {standings.filter((data) => { return data.Division === "North" && data.Conference === "NFC" }).map(item => {

                    return (<tr key={item.id}>
                      <td>{item.Name}</td>
                      <td>{item.Wins}</td>
                      <td>{item.Losses}</td>
                      <td>{item.Ties}</td>
                      <td>{item.Percentage}</td>
                      </tr>);


                  })}

                  {/* <tr>| Wins: {item.wins} |
                                       Losses: {item.losses} | Ties: {Items.ties} | Percentage: {item.percentage}
                                    </tr> */}
                </tbody>

            </table>

            </div>

            <div class="box">                       
            <h1> NFC South </h1>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Wins</th>
                  <th scope="col">Losses</th>
                  <th scope="col">Ties</th>
                  <th scope="col">Percentage</th>
                </tr>
                </thead>
                <tbody>

                {standings.filter((data) => { return data.Division === "South" && data.Conference === "NFC" }).map(item => {

                  return (<tr key={item.id}>
                  <td>{item.Name}</td>
                  <td>{item.Wins}</td>
                  <td>{item.Losses}</td>
                  <td>{item.Ties}</td>
                  <td>{item.Percentage}</td>
                  </tr>);


                    })}


                  {/* <tr>| Wins: {item.wins} |
                                       Losses: {item.losses} | Ties: {Items.ties} | Percentage: {item.percentage}
                                    </tr> */}
                </tbody>

            </table>

            
          </div>

        </div>
      )
    }

  }





}

export default Standings;