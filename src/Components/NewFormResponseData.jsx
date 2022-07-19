import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../env'
const NewFormResponseData = () => {
    const [formResponse, setFormResponse] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [skills, setSkills] = useState("");
    const [work_method, setWorkMethod] = useState("");
    const [work_mode, setWorkMode] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [name, setName] = useState("");
    const [P, setP] = useState("");
    const [Q, setQ] = useState("");
    const [_id, setId] = useState("");
    const [modalItem, setModalItem] = useState();
    const [loadTable, setLoadTable] = useState(false);
    const [editData, setEditData] = useState(false);
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
    const
        UpdateFormData = async () => {
            console.log('clicked');
            await fetch(BASE_URL + "/update-formData", {
                method: "put", headers: { "Content-type": "application/json" }, body: JSON.stringify({
                    _id: _id, name, skills, P, Q, work_method, work_mode
                })
            }).then(res => res.json()).then(data => {
                console.log("udpate data", data.message);
                if (!data.error) {
                    alert(data.message)
                } else {
                    alert(data.message)
                }
            })
        }
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
                                    return <div key={ind}>{skill.length > 1 ? skill + "," : skill}</div>;
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
                            <button type="button" className="btn btn-warning" onClick={() => {
                                setEditData(true)
                                setOpenModal(false)
                                setName(modalItem.name)
                                setSkills(modalItem.skills)
                                setP(modalItem.P)
                                setQ(modalItem.Q)
                                setWorkMethod(modalItem.work_method)
                                setWorkMode(modalItem.work_mode)
                                setId(modalItem._id)
                            }}>
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
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

    const ModalEditData = () => {
        return (<>
            <div
                className="container-fluid myModal"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-scrollable w-100">
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
                            <>
                                <label className='form-label'>Name</label>
                                <input className='form-control my-2' name="name" value={name} type="text" onChange={(e) => { setName(e.target.value) }} />
                                <label className='form-label'>Skills</label>

                                <input className='form-control my-2' name="skills" value={skills} type="text" onChange={(e) => { setSkills(e.target.value) }} />
                                <div className='my-1'>
                                    <label className='form-label'>P</label>
                                    <select className='form-select form-control' defaultValue={P} onChange={(e) => { setP(e.target.value) }}>
                                        <option value="-">Select Option</option>
                                        <option value="Low">Low</option>
                                        <option value="Moderate">Moderate</option>
                                        <option value="High">High</option>
                                    </select>
                                </div>

                                {/* <input className='form-control my-2' name="P" value={P} type="text" onChange={(e) => { setP(e.target.value) }} /> */}

                                <div>
                                    <label className='form-label'>Q</label>

                                    <select className='form-select form-control' defaultValue={Q} onChange={(e) => {
                                        setQ(e.target.value);
                                        console.log(e.target.value);
                                    }}>
                                        <option value="-">Select Option</option>
                                        <option value="Low">Low</option>
                                        <option value="Moderate">Moderate</option>
                                        <option value="High">High</option>
                                    </select>
                                </div>

                                <label className='form-label'>Work Method</label>

                                <input className='form-control my-2' name="work_method" value={work_method} type="text" onChange={(e) => { setWorkMethod(e.target.value) }} />
                                <label className='form-label'>Work Mode</label>

                                <input className='form-control my-2' name="work_mode" value={work_mode} type="text" onChange={(e) => { setWorkMode(e.target.value) }} />
                                <button className="btn btn-success btn-block" onClick={() => { UpdateFormData() }}>Update</button>
                            </>
                        </div>
                        <div className="modal-footer">
                            <button className='btn btn-gray' onClick={() => {
                                setOpenModal(false);
                                setEditData(false);
                            }}>
                                Close
                            </button>
                            <button className='btn btn-warning' onClick={() => {
                                setEditData(false)
                                setOpenModal(true)
                            }}>
                                Back
                            </button>
                        </div>
                    </div>
                </div>
            </div></>)
    }
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
                        <th scope="col">P</th>
                        <th scope="col">Q</th>
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
                                <td>{item.P}</td>
                                <td>{item.Q}</td>
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
                                {editData ? <ModalEditData /> : null}
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
export default NewFormResponseData