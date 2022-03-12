import React, { useState } from "react";
import JobBoard from "./components/JobBoard";
import data from './assets/data.json'
import { useEffect } from "react";

function App() {
  const [jobs,setJobs] = useState([]);

  useEffect(() => {
  fetch('./data.json')
  .then(res => res.json())
  .then((data)=>(
    setJobs(data)
  ));

  }, []);
  
  console.log(data);


  return (
    <div className="App">
    <h1>My Job Board </h1>
    {
      jobs.length === 0 ? (
        <p>Loading jobs</p>
      ):(
    jobs.map((job) => <JobBoard job={job} key={job.id} />)
    )
    }
</div>
  );
}

export default App;

//TO-DO
