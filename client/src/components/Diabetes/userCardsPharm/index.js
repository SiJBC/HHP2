import React, { useState, useEffect } from 'react';
import API from "../../../utils/API"
import Card from "../../card"



const Example = (props) => {
 
  const [posts, setPosts] = useState([])

  useEffect(() => {

    getDiabetesPosts()
  
}, [])

function getDiabetesPosts(email){
    API.getDiabetesPharm()
    .then(res =>
      setPosts(res.data))
    .catch(err => console.log(err))
  }

 

  return (
    <div>
      <div className = "container mt-20px">
      <div className="row justify-content-center">
                            <h1>User pharmaceutical posts</h1>
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
                                            Story= {post.Story}
                                            Source = {post.Source}
                                            />
                                        ))}
                                       </div> 
      </div>     
    </div>
  );
}

export default Example;