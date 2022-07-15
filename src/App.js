import "./App.css";
import { BASE_URL } from "./env";
import React, { useState, useEffect } from "react";
function App() {
  const [formResponse, setFormResponse] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [skills, setSkills] = useState("");
  const [work_method, setWorkMethod] = useState("");
  const [work_mode, setWorkMode] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [modalItem, setModalItem] = useState();
  useEffect(() => {
    fetch(BASE_URL + "/get-formData", {
      method: "GET",
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (!data.error) {
          setFormResponse(data.message);
        }
      });
  }, []);
  const handleSearch = async () => {
    await fetch(
      BASE_URL +
        "/filter-formData?email=" +
        email +
        "&gender=" +
        gender +
        "&skills=" +
        [skills] +
        "&work_mode=" +
        work_mode +
        "&work_method=" +
        work_method +
        "&address=" +
        address +
        "&name=" +
        name,
      {
        method: "GET",
        headers: { "Content-type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (!data.error) {
          setFormResponse(data.message);
        }
      });
  };

  const Loading = () => {
    return (
      <div class="spinner-border" role="status">
        <span class="visually-hidden"></span>
      </div>
    );
  };
  const TopBar = () => {
    return (
      <div className="container-fluid bg-light">
        <ul
          className=" d-flex justify-content-around align-items-center my-2 "
          style={{ listStyle: "none" }}
        >
          <li>
            <select
              class="custom-select form-select"
              id="inputSkills"
              defaultValue={skills}
              onChange={(e) => {
                setSkills(e.target.value);
              }}
            >
              <option selected>Skills</option>
              <option value="java">Java</option>
              <option value="javascript">Javascript</option>
              <option value="mongodb">MongoDB</option>
            </select>
          </li>
          <li>
            <select
              class="custom-select form-select"
              id="inputWorkMethod"
              defaultValue={work_mode}
              onChange={(e) => {
                setWorkMode(e.target.value);
              }}
            >
              <option selected>Work Mode</option>
              <option value="Fulltime">FullTime</option>
              <option value="Freelancer">Free Lancer</option>
            </select>
          </li>
          <li>
            <select
              class="custom-select form-select"
              id="inputWorkMethod"
              defaultValue={work_method}
              onChange={(e) => {
                setWorkMethod(e.target.value);
              }}
            >
              <option selected>Work Method</option>
              <option value="Individual">Individual</option>
              <option value="Agency">Agency</option>
            </select>
          </li>
          <li>
            <select
              class="custom-select form-select"
              id="inputWorkMethod"
              onChange={(e) => {
                setGender(e.target.value);
              }}
              defaultValue={gender}
            >
              <option selected>Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </li>
          <li>
            <input
              className="form-control"
              type="email"
              placeholder="xyz@email.com"
              defaultValue={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </li>
          <li>
            <input
              className="form-control"
              type="text"
              placeholder="Address"
              defaultValue={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </li>
          <li>
            <input
              type="text"
              class="form-control"
              id="inputName"
              placeholder="Name"
              defaultValue={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </li>
          <li>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                handleSearch();
              }}
            >
              Search
            </button>
          </li>
        </ul>
      </div>
    );
  };
  const Modal = () => {
    // console.log("item", item);
    return (
      <div
        className="container myModal"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-dark" id="exampleModalLabel">
                {modalItem.name}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                X
              </button>
            </div>
            <div className="modal-body p-4 text-left">
              <p className="text-dark">
                <span className="font-weight-bold">Email: </span>{" "}
                {modalItem?.email}
              </p>
              <p className="text-dark">
                <span className="font-weight-bold">Mobile: </span>
                {modalItem?.phoneNumber}
              </p>
              <p className="text-dark">
                <span className="font-weight-bold">Portfolio: </span>
                {modalItem?.resume_link}
              </p>
              <p className="text-dark">
                <span className="font-weight-bold">Work Method: </span>
                {modalItem?.work_method}
              </p>
              <p className="text-dark">
                <span className="font-weight-bold">Work Mode: </span>
                {modalItem?.work_mode}
              </p>
              <p className="text-dark">
                <span className="font-weight-bold">Address: </span>
                {modalItem?.address}
              </p>
              <p className="text-dark">
                <span className="font-weight-bold">Gender: </span>
                {modalItem?.gender}
              </p>
              <p className="text-dark">
                <span className="font-weight-bold">Location: </span>
                {modalItem?.location}
              </p>
              <p className="text-dark">
                <span className="font-weight-bold">Skills: </span>
                {modalItem.skills.map((skill, ind) => {
                  return <>{skill.length > 1 ? skill + "," : skill}</>;
                })}
              </p>
              <p className="text-dark ">
                <span className="font-weight-bold">Services Offered: </span>
                {modalItem.services.map((service, ind) => {
                  return (
                    <div className="ml-4 my-2 ">
                      <h6>
                        <span className="font-weight-bold">Service: </span>
                        {service.services}
                      </h6>
                      <p>
                        <span className="font-weight-bold">Price: </span>₹
                        {service.price}
                      </p>
                      <p>
                        <span className="font-weight-bold">Portfolio: </span>
                        {service.portfolio_link}
                      </p>
                    </div>
                  );
                })}
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                Close
              </button>
              <button type="button" className="btn btn-success">
                Request Call back
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const FormResponseData = () => {
    return (
      <>
        <table class="table table-stripped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile</th>
              <th scope="col">Work Mode</th>
              <th scope="col">Work Method</th>
              <th scope="col">Skills</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            {formResponse.map((item, index) => {
              return (
                <tr key={index + 1}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phoneNumber}</td>
                  <td>{item.work_mode}</td>
                  <td>{item.work_method}</td>
                  <td>
                    {item.skills.map((skill, ind) => {
                      return <>{skill.length > 1 ? skill + "," : skill}</>;
                    })}
                  </td>
                  <td
                    type="button"
                    className="btn btn-primary my-1"
                    onClick={() => {
                      setOpenModal(!openModal);
                      setModalItem(item);
                    }}
                  >
                    Open
                  </td>
                  {openModal ? <Modal /> : null}
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  };
  return (
    <div className="App">
      <TopBar />
      {formResponse.length == 0 ? (
        <h1 className="d-flex justify-content-center align-items-center text-center">
          No data Available
        </h1>
      ) : (
        <FormResponseData />
      )}
    </div>
  );
}

export default App;
