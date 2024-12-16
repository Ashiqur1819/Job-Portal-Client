import { desc } from "motion/react-m";
import { FaLocationDot } from "react-icons/fa6";
import { GrWorkshop } from "react-icons/gr";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    status,
    hr_email,
    hr_name,
    company_logo,
  } = job;

  return (
    <div>
      <div className="card bg-gray-50 border border-gray-200 p-3 rounded-md h-full">
        <div className="flex items-center gap-3">
          <figure>
            <img
              src={company_logo}
              className="w-14 object-cover"
              alt="Company Logo"
            />
          </figure>
          <div>
            <h2 className="text-xl font-semibold text-indigo-950">{company}</h2>
            <p className="flex items-center gap-1 text-gray-500 text-sm">
              <FaLocationDot></FaLocationDot>
              {location}
            </p>
          </div>
        </div>
        <div className="card-body p-0 mt-4 space-y-2">
          <h2 className="card-title text-blue-950">{title}</h2>
          <div>
            <p className="flex items-center gap-2 text-gray-500 font-medium">
              <GrWorkshop></GrWorkshop>
              {jobType}
            </p>
          </div>
          <p className="text-gray-500">{description.substring(0, 70)}</p>
          <div className="flex items-center gap-3 flex-wrap">
            {
                requirements.map((skill, index) => <p className="bg-gray-200 px-2 text-center text-gray-600 py-1 rounded-md" key={index}>{skill}</p>)
            }
          </div>
          <div className="card-actions justify-end items-center mt-6">
            <p className="font-semibold text-gray-600">${salaryRange.min} - {salaryRange.max}/<span className="text-xs">year</span></p>
            <button className="bg-indigo-600 text-sm font-medium text-white px-3 py-2 rounded-md hover:bg-indigo-700"><Link to={`/jobs/${_id}`}>Apply</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
