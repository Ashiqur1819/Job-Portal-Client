import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";


const MyPostedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const {user} = useAuth()

    useEffect(() => {
        fetch(`http://localhost:3000/jobs?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            setJobs(data)
        })
    }, [])
    return (
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Job Title</th>
              <th>Deadline</th>
              <th>Salary</th>
              <th>View Applications</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={job._id}>
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.applicationDeadline}</td>
                <td>
                  ${job.salaryRange.min} - ${job.salaryRange.max}
                </td>
                <td><button className="bg-blue-950 px-3 py-2 rounded-md text-white font-medium"><Link to={`/view_applications/${job._id}`}>View Applications</Link></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default MyPostedJobs;