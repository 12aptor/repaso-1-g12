import "./App.css";
import { useEffect, useState } from "react";
import { Header } from "./components/header/Header";
import { Search } from "./components/search/Search";
import { Card } from "./components/card/Card";

function App() {
  const [completeJobs, setCompleteJobs] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://127.0.0.1:5000/jobs");
      const data = await response.json();
      setCompleteJobs(data);
      setJobs(data);
    };
    getData();
  }, []);

  return (
    <>
      <Header />
      <Search setJobs={setJobs} completeJobs={completeJobs} />
      <div className="number_of_results">{jobs.length} jobs found</div>
      <div className="jobs_list">
        {jobs.map((job, index) => (
          <Card key={index} job={job} />
        ))}
      </div>
    </>
  );
}

export default App;
