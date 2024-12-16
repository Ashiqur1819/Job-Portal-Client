import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { AuthContext } from "../provider/AuthProvider";
import { CiCircleRemove } from "react-icons/ci";

const MyApplications = () => {
    
    const {user} = useAuth(AuthContext)
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/application?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            setJobs(data)
        })
        .catch(error => {
            console.log(error)
        })
    },[])

    return (
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Position</th>
              <th>Salary</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.company}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td className="font-medium">
                  {job.title}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {job.jobType}
                  </span>
                </td>
                <td>
                  ${job.salaryRange.min} - {job.salaryRange.max}
                </td>
                <th className="text-right">
                  <button className="text-2xl text-red-600">
                    <CiCircleRemove></CiCircleRemove>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default MyApplications;