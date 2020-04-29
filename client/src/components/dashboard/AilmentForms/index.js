import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap'


function AilmentForms(Props){
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

 
    const [showText, setShowText] = useState(false);
return(
    
    <div>
  <div className="App">
  
    </div>
    <div className = "row">

    </div>

    <Dropdown  isOpen={dropdownOpen} toggle={toggle} >
      <Button><DropdownToggle caret>Menu
        </DropdownToggle>
        </Button>
      <DropdownMenu>
      
      <DropdownItem> <Link to="/dashboard">Return to dashboard</Link></DropdownItem>  
        <DropdownItem header><h4>Alzheimers</h4></DropdownItem>
        <DropdownItem>       <Link to="/dashboard/Alzheimerspharmform">
         Pharmaceutical</Link></DropdownItem>
        <DropdownItem >       <Link to="/dashboard/Alzheimersnopharmform">
         Non-Pharmaceutical</Link></DropdownItem>
        <DropdownItem divider />
        <DropdownItem header><h4>Back Problems</h4></DropdownItem>
        <DropdownItem>       <Link to="/dashboard/Backproblemspharmform">
         Pharmaceutical</Link></DropdownItem>
        <DropdownItem >       <Link to="/dashboard/Backproblemsnopharmform">
         Non-Pharmaceutical</Link></DropdownItem>
        <DropdownItem divider />
        <DropdownItem header><h4>Diabetes</h4></DropdownItem>
        <DropdownItem>       <Link to="/dashboard/Diabetespharmform">
         Pharmaceutical</Link></DropdownItem>
        <DropdownItem >       <Link to="/dashboard/Diabetesnopharmform">
         Non-Pharmaceutical</Link></DropdownItem>
        <DropdownItem divider />
        <DropdownItem header><h4>Headache and Migraines</h4></DropdownItem>
        <DropdownItem>       <Link to="/dashboard/Headachepharmform">
         Pharmaceutical</Link></DropdownItem>
        <DropdownItem >       <Link to="/dashboard/Headachenopharmform">
         Non-Pharmaceutical</Link></DropdownItem>
        <DropdownItem divider />
        <DropdownItem header><h4>Joint Pains</h4></DropdownItem>
        <DropdownItem>       <Link to="/dashboard/Jointpainspharmform">
         Pharmaceutical</Link></DropdownItem>
        <DropdownItem >       <Link to="/dashboard/Jointpainsnopharmform">
         Non-Pharmaceutical</Link></DropdownItem>
        <DropdownItem divider />
        <DropdownItem header><h4>Skin Disorders</h4></DropdownItem>
        <DropdownItem>       <Link to="/dashboard/Skindisorderspharmform">
         Pharmaceutical</Link></DropdownItem>
        <DropdownItem >       <Link to="/dashboard/Skindisordersnopharmform">
         Non-Pharmaceutical</Link></DropdownItem>
      </DropdownMenu>
    </Dropdown>
         </div>

)

}

export default AilmentForms