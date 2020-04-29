import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

function DashboardReturn(){
    return (
        <div>
        <Router>
<Route exact path="/dashboard/Headachpharmform" component={HeadachePharmForm} />
</Router>
</div>
    )


}

export default DashboardReturn
