import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";


const ApplyJob = () => {

    const {id} = useParams();
    const {user} = useAuth();
    const navigate = useNavigate()

    const submitApplyJob = e => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedIn,
            github,
            resume
        }

        // Send data to backend
        fetch("http://localhost:3000/applications", {
            method : 'POST',
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(jobApplication)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your apply successful",
                showConfirmButton: false,
                timer: 1500,
            });
            navigate("/my_applications")
            }
        })
        .catch(error => {
            console.log(error)
        })
        
    }

    return (
      <div className="max-w-3xl mx-auto border rounded-lg">
        <h2 className="text-3xl font-bold text-center mt-6 text-indigo-700">
          Apply Now
        </h2>
        <form onSubmit={submitApplyJob} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base font-medium">
                LinkedIn URL:
              </span>
            </label>
            <input
              type="url"
              name="linkedIn"
              placeholder="LinkedIn URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base font-medium">
                Github URL:
              </span>
            </label>
            <input
              type="url"
              name="github"
              placeholder="Github URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text text-base font-medium">
                Resume URL:
              </span>
            </label>
            <input
              type="url"
              name="resume"
              placeholder="Resume URL"
              className="input input-bordered"
              required
            />
          </div>
          <label className="label"></label>
          <div className="form-control">
            <button className="py-2 px-6 text-lg rounded-lg bg-purple-700  text-white cursor-pointer font-semibold hover:bg-purple-600 ">
              Apply
            </button>
          </div>
        </form>
      </div>
    );
};

export default ApplyJob;