import React from 'react';
import './component.css';


// const useStyles = makeStyles((theme) => ({
//   left: {
//     paddingLeft: "0.8rem",
//     [theme.breakpoints.down("md")]: {
//       paddingLeft: "0",
//       marginTop:"auto",
//       display:"flex",
      
//     },
//   },
//   right: {
//     // transform: "translateY(-20px)",
//     [theme.breakpoints.down("md")]: {
//       display: "none",
//       marginTop:"auto",
//       position:"relative",
      
//     },
//   },
// }));

export default function () {
  return (
    <div id='heading'>
        <div id='h-text-1'>
            <p>
                <img src={process.env.PUBLIC_URL+"logo_h.svg"} alt='not availabe'/>
                <div id='h-text-3'>
                <strong><b><h4>Invoice List</h4></b></strong>
                </div>
            </p>
        </div>
        {/* <div id='h-text-3'>
            <p>
                Invoice List
                
            </p>
        </div> */}

        <div id='h-text-2'>
        <p>
        <img src={process.env.PUBLIC_URL+"logo.svg"} alt="kuber" />
        </p>
        </div>

    </div>
  )
}