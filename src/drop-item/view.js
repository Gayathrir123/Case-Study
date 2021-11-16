import React, { forwardRef } from "react";
import "./DropApp.css";

export default forwardRef(({ children }, ref) => {
  return (
    <div class="container" ref={ref}>
    
      <div className="body">{children}</div>
    </div>
    
  );
});
