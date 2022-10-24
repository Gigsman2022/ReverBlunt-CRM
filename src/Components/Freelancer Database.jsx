import React, { useState } from 'react'
import Loading from './Loading';
import { routes } from '../CONSTANTS';
import { useQuery } from 'react-query'
import { useEffect } from 'react';

const FormResponse = () => {
    const [formResponse, setFormResponse] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [modalItem, setModalItem] = useState();
    const [loadTable, setLoadTable] = useState(false);

    const TopBar = () => {
        const [work_method, setWorkMethod] = useState("");
        const [work_mode, setWorkMode] = useState("");
        const [gender, setGender] = useState("");
        const [skills, setSkills] = useState("");
        const [email, setEmail] = useState("");
        const [name, setName] = useState("");
        const handleSearch = async () => {
            await fetch(
                routes.FILTER_DATA + "?email=" +
                email +
                "&gender=" +
                gender +
                "&skills=" +
                [skills] +
                "&work_mode=" +
                work_mode +
                "&work_method=" +
                work_method +
                "&name=" +
                name,
                {
                    method: "GET",
                    headers: { "Content-type": "application/json" },
                }
            )
                .then((res) => res.json())
                .then((response) => {
                    // console.log(response);
                    if (!response.error) {
                        console.log("data from search", response.message);
                        setFormResponse(response.message)
                        setLoadTable(!loadTable);
                    }
                })
        };

        const handleFormChangeData = (e) => {
            e.preventDefault();
            switch (e.target.name) {
                case "name":
                    setName(e.target.value);
                    break;
                case "work_method":
                    setWorkMethod(e.target.value);
                    break;
                case "work_mode":
                    setWorkMode(e.target.value);
                    break;
                case "email":
                    setEmail(e.target.value);
                    break;
                case "gender":
                    setGender(e.target.value);
                    break;
                case "skills":
                    setSkills(e.target.value);
                    break;
            }
        };

        return (
            <div className="container-fluid bg-light">
                <div
                    className=" d-flex justify-content-around align-items-center my-2 "
                    style={{ listStyle: "none" }}
                >
                    <div>
                        <select
                            class="custom-select form-select"
                            id="inputSkills"
                            value={skills}
                            name="skills"
                            onChange={(e) => {
                                handleFormChangeData(e);
                            }}
                        >
                            <option selected>Skills</option>
                            <option value="java">Java</option>
                            <option value="javascript">Javascript</option>
                            <option value="reactjs">React.js</option>
                            <option value="nextjs">Next.js</option>
                            <option value="mongodb">MongoDB</option>
                            <option value="shopify">Shopify</option>
                            <option value="wordpress">Wordpress</option>
                        </select>
                    </div>
                    <div>
                        <select
                            class="custom-select form-select"
                            id="inputWorkMethod"
                            value={work_mode}
                            name="work_mode"
                            onChange={(e) => {
                                handleFormChangeData(e);
                            }}
                        >
                            <option selected>Work Mode</option>
                            <option value="FullTime">FullTime</option>
                            <option value="FreeLancer">FreeLancer</option>
                        </select>
                    </div>
                    <div>
                        <select
                            class="custom-select form-select"
                            id="inputWorkMethod"
                            defaultValue={work_method}
                            name="work_method"
                            onChange={(e) => {
                                handleFormChangeData(e);
                            }}
                        >
                            <option selected>Work Method</option>
                            <option value="Individual">Individual</option>
                            <option value="Agency">Agency</option>
                        </select>
                    </div>
                    <div>
                        <select
                            class="custom-select form-select"
                            id="inputWorkMethod"
                            onChange={(e) => {
                                handleFormChangeData(e);
                            }}
                            name="gender"
                            defaultValue={gender}
                        >
                            <option selected>Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            placeholder="xyz@email.com"
                            defaultValue={email}
                            onChange={(e) => {
                                handleFormChangeData(e);
                            }}
                        />
                    </div>
                    {/* <div>
              <input
                className="form-control"
                type="text"
                placeholder="Address"
                defaultValue={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div> */}
                    <div>
                        <input
                            type="text"
                            class="form-control"
                            id="inputName"
                            name="name"
                            placeholder="Name"
                            defaultValue={name}
                            onChange={(e) => {
                                handleFormChangeData(e);
                            }}
                        />
                    </div>
                    <div>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => {
                                handleSearch();
                            }}
                        >
                            Search
                        </button>
                    </div>
                </div>
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
                            <a href={modalItem?.resume_link} target="blank" className="text-dark">
                                <span className="font-weight-bold">Portfolio: </span>
                                {modalItem?.resume_link}
                            </a>
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
                                                        <a href={service.portfolio_link} target="blank">
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

    useEffect(() => {
        fetch(routes.REGISTERED_DATA,
            {
                method: "GET",
                headers:
                    { "Content-Type": "application/json" }
            }).then(res => res.json()).then(response => {
                if (!response.error) {
                    setFormResponse(response.message)
                }

            }).catch(err => {
                alert(err)
            })
    }, [])


    return (
        <>
            <TopBar />
            {<table class="table table-striped">
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
                    {formResponse.length == 0 ? <Loading /> : formResponse.map((item, index) => {
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
                                    View
                                </td>
                                {openModal ? <Modal /> : null}
                            </tr>
                        )
                    })}
                </tbody>
            </table>}
        </>
    );
};

export default FormResponse