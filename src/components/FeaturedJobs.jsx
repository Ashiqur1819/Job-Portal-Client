import { useEffect, useState } from "react";
import JobCard from "./JobCard";



const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/jobs")
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [])

    return (
        <div>
            <div>
                <h2 className="text-3xl lg:text-5xl font-bold text-purple-950 text-center">Featured Jobs</h2>
                <p className="text-gray-700 text-center mt-2 max-w-4xl mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolore dolorum molestias, tenetur vitae minima? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque incidunt itaque repellendus! Aut, quos esse!</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-12">
                {
                    jobs.map(job => <JobCard job={job} key={job._id}></JobCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;