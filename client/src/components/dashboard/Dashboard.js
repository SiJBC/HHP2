import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import API from "../../utils/API"
import Card from "../card"
import DeleteBtn from "../DeleteBtn"
import NavbarLoggedIn from "../layout/NavbarLoggedIn"
import Footer from "../../components/Footer"

const email = localStorage.getItem("userEmail")

function Dashboard(props) {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    // const email = localStorage.getItem("userEmail") 
    loadUserPosts(email)
    console.log(posts)
  }, [])


  function deletePost(id) {
    API.deletePost(id)
      .then(res => loadUserPosts(email))
      .catch(err => console.log(err))
  }

  function loadUserPosts(email) {
    API.returnByEmail(email)
      .then(res =>
        setPosts(res.data))
      .catch(err => console.log(err))
  }


  const { user } = props.auth;


  return (


    <div style={{ height: "75vh" }}>
      <NavbarLoggedIn>
      </NavbarLoggedIn>


<div className = "container-fluid">
<div className="row justify-content-center">
        <h4>
          <b>Hey </b> {user.name.split(" ")[0]}
          <p className="flow-text grey-text text-darken-1">
            Welcome to your dashboard you have {posts.length} active posts
            </p>
        </h4>

          <div className="row justify-content-center">
            {posts.map(post => (
              <div>
                
                <Card
                  key={post._id}
                  Ailment={post.Ailment}
                  Method={post.Method}
                  Treatment={post.Treatment}
                  Age={post.Age}
                  ActivityLevel={post.ActivityLevel}
                  Source={post.Source}
                >
                    
                </Card>
                <button><DeleteBtn onClick={() => deletePost(post._id)} /></button>
                
              </div>
            ))}

          </div>
        </div>
</div>




              <Footer />
    </div>







  );
}


Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
