import React, { Component } from 'react'
import Title from './Title'
import {FaHome, FaHiking , FaCar,FaFantasyFlightGames} from 'react-icons/fa'
import './Things.css'
export default class Things extends Component {
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
             <Title title="Nearby Places"/>
             <div class="grid">
					<figure class="effect-marley">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/11.jpg" alt="img11"/>
						<figcaption>
							<h2>Sweet <span>Marley</span></h2>
							<p>Marley tried to convince her but she was not interested.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
                    
					<figure class="effect-marley">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/12.jpg" alt="img12"/>
						<figcaption>
							<h2>Sweet <span>Marley</span></h2>
							<p>Marley tried to convince her but she was not interested.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
                    <figure class="effect-marley">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/12.jpg" alt="img12"/>
						<figcaption>
							<h2>Sweet <span>Marley</span></h2>
							<p>Marley tried to convince her but she was not interested.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
                    
				</div>
				
            </div>
        )
    }
}   