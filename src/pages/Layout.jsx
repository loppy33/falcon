import { Outlet, Link } from "react-router-dom";
import './Layout.sass'
import { useAccount } from 'wagmi'

const Layout = () => {
    const account = useAccount()

    return (
        <>
            <div className="container">
                {account.status === "connected" ?

                    <>
                        <header>
                            <Link to="/">Home</Link>
                            <nav>
                                <ul>
                                    <li><Link to="/education">Education</Link></li>
                                    <li><Link to="/pools">Pools</Link></li>
                                    <li><Link to="/labs">Labs</Link></li>
                                    <li><Link to="/degen">Degen</Link></li>
                                </ul>
                            </nav>
                            <w3m-button />
                        </header>

                    </> : <>

                        <div className="sidebar">
                            <a href="/">Home</a>
                            <a href="/">Home</a>
                            <a href="/">Home</a>
                            <a href="/">Home</a>
                        </div>

                        <div className="info">
                            <a href="/">Home</a>
                        </div>

                    </>}


                <main>
                    <Outlet />
                </main>

                {/* <footer>
                        <p>Footer content</p>
                    </footer> */}
            </div>
        </>
    )
};

export default Layout;


