import "./App.css";
import { BASE_URL } from "./env";
import React, { useState, useEffect } from "react";
import homePng from "./assets/img/home.png";
import transactionPng from "./assets/img/transaction.png";
import userPng from "./assets/img/user.png";
import HelpPng from "./assets/img/Help.png";
import LogoutPng from "./assets/img/Logout.png";
import incomePng from "./assets/img/income.png";
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
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);
  const [active6, setActive6] = useState(false);
  const [loadTable, setLoadTable] = useState(false);

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
  }, [loadTable]);
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
        className="container-fluid myModal"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
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
              <p className="text-dark shadow-sm">
                <span className="font-weight-bold">Services Offered: </span>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Services</th>
                      <th>Price</th>
                      <th>Portfolio</th>
                    </tr>
                  </thead>
                  <tbody>
                    {modalItem.services.map((service, ind) => {
                      return (
                        <tr>
                          <td> {service.services}</td>
                          <td>₹{service.price}</td>
                          <td>
                            <a href={service.portfolio_link}>
                              {service.portfolio_link}
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
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
        <table class="table table-striped">
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
              return item.registered ? (
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
              ) : null;
            })}
          </tbody>
        </table>
      </>
    );
  };
  const NewFormResponseData = () => {
    const registerUser = async (email) => {
      await fetch(BASE_URL + "/register-formData", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.message);
          if (!data.error) {
            setLoadTable(!loadTable);
          }
        })
        .catch((err) => {
          console.log("Error", err);
        });
    };
    const deleteUser = async (email) => {
      // console.log(email);
      await fetch(BASE_URL + "/delete-formData/" + email, {
        method: "delete",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.message);
          if (!data.error) {
            setLoadTable(!loadTable);
            alert(data.message);
          }
        })
        .catch((err) => {
          console.log("Error", err);
        });
    };

    return (
      <>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Work Mode</th>
              <th scope="col">Work Method</th>
              <th scope="col">Skills</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            {formResponse.map((item, index) => {
              return item.registered ? null : (
                <tr key={index + 1}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>

                  <td>{item.work_mode}</td>
                  <td>{item.work_method}</td>
                  <td>
                    {item.skills.map((skill, ind) => {
                      return <>{skill.length > 1 ? skill + "," : skill}</>;
                    })}
                  </td>
                  <td
                    type="button"
                    className="btn btn-primary my-1 p-1"
                    onClick={() => {
                      setOpenModal(!openModal);
                      setModalItem(item);
                    }}
                  >
                    Open
                  </td>
                  {openModal ? <Modal /> : null}
                  <td
                    type="button"
                    className="btn btn-warning my-1 ml-2 p-1"
                    onClick={() => {
                      registerUser(item.email);
                    }}
                  >
                    Register
                  </td>
                  <td
                    type="button"
                    className="btn btn-danger my-1 ml-2 p-1"
                    onClick={() => {
                      deleteUser(item.email);
                    }}
                  >
                    Delete
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  };

  const SideBarMenu = () => {
    return (
      <>
        <h4 className="font-weight-bold"> ReverBlunt</h4>
        <div className="d-flex text-left align-items-start flex-column my-3">
          <ul style={{ listStyle: "none" }}>
            <li>
              <p
                style={{ cursor: "pointer" }}
                className={
                  active1
                    ? "font-weight-bold bg-profile-menu"
                    : "font-weight-bold text-primary-50"
                }
                onClick={() => {
                  setActive1(true);
                  setActive2(false);
                  setActive3(false);
                  setActive4(false);
                  setActive5(false);
                  setActive6(false);
                }}
              >
                <img
                  src={homePng}
                  alt={"https://www.gigzman.com"}
                  style={{ width: "15px", height: "15px" }}
                />{" "}
                Dashboard
              </p>
            </li>
            <li>
              <p
                style={{ cursor: "pointer" }}
                className={
                  active2
                    ? "font-weight-bold bg-profile-menu"
                    : "font-weight-bold text-primary-50"
                }
                onClick={() => {
                  setActive1(false);
                  setActive2(true);
                  setActive3(false);
                  setActive4(false);
                  setActive5(false);
                  setActive6(false);
                }}
              >
                <img
                  src={transactionPng}
                  alt={"https://www.gigzman.com"}
                  style={{ width: "15px", height: "15px" }}
                />{" "}
                New Requests
              </p>
            </li>
            <li>
              <p
                style={{ cursor: "pointer" }}
                className={
                  active3
                    ? "font-weight-bold bg-profile-menu"
                    : "font-weight-bold text-primary-50"
                }
                onClick={() => {
                  setActive1(false);
                  setActive2(false);
                  setActive3(true);
                  setActive4(false);
                  setActive5(false);
                  setActive6(false);
                }}
              >
                <img
                  src={userPng}
                  alt={"https://www.gigzman.com"}
                  style={{ width: "15px", height: "15px" }}
                />{" "}
                Database
              </p>
            </li>
            <li>
              <p
                style={{ cursor: "pointer" }}
                className={
                  active4
                    ? "font-weight-bold bg-profile-menu"
                    : "font-weight-bold text-primary-50"
                }
                onClick={() => {
                  setActive1(false);
                  setActive2(false);
                  setActive3(false);
                  setActive4(true);
                  setActive5(false);
                  setActive6(false);
                }}
              >
                <img
                  src={incomePng}
                  alt={"https://www.gigzman.com"}
                  style={{ width: "18px", height: "18px" }}
                />{" "}
                Website Leads
              </p>
            </li>
          </ul>
          <ul style={{ listStyle: "none", alignItems: "center" }}>
            <li>
              <p
                style={{ cursor: "pointer" }}
                className={
                  active5
                    ? "font-weight-bold bg-profile-menu"
                    : "font-weight-bold text-primary-50"
                }
                onClick={() => {
                  setActive1(false);
                  setActive2(false);
                  setActive3(false);
                  setActive4(false);
                  setActive5(true);
                  setActive6(false);
                }}
              >
                <img
                  src={HelpPng}
                  alt={"https://www.gigzman.com"}
                  style={{ width: "15px", height: "15px" }}
                />{" "}
                Help
              </p>
            </li>
            <li>
              <p
                style={{ cursor: "pointer" }}
                className={
                  active6
                    ? "font-weight-bold bg-profile-menu"
                    : "font-weight-bold text-primary-50"
                }
                onClick={() => {
                  setActive1(false);
                  setActive2(false);
                  setActive3(false);
                  setActive4(false);
                  setActive5(false);
                  setActive6(true);
                  // logoutUser();
                }}
              >
                <img
                  src={LogoutPng}
                  alt={"https://www.gigzman.com"}
                  style={{ width: "15px", height: "15px" }}
                />{" "}
                Logout
              </p>
            </li>
          </ul>
        </div>
      </>
    );
  };
  const WebsiteLeads = () => {
    const [websiteLeads, setWebsiteLeads] = useState([]);
    useEffect(() => {
      fetch(BASE_URL + "/get-websiteLeads", {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Website leads");
          setWebsiteLeads(data.message);
        });
    }, []);
    return (
      <>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Service</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {websiteLeads.map((item, index) => {
              return (
                <tr>
                  <td key={index}>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.phoneNumber}</td>
                  <td>{item.service}</td>
                  <td
                    type="a"
                    href={`tel:${item.phoneNumber}`}
                    className="btn btn-success"
                  >
                    Call
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  };
  return (
    <div className="App overflow-hidden">
      <div className="row">
        <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2">
          <SideBarMenu />
        </div>
        <div className="col-sm-12 col-md-10 col-lg-10 col-xl-10 mx-auto">
          {active1 ? <h1 className="text-center ">Dashboard</h1> : null}
          {active2 ? <NewFormResponseData /> : null}
          {active3 ? (
            <>
              <TopBar />
              {formResponse.length == 0 ? (
                <h1 className="d-flex justify-content-center align-items-center text-center">
                  No data Available
                </h1>
              ) : (
                <FormResponseData />
              )}
            </>
          ) : null}
          {active4 ? <WebsiteLeads /> : null}
        </div>
      </div>
    </div>
  );
}

export default App;
