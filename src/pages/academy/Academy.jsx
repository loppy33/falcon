import { useState } from 'react'
import './Academy.sass'
import { Link } from 'react-router-dom'



export default function Academy() {
    const [filter, setFilter] = useState('All')

    const renderCatalog = () => {
        switch (filter) {
            case 'All':
                return (
                    <>
                        <h2 className='section__name'>Publicly available  <a className='link' href="">Show More</a></h2>

                        <div className='academy'>
                            <Link to="/academy/1">
                                <img src="/images/temp.png" alt="" />
                                <div className="content">
                                    <div className="info">Portfolio · 05.08.2024</div>
                                    <p>Instructions: How to Manage a Portfolio on CoinMarketCap</p>
                                </div>
                            </Link>
                            <a href="/academy/1">
                                <img src="/images/temp.png" alt="" />
                                <div className="content">
                                    <div className="info">Portfolio · 05.08.2024</div>
                                    <p>Instructions: How to Manage a Portfolio on CoinMarketCap</p>
                                </div>
                            </a>
                            <Link to="/academy/1">
                                <img src="/images/temp.png" alt="" />
                                <div className="content">
                                    <div className="info">Portfolio · 05.08.2024</div>
                                    <p>Instructions: How to Manage a Portfolio on CoinMarketCap</p>
                                </div>
                            </Link>
                        </div>

                        <h2 className='section__name'>Cryptocurrency  <div><span className='not__active'>Available with active license</span> <a className='link' href="">Pay now</a></div></h2>

                        <div className='academy no__available'>
                            <Link to="/detailed/1">
                                <img src="/images/temp.png" alt="" />
                                <div className="content">
                                    <div className="info">Portfolio · 05.08.2024</div>
                                    <p>Instructions: How to Manage a Portfolio on CoinMarketCap</p>
                                </div>
                            </Link>
                            <a href="/detailed/1">
                                <img src="/images/temp.png" alt="" />
                                <div className="content">
                                    <div className="info">Portfolio · 05.08.2024</div>
                                    <p>Instructions: How to Manage a Portfolio on CoinMarketCap</p>
                                </div>
                            </a>
                            <Link to="/detailed/1">
                                <img src="/images/temp.png" alt="" />
                                <div className="content">
                                    <div className="info">Portfolio · 05.08.2024</div>
                                    <p>Instructions: How to Manage a Portfolio on CoinMarketCap</p>
                                </div>
                            </Link>
                        </div>

                    </>
                )

            case 'Open access':
                return (
                    <>
                        <h2 className='section__name'>{filter} <div className='sort__content filter'>All project <img src="images/icons/arrow-down.svg" alt="" /></div></h2>
                    </>
                )
        }
    }

    return (
        <div className="Academy pageContainer pgf">
            <h2>Academy</h2>
            <ul>
                <li onClick={() => setFilter('All')} className={filter === "All" ? "btn__active" : null}>All</li>
                <li onClick={() => setFilter('Open access')} className={filter === "Open access" ? "btn__active" : null}>Open access</li>
                <li>Cryptocurrency</li>
                <li>Robot</li>
                <li>Cryptocurrency</li>
                <li>Cryptocurrency</li>
            </ul>
            {renderCatalog()}


        </div>
    )
}