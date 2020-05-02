import React, { useState } from "react";
import Hero from "../Hero"
import Card from "../card";
import Footer from "../Footer"

import { Alert } from 'reactstrap'
import { Collapse, Button } from 'reactstrap';

function Landing(props) {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (
    <div>
      <Hero />
      <div className="row justify-content-left">
        <div>
          <div>
            <Alert className="justify-content-center" color="info">
              <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Head Ache</Button>
            </Alert>
          </div>

          <Alert color="info">
          <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Anxiety</Button>
      </Alert>
          <Alert color="info">
          <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Back Problems</Button>
      </Alert>
          <Alert color="info">
          <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Respiratory Issues</Button>
      </Alert>
          <Alert color="info">
          <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Diabetes</Button>
      </Alert>
          <Alert color="info">
          <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Joint Pain</Button>
      </Alert>
          <Alert color="info">
          <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Skin Disorders</Button>
      </Alert>
        </div>


        {/* {this.state.ailments.map(ailments => (
          <Card
          key = {ailments.id}
          heading = {ailments.heading}
          />
        ))} */}
      </div>

    

    </div>
  );
}


export default Landing;
