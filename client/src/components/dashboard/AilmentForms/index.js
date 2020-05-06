import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap'


function AilmentForms(Props){
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

 

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
      <DropdownItem header><h3>Select a study to contribute</h3></DropdownItem>

        <DropdownItem header><h4>Alzheimers</h4></DropdownItem>
        <DropdownItem>       <Link to="/dashboard/Alzheimerspharmform">
         Pharmaceutical</Link></DropdownItem>
        <DropdownItem >       <Link to="/dashboard/Alzheimersnopharmform">
         Non-Pharmaceutical</Link></DropdownItem>
        <DropdownItem divider />
        <DropdownItem header><h4>Backpain</h4></DropdownItem>
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
      </DropdownMenu>
    </Dropdown>
         </div>

)

}

export default AilmentForms