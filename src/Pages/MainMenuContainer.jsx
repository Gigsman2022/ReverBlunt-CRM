import React, { useState } from 'react'
import homePng from "../assets/img/home.png";
import transactionPng from "../assets/img/transaction.png";
import userPng from "../assets/img/user.png";
import HelpPng from "../assets/img/Help.png";
import LogoutPng from "../assets/img/Logout.png";
import incomePng from "../assets/img/income.png";
import WebsiteLeads from "../Components/WebsiteLeads";
import NewFormResponseData from "../Components/New Registrations";
import Dashboard from '../Components/Dashboard';
import FormResponse from '../Components/Freelancer Database';
import ProjectManagement from '../Components/ProjectManagement';
import ClientsDatabase from '../Components/ClientsDatabase';
import Finance from '../Components/Finance';

const MainMenuContainer = () => {

    const [active1, setActive1] = useState(true);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);
    const [active5, setActive5] = useState(false);
    const [active6, setActive6] = useState(false);
    const [active7, setActive7] = useState(false);

    const handleMenu = (id) => {
        localStorage.setItem("option", id)
        switch (localStorage.getItem("option") | id) {
            case 1:
                setActive1(true);
                setActive2(false);
                setActive3(false);
                setActive4(false);
                setActive5(false);
                setActive7(false);
                setActive6(false);
                break;
            case 2:
                setActive1(false);
                setActive2(true);
                setActive3(false);
                setActive4(false);
                setActive5(false);
                setActive7(false);
                setActive6(false);
                break;
            case 3:
                setActive1(false);
                setActive2(false);
                setActive3(true);
                setActive4(false);
                setActive5(false);
                setActive7(false);
                setActive6(false);
                break;
            case 4:
                setActive1(false);
                setActive2(false);
                setActive3(false);
                setActive4(true);
                setActive5(false);
                setActive7(false);
                setActive6(false);
                break;
            case 5:
                setActive1(false);
                setActive2(false);
                setActive3(false);
                setActive4(false);
                setActive5(true);
                setActive7(false);
                setActive6(false);
                break;
            case 6:
                setActive1(false);
                setActive2(false);
                setActive3(false);
                setActive4(false);
                setActive5(false);
                setActive6(true);
                setActive7(false);

                break;
            case 7:
                setActive1(false);
                setActive2(false);
                setActive3(false);
                setActive4(false);
                setActive5(false);
                setActive6(false);
                setActive7(true);
                break;

            default:
                setActive1(true)
                break;
        }
    }

    const SideBarMenu = () => {
        return (
            <>

                <h4 className="font-weight-bold my-5"> ReverBlunt</h4>

                <div className='d-flex justify-content-between align-items-start flex-column mx-1'>
                    <p
                        style={{ cursor: "pointer" }}
                        className={
                            active1
                                ? "font-weight-bold bg-profile-menu my-3"
                                : "font-weight-bold text-primary-50 my-3"
                        }
                        onClick={() => {
                            handleMenu(1)
                        }}
                    >
                        <img
                            src={homePng}
                            alt={"https://www.gigzman.com"}
                            style={{ width: "15px", height: "15px" }}
                        />{" "}
                        Dashboard
                    </p>

                    <p
                        style={{ cursor: "pointer" }}
                        className={
                            active2
                                ? "font-weight-bold bg-profile-menu my-3"
                                : "font-weight-bold text-primary-50 my-3"
                        }
                        onClick={() => {
                            handleMenu(2)
                        }}
                    >
                        <img
                            src={transactionPng}
                            alt={"https://www.gigzman.com"}
                            style={{ width: "15px", height: "15px" }}
                        />{" "}
                        New Registrations
                    </p>

                    <p
                        style={{ cursor: "pointer" }}
                        className={
                            active3
                                ? "font-weight-bold bg-profile-menu my-3"
                                : "font-weight-bold text-primary-50 my-3"
                        }
                        onClick={() => {
                            handleMenu(3)
                        }}
                    >
                        <img
                            src={userPng}
                            alt={"https://www.gigzman.com"}
                            style={{ width: "15px", height: "15px" }}
                        />{" "}
                        Freelancer Database
                    </p>

                    <p
                        style={{ cursor: "pointer" }}
                        className={
                            active4
                                ? "font-weight-bold bg-profile-menu my-3"
                                : "font-weight-bold text-primary-50 my-3"
                        }
                        onClick={() => {
                            handleMenu(4)
                        }}
                    >
                        <img
                            src={userPng}
                            alt={"https://www.gigzman.com"}
                            style={{ width: "15px", height: "15px" }}
                        />{" "}
                        Client Database
                    </p>

                    <p
                        style={{ cursor: "pointer" }}
                        className={
                            active5
                                ? "font-weight-bold bg-profile-menu my-3"
                                : "font-weight-bold text-primary-50 my-3"
                        }
                        onClick={() => {
                            handleMenu(5)
                        }}
                    >
                        <img
                            src={incomePng}
                            alt={"https://www.gigzman.com"}
                            style={{ width: "18px", height: "18px" }}
                        />{" "}
                        Website Leads
                    </p>

                    <p
                        style={{ cursor: "pointer" }}
                        className={
                            active6
                                ? "font-weight-bold bg-profile-menu my-3"
                                : "font-weight-bold text-primary-50 my-3"
                        }
                        onClick={() => {
                            handleMenu(6)
                        }}
                    >
                        <i class="fa fa-tasks mr-1" aria-hidden="true"></i>
                        Project Management
                    </p>
                    <p
                        style={{ cursor: "pointer" }}
                        className={
                            active7
                                ? "font-weight-bold bg-profile-menu my-3"
                                : "font-weight-bold text-primary-50 my-3"
                        }
                        onClick={() => {
                            handleMenu(7)
                        }}
                    >
                        <i class="fas fa-dollar-sign fa-md fa-fw"></i>
                        Financial
                    </p>

                </div>

            </>
        );
    };
    return (
        <div className="container-fluid row m-0 p-0" >
            <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2 mx-auto " >
                <SideBarMenu />
            </div>
            <div className="col-sm-12 col-md-10 col-lg-10 col-xl-10 mx-auto">
                {active1 ? <Dashboard /> : null}
                {active2 ? <NewFormResponseData /> : null}
                {active3 ? <FormResponse /> : null}
                {active4 ? <ClientsDatabase /> : null}
                {active5 ? <WebsiteLeads /> : null}
                {active6 ? <ProjectManagement /> : null}
                {active7 ? <Finance /> : null}
            </div>
        </div>
    )
}

export default MainMenuContainer