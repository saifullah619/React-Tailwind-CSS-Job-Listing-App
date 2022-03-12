import React from 'react';

const JobBoard = (props) => {
return  (
  <div className="flex bg-white shadow-lg m-4 p-4">
  
  <div>
    <img src={props.job.logo} alt = {props.job.company}></img>
  </div>
  
  <div className="m-2">
    <h3 className="text-teal-400 text-sm">{props.job.company}</h3>
    <h2 className="font-semibold mt-1">{props.job.position}</h2>
    <p className="text-xs mt-1 font-light text-slate-500">
      {props.job.postedAt}  ★  {props.job.contract}    ★     {props.job.location}
    </p>
  </div>


  </div>
);

};

export default JobBoard;