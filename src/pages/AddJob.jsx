import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const AddJob = () => {
    const {user} = useAuth()
    const navigate = useNavigate()
  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const { min, max, currency, ...newJob } = initialData;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");

    // Send data to backend
    fetch("http://localhost:3000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your apply successful",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/my_posted_jobs");
        }
      });
  };

  return (
    <div className="card w-full mx-auto max-w-2xl shrink-0 shadow-2xl mt-12 border bg-white">
      <h2 className="text-3xl font-bold text-center mt-6 text-purple-900">
        Add A New Job
      </h2>
      <form onSubmit={handleAddJob} className="card-body">
        {/* Job Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-base font-medium">Job Title:</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            className="input input-bordered"
            required
          />
        </div>
        {/* Company Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-base font-medium">
              Company Name:
            </span>
          </label>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className="input input-bordered"
            required
          />
        </div>
        {/* Job Location */}
        <div className="form-control relative">
          <label className="label">
            <span className="label-text text-base font-medium">
              Job Location:
            </span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="Job Location"
            className="input input-bordered"
            required
          />
        </div>
        {/* Job Type and Job Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="form-control relative">
            <label className="label">
              <span className="label-text text-base font-medium">
                Job Type:
              </span>
            </label>
            <select
              defaultValue="Pick a Job Type"
              name="jobType"
              className="select input input-bordered"
            >
              <option disabled>Pick a Job Type</option>
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Remote</option>
            </select>
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text text-base font-medium">
                Job Field:
              </span>
            </label>
            <select
              defaultValue="Pick a Job Field"
              name="category"
              className="select input input-bordered"
            >
              <option disabled>Pick a Job Field</option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Finance</option>
            </select>
          </div>
        </div>
        {/* Salary Range */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-end">
          <div className="form-control relative">
            <label className="label">
              <span className="label-text text-base font-medium">
                Salary Range:
              </span>
            </label>
            <input
              type="number"
              name="min"
              placeholder="Min"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <input
              type="number"
              name="max"
              placeholder="Max"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <select
              defaultValue="Pick a Currency"
              name="currency"
              className="select input input-bordered"
            >
              <option disabled>Pick a Currency</option>
              <option>BDT</option>
              <option>USD</option>
              <option>INR</option>
            </select>
          </div>
        </div>
        {/* Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-base font-medium">
              Description:
            </span>
          </label>
          <textarea
            name="description"
            className="textarea textarea-bordered"
            placeholder="Description"
          ></textarea>
        </div>
        {/* Requrements */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-base font-medium">
              Requirements:
            </span>
          </label>
          <textarea
            name="requirements"
            className="textarea textarea-bordered"
            placeholder="Put each requirements in a new line"
          ></textarea>
        </div>
        {/* Responsibilities */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-base font-medium">
              Responsibilities:
            </span>
          </label>
          <textarea
            name="responsibilities"
            className="textarea textarea-bordered"
            placeholder="Put each responsibilities in a new line"
          ></textarea>
        </div>
        {/* Deadline */}
        <div className="form-control relative">
          <label className="label">
            <span className="label-text text-base font-medium">Deadline:</span>
          </label>
          <input
            type="date"
            name="applicationDeadline"
            placeholder="Deadline"
            className="input input-bordered"
            required
          />
        </div>
        {/* HR Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-base font-medium">HR Name:</span>
          </label>
          <input
            type="text"
            name="hr_name"
            placeholder="HR Name"
            className="input input-bordered"
            required
          />
        </div>
        {/* HR Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-base font-medium">HR Email:</span>
          </label>
          <input
            defaultValue={user?.email}
            type="text"
            name="hr_email"
            placeholder="HR Email"
            className="input input-bordered"
            required
          />
        </div>
        {/* Company Logo */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-base font-medium">
              Company Logo:
            </span>
          </label>
          <input
            type="url"
            name="company_logo"
            placeholder="Company Logo"
            className="input input-bordered"
            required
          />
        </div>
        {/* Submit Button */}
        <div className="form-control mt-6">
          <button className="py-2 px-6 text-lg rounded-lg bg-purple-700  text-white cursor-pointer font-semibold hover:bg-purple-600 ">
            Add Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
