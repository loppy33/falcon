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


    const isActive = (path) => {
        if (path === "/") {
            return location.pathname === "/";
        }
        return location.pathname.includes(path);
    };

    return (
        <>
            <div className="Layout" style={account.status !== "connected" ? { flexDirection: "column" } : {}} >
                {account.status !== "connected" ?

                    <>
                        <header className={menu ? 'active' : null}>
                            <div className="home__container">
                                <a href="#greetings"><img src="/images/icons/logo.svg" alt="" /></a>
                                <nav>
                                    <ul>
                                        <li><a onClick={() => setMenu(false)} href="#about_us">About Us</a></li>
                                        <li><a onClick={() => setMenu(false)} href="#our_mission">Our Mission</a></li>
                                        <li><a onClick={() => setMenu(false)} href="#our_services">Our Services</a></li>
                                        <li><a onClick={() => setMenu(false)} href="#experienced_team">Experienced Team</a></li>
                                        <li><a onClick={() => setMenu(false)} href="#join_us">Join Us</a></li>
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
                        <nav
                            className="sidebar"
                            style={
                                window.innerWidth <= 720 // Проверка на ширину экрана (обычно мобильные экраны)
                                    ? menu
                                        ? { transform: 'translateX(0%)' }
                                        : { transform: 'translateX(-100%)' }
                                    : {}
                            }
                        >
                            <Link className="title" to="/"><img src="/images/icons/logocon.svg" alt="" /></Link>
                            <ul>
                                <li className={isActive("/") ? "active" : ""}><Link to="/"><img src="/images/icons/home.svg" alt="" /> Home</Link></li>
                                <li className={isActive("/academy") ? "active" : ""}><Link to="/academy"><img src="/images/icons/academy.svg" alt="" /> Academy</Link></li>
                                <li className={isActive("/launchpad") ? "active" : ""}><Link to="/launchpad"><img src="/images/icons/launchpad.svg" alt="" /> Launchpad</Link></li>
                                <li className={isActive("/mylicense") ? "active" : ""}><Link to="/mylicense"><img src="/images/icons/lic.svg" alt="" /> My license</Link></li>
                                <li className={isActive("/mystructure") ? "active" : ""}><Link to="/mystructure"><img src="/images/icons/structure.svg" alt="" />My Structure</Link></li>
                                <li className={isActive("/profile") ? "active" : ""}><Link to="/profile"><img src="/images/icons/profile.svg" alt="" /> Profile</Link></li>
                            </ul>
                        </nav>
                    </>}
                <main>
                    {account.status === "connected" ?
                        <>
                            <div className="user" 
                            style={
                                window.innerWidth <= 720 // Проверка на ширину экрана (обычно мобильные экраны)
                                    ? menu
                                        ? { backgroundColor: '#101729D1' }
                                        : { backgroundColor: '#101729' }
                                    : {}
                            }>
                                <div className="pageContainer">
                                    {/* <span>{getPageName(location.pathname)}</span> */}
                                    <Link className="btn__active wallets" to="/wallets"><img className="icons" src="images/icons/wallet.svg" alt="" />Wallet</Link>

                                    <div className="lang__and__acc">
                                        <img className="icons lang" src="images/icons/lang.svg" alt="" />
                                        <w3m-button />
                                    </div>
                                    <div className="menu__connected" onClick={() => setMenu(!menu)}>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        ''}
                    <Outlet />
                    {/* {account.status === "connected" && <><div className="pageContainer"><span>Insider Club © Copyright 2024. All rights reserved</span></div></>} */}
                </main>
            </div>
        </>
    )
};

export default Layout;
