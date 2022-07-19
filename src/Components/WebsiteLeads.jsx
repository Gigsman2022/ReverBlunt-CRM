import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../env';
const WebsiteLeads = () => {
    const [websiteLeads, setWebsiteLeads] = useState([]);
    const [openLeadModal, setOpenLeadModal] = useState(false);
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [service, setService] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [status, setStatus] = useState("");
    const [source, setSource] = useState("");
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
    const handleQuery = async () => {
        await fetch("https://gigzman-backend.herokuapp.com/create-websiteLeads", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                phoneNumber,
                service,
                email,
                subject,
                status,
                source,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (!data.error) {
                    alert(data.message);
                }
                console.log(data.message);
            });
    };

    const HandleLeadModal = () => {
        return (
            <>
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
                                    Add a Lead!
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    onClick={() => {
                                        setOpenLeadModal(false);
                                    }}
                                >
                                    X
                                </button>
                            </div>
                            <div className="modal-body p-4 text-left">
                                <div className="row">
                                    <div className="col-6 mx-auto">
                                        <div className="my-2">
                                            <label for="inputEmail">Email</label>
                                            <input
                                                id="inputEmail"
                                                name="inputEmail"
                                                placeholder="Email"
                                                className="form-control"
                                                onChange={(e) => {
                                                    setEmail(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="my-2">
                                            <label for="inputName">Name</label>
                                            <input
                                                id="inputName"
                                                name="inputName"
                                                className="form-control"
                                                placeholder="Name"
                                                onChange={(e) => {
                                                    setName(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="my-2">
                                            <label for="inputPhoneNumber">Phone Number</label>
                                            <input
                                                id="inputPhoneNumber"
                                                name="inputPhoneNumber"
                                                className="form-control"
                                                placeholder="PhoneNumber"
                                                onChange={(e) => {
                                                    setPhoneNumber(e.target.value);
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-6 mx-auto">
                                        <div className="my-2">
                                            <label for="inputSubject">Subject</label>
                                            <input
                                                id="inputSubject"
                                                name="inputSubject"
                                                className="form-control"
                                                placeholder="Subject"
                                                onChange={(e) => {
                                                    setSubject(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="my-2">
                                            <label for="inputService">Service</label>
                                            <input
                                                id="inputService"
                                                name="inputService"
                                                className="form-control"
                                                placeholder="Service"
                                                onChange={(e) => {
                                                    setService(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="my-2">
                                            <label for="inputSource">Source</label>
                                            <select
                                                className="custom-select form-select"
                                                id="inputSource"
                                                value={source}
                                                onChange={(e) => {
                                                    setSource(e.target.value);
                                                }}
                                            >
                                                <option value="App Development">
                                                    App Development
                                                </option>
                                                <option value="Website Development">
                                                    {" "}
                                                    Website Development
                                                </option>
                                                <option value="Development Services">
                                                    Development Services
                                                </option>
                                                <option value="Product">Product</option>
                                                <option value="Design & Branding">
                                                    Design & Branding
                                                </option>
                                                <option value="Offline Marketing">
                                                    Offline Marketing
                                                </option>
                                                <option value="Content">Content</option>
                                                <option value="Other Technologies">
                                                    Other Technologies
                                                </option>
                                            </select>
                                        </div>
                                        <div className="my-2">
                                            <label for="inputStatus">Status</label>
                                            <select
                                                className="custom-select form-select"
                                                id="inputStatus"
                                                value={status}
                                                onChange={(e) => {
                                                    setStatus(e.target.value);
                                                }}
                                            >
                                                <option label="Pending" value="pending">
                                                    Pending
                                                </option>
                                                <option label="Follow Up" value="followup">
                                                    Follow Up
                                                </option>
                                                <option label="Rejected" value="rejected">
                                                    Rejected
                                                </option>
                                                <option label="On Boarded" value="onboarded">
                                                    OnBoarded
                                                </option>
                                                <option label="Completed" value="completed">
                                                    Completed
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                    onClick={() => {
                                        setOpenLeadModal(false);
                                    }}
                                >
                                    Close
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-success"
                                    onClick={() => {
                                        handleQuery();
                                    }}
                                >
                                    Add Lead
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };
    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Service</th>
                        <th>Status</th>
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
                                <td>
                                    <select
                                        className="custom-select form-select w-50"
                                        id="inputStatus"
                                        defaultValue={item.status}
                                        onChange={(e) => {
                                            setStatus(e.target.value);
                                        }}
                                    >
                                        <option label="Pending" value="pending">
                                            Pending
                                        </option>
                                        <option label="Follow Up" value="followup">
                                            Follow Up
                                        </option>
                                        <option label="Rejected" value="rejected">
                                            Rejected
                                        </option>
                                        <option label="On Boarded" value="onboarded">
                                            OnBoarded
                                        </option>
                                    </select>
                                </td>
                                <td
                                    type="a"
                                    href={`tel:${item.phoneNumber}`}
                                    className="btn btn-success p-1 mt-3"
                                >
                                    Call
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {openLeadModal ? <HandleLeadModal /> : null}
            <div className="container-fluid add-lead">
                <button
                    className="btn btn-add-lead"
                    onClick={() => {
                        setOpenLeadModal(true);
                    }}
                >
                    Add Lead
                </button>
            </div>
        </>
    );
};
export default WebsiteLeads