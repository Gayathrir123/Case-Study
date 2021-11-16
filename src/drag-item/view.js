import React, { forwardRef } from "react";
import "./DragApp.css";
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';

export default forwardRef(({ data, classValue }, ref) => {
  return (
    <div className={`item ${classValue}`} ref={ref}>
    <div className='item__section'>
    <div className='item__image'><CameraAltRoundedIcon /></div><div className='item__text'>{data.text}</div>
    </div>
    </div>
  );
});
