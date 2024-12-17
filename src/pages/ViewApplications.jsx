import { useLoaderData } from "react-router-dom";


const ViewApplications = () => {

    const applications = useLoaderData()

    const handleUpdateStatus = (e, id) => {
        const data = {
            status : e.target.value
        }

        // Send data to backend
        fetch(`http://localhost:3000/applications/${id}`, {
            method: "PATCH",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>Resume</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app, i) => (
                <tr key={app._id}>
                  <th>{i + 1}</th>
                  <td>{app.applicant_email}</td>
                  <td>{app.resume}</td>
                  <td>
                    <select
                      onChange={(e) => handleUpdateStatus(e, app._id)}
                      defaultValue={app.status || "Change Status"}
                      className="select select-bordered select-sm w-full max-w-xs"
                    >
                      <option disabled>Change Status</option>
                      <option>Under Review</option>
                      <option>Set Interview</option>
                      <option>Hired</option>
                      <option>Rejected</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ViewApplications;