import React, { useState, useEffect } from 'react';
import API from "../../../utils/API"
import Card from "../../card"
import LikeBtn from "../../LikeBtn"



const Example = (props) => {
 
  const [posts, setPosts] = useState([])

  useEffect(() => {

      getHeadachePosts()
  
}, [])

function likePost(id) {
  API.likePost(id)
  .then(console.log('updated'))
    .catch(err => console.log(err))
}

function getHeadachePosts(email){
    API.getHeadache()
    .then(res =>
      setPosts(res.data))
    .catch(err => console.log(err))
  }

 

  return (
    <div>
      <div className = "container mt-20px">
      <div className="row justify-content-center">
                            <h1>User posts</h1>
            </div>
                                   <div className = "row justify-content-center">
                                        {posts.map(post => (
                                          <div>
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

                                            </div>
                                        ))}
                                       </div> 
      </div>     
    </div>
  );
}

export default Example;