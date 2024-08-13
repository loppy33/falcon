import { Outlet, Link, useLocation, Navigate } from "react-router-dom";
import './Layout.sass'
import './phone.sass'
import { useAccount } from 'wagmi'

import { FaHome } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";
import { useEffect, useState } from "react";

const Layout = () => {
    const account = useAccount();
    const location = useLocation();

    const [menu, setMenu] = useState(false);

    useEffect(() => {
        console.log(menu);

    }, [menu])

    const isActive = (path) => location.pathname === path;

    const getPageName = (pathname) => {
        switch (pathname) {
            case "/":
                return "Home";
            case "/profile":
                return "Profile";
            case "/myprojects":
                return "My Projects";
            case "/myeducation":
                return "My Education";
            case "/mystructure":
                return "My Structure";
            case "/wallets":
                return "Wallets";
            case "/support":
                return "Support";
            default:
                return "Home";
        }
    };

    return (
        <>
            <div className="Layout" style={account.status !== "connected" ? { flexDirection: "column" } : {}} >
                {account.status !== "connected" ?

                    <>
                        <header className={menu && 'active'}>
                            <div className="container">
                                <a href="#greetings"><img src="images/icons/logo.svg" alt="" /></a>
                                <nav>
                                    <ul>
                                        <li><a href="#about_us">About Us</a></li>
                                        <li><a href="#our_mission">Our Mission</a></li>
                                        <li><a href="#our_services">Our Services</a></li>
                                        <li><a href="#experienced_team">Experienced Team</a></li>
                                        <li><a href="#join_us">Join Us</a></li>
                                        <button className="action__button">
                                            Log in
                                            <w3m-button />
                                        </button>
                                    </ul>
                                </nav>
                                <div className="menu" onClick={() => setMenu(!menu)}>
                                    <span></span>
                                </div>
                            </div>
                        </header>

                    </> : <>
                        <nav className="sidebar">
                            <Link className="title" to="/panel">Falcon</Link>
                            <ul>
                                <li className={isActive("/") ? "active" : ""}><Link to="/"><FaHome /> Home</Link></li>
                                <li className={isActive("/profile") ? "active" : ""}><Link to="/profile"><FaUser />Profile</Link></li>
                                <li className={isActive("/wallets") ? "active" : ""}><Link to="/wallets"><FaWallet />Wallets</Link></li>
                                <li className={isActive("/myprojects") ? "active" : ""}><Link to="/myprojects"><FaProjectDiagram />My Projects</Link></li>
                                <li className={isActive("/myeducation") ? "active" : ""}><Link to="/myeducation"><FaGraduationCap />My Education</Link></li>
                                <li className={isActive("/mystructure") ? "active" : ""}><Link to="/mystructure"><FaUserFriends />My Structure</Link></li>
                                <li className={isActive("/support") ? "active" : ""}><Link to="/support"><MdContactSupport />Support</Link></li>
                            </ul>
                        </nav>
                    </>}
                <main>
                    {account.status === "connected" ?
                        <>
                            <div className="info">
                                <div className="container">
                                    <span>{getPageName(location.pathname)}</span>
                                    <w3m-button />
                                </div>
                            </div>
                        </>
                        :
                        ''}
                    <Outlet />
                </main>
            </div>
        </>
    )
};

export default Layout;
