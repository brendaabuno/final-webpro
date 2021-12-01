import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

const About = () => {
    return(
        <>
            <Navigation />
            
            <div className="container my-5">
                <h1>About this Application</h1>
                <p>Full Name : Brenda Yeyen Abuno</p>
                <p>NIM : 105011910006</p>
                <p>Program Study : Sistem Informasi</p>
                <p>Semester : 5</p>

                <div className="my-5 d-flex">
                <Link className="btn btn-outline-dark flex-shrink-0" to="/">
                    Back to Home
                </Link>
            </div>
            </div>


            <Footer />
        </>
    );
}

export default About;