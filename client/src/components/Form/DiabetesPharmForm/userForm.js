import React from 'react';
// select option with drop down menu
export function Treatment(props){
    return (
        <div className = "form-group">
            <select className="form-control" {...props}>
                <option value=""> Select preffered treatment</option>
                <option value ="Metformin">"Metformin"</option>
                <option value ="Sulfonylureas">"Sulfonylureas"</option>
                <option value ="Meglitinides">"Meglitinides"</option>
                <option value ="Thiazolidinediones">"Thiazolidinediones"</option>
            </select>
        </div>
    )
}
// select option with drop down menu
export function Age(props){
    return (
        <div className = "form-group">
            <select className="form-control" {...props}>
                <option value=""> Select your age group</option>
                <option value ="18-30">18-30</option>
                <option value ="30-40">30-40</option>
                <option value ="40-50">40-50</option>
                <option value ="60-70">60-70</option>
                <option value ="67-80">67-80</option>
                <option value ="80+">80+</option>
            </select>
        </div>
    )
}
// select option with drop down menu
export function ActivityLevel(props){
    return (
        <div className = "form-group">
            <select className="form-control" {...props}>
                <option value=""> Select your current level of physical Activity</option>
                <option value ="tablet1">Do not exercise</option>
                <option value ="tablet1">Exercise 1 x per week</option>
                <option value ="tablet1">Exercise 2 x per week</option>
                <option value ="tablet1">Exercise 3 x per week</option>
                <option value ="tablet1">Exercise 4 x per week</option>
                <option value ="tablet1">Exercise 5 x per week or more</option>
            </select>
        </div>
    )
}
// text area
export function UserStory(props){
    return(
     <div>  
         <h5>Please tell us more about your story and methods for treatment</h5>
         <div className="form-group">
               <textarea className="form-control" rows="20" {...props} />
             </div>
     </div>

    )
}

export function Source(props){
    return(
        <div>
            <h5>Do you have any sources you would like to share</h5>
                    <div className="form-group">
        <textarea className="form-control" rows="1" {...props} />
      </div>
      </div>
    )
    

}

export function FormBtn(props) {
    return (
      <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
        {props.children}
      </button>
    );
  }

