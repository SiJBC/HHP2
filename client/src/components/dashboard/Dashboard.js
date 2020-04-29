import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Button } from 'reactstrap'
import AilmentForms from "./AilmentForms"
import { BrowserRouter as Router, Route } from "react-router-dom";
import HeadachePharmForm from "../Form/HeadachePharmForm"
import API from "../../utils/API"
import Card from "../card"



function Dashboard(props) {

  const [posts, setPosts] = useState([])

useEffect(() => {
    const email = localStorage.getItem("userEmail") 
      loadUserPosts(email)
        console.log(posts)
}, [])

  const onLogoutClick = e => {
    e.preventDefault();
    props.logoutUser();
  };

  function loadUserPosts(email){
    API.returnByEmail(email)
    .then(res =>
      setPosts(res.data))
    .catch(err => console.log(err))
  }


  const { user } = props.auth;

  return (
    <div style={{ height: "75vh" }}>

      <div className="row justify-content-left">
        <div className="col s4 justify-content-left">
          <h4>
            <b>Hey </b> {user.name.split(" ")[0]}
            <p className="flow-text grey-text text-darken-1">
              Welcome to your dashboard
            </p>
          </h4>
          <div className="col s4 justify-content-left">

          </div>
          <div>
            <Button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </Button>


              <AilmentForms/>

                <Router>
                <Route exact path="/dashboard/Headachpharmform" component={HeadachePharmForm} />
                </Router>
            


          </div>
          <div className="col s4 justify-content-left">
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

          </div>






        </div>
      </div>
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
