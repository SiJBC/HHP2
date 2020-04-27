import React, { useState, useEffect } from 'react';
import { Col, Row, Container } from "../../Grid";
import {Treatment, Age, ActivityLevel, UserStory, Source, FormBtn} from "./userForm.js"
import API from "../../../utils/API";
import Jumbotron from "../../Jumbotron";

// component for users to fill out the post for headache and pharmaceutical


function headachePharmForm(){
    // we are establishing a state object for capturing the values from the form
const [formObject, setFormObject] = useState({})


function handleInputChange(event){
    const { name, value } = event.target;
    // Each member form will have the values of their email from local storage
    // the ailment and method values are determined already, the last value is from the form

    setFormObject({...formObject, Email:localStorage.getItem("userEmail"), 
    Ailment: "Headache",
    Method: "Pharmaceutical",
    // name and value is from the form
    [name]: value}) 

    
}

function handleFormSubmit(event) {
        
    event.preventDefault();
   
      API.postAilment({
          Ailment: "Headache",
        Method: "Pharmaceutical",
        Email: localStorage.getItem("userEmail"),
        Treatment: formObject.Treatment,
        Age: formObject.Age,
        ActivityLevel: formObject.ActivityLevel,
        Story: formObject.Story,
        Source: formObject.Source

        
      })
      console.log(formObject)
    
  };

// function handleFormSubmit(event){
//     console.log()
//     event.preventDeault();
//     console.log("here")
//     // API for posting to the database

//     API.postAilment({
//         Ailment: "Headache",
//         Method: "Pharmaceutical",
//         Email: localStorage.getItem("userEmail"),
//         Treatment: formObject.Treatment,
//         Age: formObject.Age,
//         ActivityLevel: formObject.ActivityLevel,
//         Story: formObject.Story,
//         Source: formObject.Source
//     })
//     console.log(formObject)
// }

return(
    <Container fluid>
        <Row>
            <Col size="md-6">
                <Jumbotron>
                    <h1>Headache treated with Pharmaceutical methods Form
                    </h1>
                    <h2>Thank you for participating in the study</h2>
                </Jumbotron>
                <form>
                    <Treatment
                    onChange ={handleInputChange}
                    name = "Treatment"/>
                    <Age
                    onChange ={handleInputChange}
                    name = "Age"
                    />
                    <ActivityLevel
                    onChange = {handleInputChange}
                    name ="ActivityLevel"
                    />
                    <UserStory
                    onChange ={handleInputChange}
                    name ="Story"
                    />
                    <Source
                    onChange ={handleInputChange}
                    name ="Source"
                    />

                <FormBtn
                onClick = {handleFormSubmit}>
                    Submit
                </FormBtn>
                </form>
              </Col>
        </Row>
    </Container>
)


}

export default headachePharmForm