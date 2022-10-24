import React, { useState, useEffect } from 'react'
import Loading from './Loading';
import { routes } from '../CONSTANTS';
const WebsiteLeads = () => {
    const [websiteLeads, setWebsiteLeads] = useState([]);
    const [openLeadModal, setOpenLeadModal] = useState(false);
    useEffect(() => {
        fetch(routes.WEBSITE_LEADS, {
            method: "GET", headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(response => {
            if (!response.error) {
                setWebsiteLeads(response.message)
            }
        })
    }, [])
    const HandleLeadModal = () => {
        const [name, setName] = useState("");
        const [phoneNumber, setPhoneNumber] = useState("");
        const [service, setService] = useState("");
        const [email, setEmail] = useState("");
        const [subject, setSubject] = useState("");
        const [status, setStatus] = useState("");
        const [source, setSource] = useState("");
        const handleQuery = async () => {
            await fetch(routes.CREATE_LEADS, {
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
                        window.location.reload(false)
                    }
                    console.log(data.message);
                });
        };
        const handleChanges = (e) => {
            const { name, value } = e.target;
            console.log(name, value);
            switch (name) {
                case "inputEmail":
                    setEmail(value)
                    break;
                case "inputName":
                    setName(value)
                    break;
                case "inputPhoneNumber":
                    setPhoneNumber(value)
                    break;
                case "inputSubject":
                    setSubject(value)
                    break;
                case "inputService":
                    setService(value)
                    break;
                case "inputSource":
                    setSource(value)
                    break;
                case "inputStatus":
                    setStatus(value)
                    break;
                default:
                    break;
            }
        }
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
                                                    handleChanges(e);
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
                                                    handleChanges(e);
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
                                                    handleChanges(e);
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
                                                    handleChanges(e);
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
                                                    handleChanges(e);
                                                }}
                                            />
                                        </div>
                                        <div className="my-2">
                                            <label for="inputSource">Source</label>
                                            <select
                                                className="custom-select form-select"
                                                id="inputSource"
                                                name="inputSource"
                                                value={source}
                                                onChange={(e) => {
                                                    handleChanges(e);
                                                }}
                                            >
                                                <option value="App Development">
                                                    App Development
                                                </option>
                                                <option value="Website Development">
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
                                                name="inputStatus"
                                                value={status}
                                                onChange={(e) => {
                                                    handleChanges(e);
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
    const handleSetStatus = async (_id, value) => {
        await fetch(routes.UPDATE_LEADS, {
            method: "PUT", headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                _id,
                status: value
            })
        }).then(res => res.json()).then(data => {
            console.log("website leads", data);
        })
    }
    const handleLeadDelete = async (_id) => {
        await fetch(routes.DELETE_LEADS + _id, {
            method: "DELETE", headers: { "Content-Type": "application/json" }
        }).then(res => res.json()).then((data) => {
            if (!data.error) {
                setWebsiteLeads(data.message)
                alert("Lead Deleted")
            }

        })
    }



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
                    {websiteLeads?.length == 0 ? <Loading /> : websiteLeads.map((item, index) => {
                        return (
                            <tr key={item._id}>
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
                                            handleSetStatus(item._id, e.target.value);
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
                                <td>
                                    <a
                                        className="btn btn-success"
                                        type="a"
                                        href={`tel:${item.phoneNumber}`}>
                                        <i class="fa fa-phone" aria-hidden="true"></i>
                                    </a>

                                </td>
                                <td
                                >
                                    <button type="button"
                                        className="btn btn-danger"
                                        onClick={() => handleLeadDelete(item._id)}>
                                        <i class="fa fa-trash" aria-hidden="true"></i>
                                    </button>

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