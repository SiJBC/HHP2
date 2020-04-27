import React, { useState } from "react";
import Hero from "../Hero"
import Card from "../card";
import Footer from "../Footer"
import { Link } from "react-router-dom";

import { Alert } from 'reactstrap'

function UserPortal() {




    return (
        <div>
            <Hero />

            <div className="row justify-content-center">
                <br/>
                <h2>Would you like to participate in a study ?</h2>
            </div>
              
            <div className="row justify-content-center">
                <Alert>

                    <div>Alzheimers 
                            </div>
                    <Link to="/form"
                        className={window.location.pathname ===
                            "/form" ? "nav-link active" : "nav-link"}>
                        Pharmaceutical</Link>

                    <Link to="/form"
                        className={window.location.pathname ===
                            "/form" ? "nav-link active" : "nav-link"}>
                        Non-Pharmaceutical</Link>
                </Alert>
                <Alert>

                    <div>Back Problems</div>
                    <Link to="/form"
                        className={window.location.pathname ===
                            "/form" ? "nav-link active" : "nav-link"}>
                        Pharmaceutical</Link>

                    <Link to="/form"
                        className={window.location.pathname ===
                            "/form" ? "nav-link active" : "nav-link"}>
                        Non-Pharmaceutical</Link>
                </Alert>
                <Alert>

                    <div>Diabetes</div>
                    <Link to="/form"
                        className={window.location.pathname ===
                            "/form" ? "nav-link active" : "nav-link"}>
                        Pharmaceutical</Link>

                    <Link to="/form"
                        className={window.location.pathname ===
                            "/form" ? "nav-link active" : "nav-link"}>
                        Non-Pharmaceutical</Link>
                </Alert>
                <Alert>

                    <div>Migraines and Headaches</div>
                    <Link to="/form"
                        className={window.location.pathname ===
                            "/form" ? "nav-link active" : "nav-link"}>
                        Pharmaceutical</Link>

                    <Link to="/form"
                        className={window.location.pathname ===
                            "/form" ? "nav-link active" : "nav-link"}>
                        Non-Pharmaceutical</Link>
                </Alert>
                <Alert>

                    <div>Joint Pains</div>
                    <Link to="/form"
                        className={window.location.pathname ===
                            "/form" ? "nav-link active" : "nav-link"}>
                        Pharmaceutical</Link>

                    <Link to="/form"
                        className={window.location.pathname ===
                            "/form" ? "nav-link active" : "nav-link"}>
                        Non-Pharmaceutical</Link>
                </Alert>
                <Alert>

                    <div>Skin Disorders</div>
                    <Link to="/form"
                        className={window.location.pathname ===
                            "/form" ? "nav-link active" : "nav-link"}>
                        Pharmaceutical</Link>

                    <Link to="/form"
                        className={window.location.pathname ===
                            "/form" ? "nav-link active" : "nav-link"}>
                        Non-Pharmaceutical</Link>
                </Alert>

            </div>
            <div className="row justify-content-center">
                            <h1>Your current posts</h1>
            </div>



            <Footer />

        </div>
    );
}


export default UserPortal;
