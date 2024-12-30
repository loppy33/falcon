import { Outlet, Link, useLocation } from "react-router-dom";
import './Layout.sass';
import './phone.sass';
import { useAccount } from 'wagmi';
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

    const handleLinkClick = () => {
        // Закрываем меню только на мобильных устройствах
        if (window.innerWidth <= 720) {
            setMenu(false);
        }
    };

    useEffect(() => {
        if (menu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [menu]);

    return (
        <>
            <div className="Layout" style={account.status !== "connected" ? { flexDirection: "column" } : {}}>
                {account.status !== "connected" ?

                    <>
                        <header className={menu ? 'active' : null}>
                            <div className="home__container">
                                <a href="#greetings"><img src="/images/icons/logo.svg" alt="" /></a>
                                <nav>
                                    <ul>
                                        <li><a onClick={handleLinkClick} href="#about_us">About Us</a></li>
                                        <li><a onClick={handleLinkClick} href="#our_mission">Our Mission</a></li>
                                        <li><a onClick={handleLinkClick} href="#our_services">Our Services</a></li>
                                        <li><a onClick={handleLinkClick} href="#experienced_team">Experienced Team</a></li>
                                        <li><a onClick={handleLinkClick} href="#join_us">Join Us</a></li>
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
                                window.innerWidth <= 720
                                    ? menu
                                        ? { transform: 'translateX(0%)' }
                                        : { transform: 'translateX(-100%)' }
                                    : {}
                            }
                        >
                            <Link className="title" to="/"><img src="/images/icons/logocon.svg" alt="" /></Link>
                            <ul>
                                <li className={isActive("/") ? "active" : ""}><Link to="/" onClick={handleLinkClick}><img src="/images/icons/home.svg" alt="" /> Home</Link></li>
                                <li className={isActive("/academy") ? "active" : ""}><Link to="/academy" onClick={handleLinkClick}><img src="/images/icons/academy.svg" alt="" /> Academy</Link></li>
                                <li className={isActive("/launchpad") ? "active" : ""}><Link to="/launchpad" onClick={handleLinkClick}><img src="/images/icons/launchpad.svg" alt="" /> Launchpad</Link></li>
                                <li className={isActive("/mylicense") ? "active" : ""}><Link to="/mylicense" onClick={handleLinkClick}><img src="/images/icons/lic.svg" alt="" /> My license</Link></li>
                                <li className={isActive("/mystructure") ? "active" : ""}><Link to="/mystructure" onClick={handleLinkClick}><img src="/images/icons/structure.svg" alt="" />My Structure</Link></li>
                                <li className={isActive("/profile") ? "active" : ""}><Link to="/profile" onClick={handleLinkClick}><img src="/images/icons/profile.svg" alt="" /> Profile</Link></li>
                            </ul>
                        </nav>
                    </>
                }
                <main>
                    {account.status === "connected" ?
                        <>
                            <div className="user"
                                style={
                                    window.innerWidth <= 720
                                        ? menu
                                            ? { backgroundColor: '#101729D1' }
                                            : { backgroundColor: '#101729' }
                                        : {}
                                }>
                                <div className="pageContainer">
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
                        : ''}
                    <Outlet />
                </main>
            </div>
        </>
    )
};

export default Layout;
