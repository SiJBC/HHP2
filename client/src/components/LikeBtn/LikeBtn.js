import React from "react";
import "./LikeButton.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function LikeBtn(props) {
  return (
    <span className="like-btn" {...props} role="button" tabIndex="0">
      delete
    </span>
  );
}

export default LikeBtn;
