import React from 'react'
import './footer.css'
import { FaGithub,FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div class="footer">
        <div class="container">
            <div class="row">
                <div class="footer-col">
                    <h4>company</h4>
                    <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Our services</a></li>
                        <li><a href="#">privacy policy</a></li>
                        <li><a href="#">Careers with us</a></li>
                        <li><a href="#">Terms and Conditions</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>get help</h4>
                    <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Our Agents</a></li>
                                <li><a href="#">Our Partners</a></li>
                                <li><a href="#">Book Cab</a></li>
                                <li><a href="#">Payment options</a></li>
                            </ul>
                </div>
                <div class="footer-col">
                    <h4>Destination</h4>
                    <ul>
                                <li><NavLink to='/rooms/single-economy'>Economy rooms</NavLink> </li>
                                <li><NavLink to='/rooms/double-deluxe'>Deluxe rooms</NavLink> </li>
                                <li><NavLink to='/rooms/family-deluxe'>Family rooms</NavLink></li>
                                <li><NavLink to='/rooms/family-standard'>Standard Rooms</NavLink></li>
                                <li><NavLink to='/rooms/presidential-rooms'>Presidential Rooms </NavLink></li>
                            </ul>
                </div>
                <div class="footer-col">
                    <h4>follow us</h4>
                    <p>Designed and developed by Shubham Joshi</p>  
                    <div class="social-links">
                        <a href="https://www.linkedin.com/in/shubham-joshi-272a01202"><FaGithub/></a>
                        <a href="https://www.linkedin.com/in/shubham-joshi-272a01202"><FaLinkedin/></a>
                        <a href="https://www.instagram.com/i_s_h_u_b_h_a_m_j_o_s_h_i__/"><FaInstagram/></a>
                        <a href="https://twitter.com/Shubham04882264"><FaTwitter/></a>
                    </div>
                </div>
                
                   
                ]
            </div>
        </div>
    </div>
    )
}
export default Footer