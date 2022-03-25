import React, { Component } from 'react'
import Title from './Title'
import {FaHome, FaHiking , FaCar,FaFantasyFlightGames} from 'react-icons/fa'

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaHome/>,
                title: "Affordable Rooms",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur"
            },
            {
                icon:<FaHiking/>,
                title: "Sight Seeing",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur"
            },
            {
                icon:<FaCar/>,
                title: "Free Shuttle",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur"
            },
            {
                icon:<FaFantasyFlightGames/>,
                title: "ENjoy Excape",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur"
            },

        ]
    }
    render() {
        return (
            <div className="container-fluid services">
             <Title title="Services" />
                <div className="row">
                   {this.state.services.map((item, index) => {
                      return(
                        <div className="col-md-4 col-lg-3 col-12 mx-auto my-3" key={index}>
                            <div className="card shadow-lg border-0 p-4">
                                <article className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                                </article>              
                           </div>
                        </div>
                      )
                   })}
                </div>
            </div>
        )
    }
}