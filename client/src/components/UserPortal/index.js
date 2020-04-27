import React, { useState, useEffect } from "react";
import Hero from "../Hero"
import Card from "../card";
import Footer from "../Footer"
import { Link } from "react-router-dom";

import { Alert } from 'reactstrap'
import API from "../../utils/API";

function UserPortal() {

const [posts, setPosts] = useState([])

useEffect(() => {
    const email = localStorage.getItem("userEmail") 
      loadUserPosts(email)
        console.log(posts)
}, [])

function loadUserPosts(email){
    API.returnByEmail(email)
    .then(res =>
      setPosts(res.data))
    .catch(err => console.log(err))
  }


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
                                   <div className = "row justify-content-center">
                                        {posts.map(post => (
                                            <Card
                                            key ={post._id}
                                            Ailment = {post.Ailment}
                                            Method = {post.Method}
                                            Treatment ={post.Treatment}
                                            Age = {post.Age}
                                            ActivityLevel = {post.ActivityLevel}
                                            Source = {post.Source}
                                            />
                                        ))}
                                       </div> 


            <Footer />

        </div>
    );
}


export default UserPortal;
