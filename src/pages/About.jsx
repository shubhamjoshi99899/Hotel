import React from 'react'
import { FaFacebookSquare,FaLinkedin } from 'react-icons/fa';
import {IoLogoYoutube} from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import {Link} from 'react-router-dom';
function About() {
    return (
    <div className="container aboutus">
        <div className="row">
            <div className="col-md-6 col-12 my-auto">
                <img src={require('../images/about.svg')} alt="about us" className="img-fluid" />
            </div>
            <div className="col-md-6 col-12 my-auto">
                <h1 className="display-4 text-center my-5">About Us </h1>
                <p className="lead text-justify text-center">The Holy River Hotel, Rishikesh is conveniently located within touching distance to prominent tourist attractions in and around Uttarakhand. Our 5 star hotel in Uttarakhand is also the perfect destination for a blissful getaway from Uttarakhand. Enjoy our warm hospitality and service that make you feel at home. Explore the all meals inclusive 4D Travel offer to plan your next stay.</p>
                <div className="text-center col-md-6 col-12 mx-auto">
                    <Link to="/contact" className="btn btn-outline-dark btn-block btn-lg my-5">Contact us</Link>
                </div>
            </div>
        </div>
        <div className="about_company">
            <h1 className="display-4">About Company</h1>
            <div className="pt-4">
                <p className="about_info">Experience unparalleled luxury at this lavish property offering well-appointed rooms, an incredible restaurant, a luxurious spa, a fully-equipped fitness centre and world-class amenities.!</p>
            </div>
        </div>
        <div className="testimony">
            <h1 className="display-4 mb-4">What Our Clients says</h1>
            <div className="row mb-5">
                <div className="col-md-10 col-12 mx-auto">
                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                        </ol>
                        <div className="carousel-inner card border-0 shadow-lg p-4">
                            <div className="carousel-item active text-center">
                                <div className="row">
                                    <div className="col-md-8 col-12 my-auto">
                                        <img src={require('../images/customers/customer.svg')} className="text-center img-fluid" width="450" height="400" alt="customer1" />
                                    </div>
                                    <div className="col-md-4 col-12 my-auto">
                                        <div className="text-dark">
                                            <h3 className="font-weight-bolder ">Kundan  </h3>
                                            <p>It was a good experience at this hotel. Room was good but don't have any view of mountains as described in-room features on mmt. Room was good and clean. I faced two issues here. 1) they cleaned our room when i was out but without my permission, it's not a good thing according to me. 2) double bed was two single bed joined together which was a little uncomfortable for me..</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item text-center">
                                <div className="row">
                                    <div className="col-md-8 col-12 my-auto">
                                        <img src={require('../images/customers/customer1.svg')} className="text-center img-fluid" width="450" height="400" alt="customer2" />
                                    </div>
                                    <div className="col-md-4 col-12 my-auto">
                                        <div className="text-dark">
                                            <h3 className="font-weight-bolder ">Monali Dixit</h3>
                                            <p>The best part was their ever readiness to help the guests and guide them. The manager played a big role. Similarly the dining area manager was also friendly and helpful. This property location was apt. .</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item text-center">
                                <div className="row">
                                    <div className="col-md-8 col-12 my-auto">
                                        <img src={require('../images/customers/customer3.svg')} className="text-center img-fluid" width="450" height="400" alt="customer3" />
                                    </div>
                                    <div className="col-md-4 col-12 my-auto">
                                        <div className="text-dark">
                                            <h3 className="font-weight-bolder ">Ali Syed</h3>
                                           
                                            <p>Staff was very friendly and English speaking and accommodating. They never said no for anything we asked. Cleanliness of rooms: Rooms were very neat and clean Natural light in room: </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item text-center">
                                <div className="row">
                                    <div className="col-md-8 col-12 my-auto">
                                        <img src={require('../images/customers/customer4.svg')} className="text-center img-fluid" width="450" height="400" alt="customer4" />
                                    </div>
                                    <div className="col-md-4 col-12 my-auto">
                                        <div className="text-dark">
                                            <h3 className="font-weight-bolder ">Customer RTY</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur Praesent commodo cursus magna, vel scelerisque nisl consectetur</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="team">
            <h1 className="display-4">Our Team</h1>
        </div>
        <div className="row mb-5">
            <div className="col-md-4 col-12 mx-auto my-2">
                <div className="card border-0 shadow-lg p-4">
                    <img src="https://source.unsplash.com/TMgQMXoglsM/500x350" className="card-img-top" alt="director" />
                    <div className="card-body">
                        <h5 className="card-title mb-0">Director</h5>
                        <div className="card-text text-black-50">CEO <p className="float-right">5 years</p>
                        </div>
                        <h6 className="mt-5">CONNECT</h6>
                        <div className="d-flex justify-content-around">
                            <FaFacebookSquare className="connect" />
                            <AiFillInstagram className="connect" />
                            <FaLinkedin className="connect" />
                            <IoLogoYoutube className="connect" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-12 mx-auto my-2">
                <div className="card border-0 shadow-lg p-4">
                    <img src="https://source.unsplash.com/sNut2MqSmds/500x350" className="card-img-top" alt="director" />
                    <div className="card-body">
                        <h5 className="card-title mb-0">Team Member</h5>
                        <div className="card-text text-black-50">Manager <p className="float-right">5 years</p>
                        </div>
                        <h6 className="mt-5">CONNECT</h6>
                        <div className="d-flex justify-content-around">
                            <FaFacebookSquare className="connect" />
                            <AiFillInstagram className="connect" />
                            <FaLinkedin className="connect" />
                            <IoLogoYoutube className="connect" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-12 mx-auto my-2">
                <div className="card border-0 shadow-lg p-4">
                    <img src="https://source.unsplash.com/9UVmlIb0wJU/500x350" className="card-img-top" alt="director" />
                    <div className="card-body">
                        <h5 className="card-title mb-0">Team Member</h5>
                        <div className="card-text text-black-50">Manager <p className="float-right">8 years</p>
                        </div>
                        <h6 className="mt-5">CONNECT</h6>
                        <div className="d-flex justify-content-around">
                            <FaFacebookSquare className="connect" />
                            <AiFillInstagram className="connect" />
                            <FaLinkedin className="connect" />
                            <IoLogoYoutube className="connect" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default About;