import './MyStructure.sass'
import { CiSearch } from "react-icons/ci";

import { useState } from 'react';
import { GiRoundStar } from "react-icons/gi";

export default function MyStructure() {
    const [activeTab, setActiveTab] = useState('all');



    return (
        <div className="MyStructure">
            <div className="pageContainer">
                <ul>
                    <li className={activeTab === 'all' ? 'active' : ''} onClick={() => setActiveTab('all')}>All period</li>
                    <li className={activeTab === 'month' ? 'active' : ''} onClick={() => setActiveTab('month')}>Month</li>
                    <li className={activeTab === 'week' ? 'active' : ''} onClick={() => setActiveTab('week')}>Week</li>
                </ul>
                <div className="friendsInfo">
                    <div>
                        <p>Login <span>User1234</span></p>
                        <p>Mentor <span>User4321</span></p>
                        <button>Copy ref link</button>
                    </div>
                    <div>
                        <h3>Personal</h3>
                        <p>Total invited <span>n</span></p>
                        <p>Total paid <span>n</span></p>
                    </div>
                    <div>
                        <h3>In structure</h3>
                        <p>Total invited <span>n</span></p>
                        <p>Total paid <span>n</span></p>
                    </div>
                </div>
                <form className="search">
                    <span>Search for partners</span>
                    <div className="inputBar">
                        <CiSearch />

                        <input type="text" />
                    </div>
                    <button>Search</button>
                </form>
                <div className="friendsList">
                    <div className="userInfo">
                        <p>User</p>
                        <div>
                            <p>License</p>
                            <p>Rank</p>
                            <p>Partners</p>
                            <p>Private</p>
                            <p>Structural</p>
                            <p>Action</p>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <div className='user'>
                                <img src='./avatar.svg' alt="" />
                                <p>User2341</p>
                            </div>
                            <div className='info'>
                                <p>Not paid</p>
                                <p><GiRoundStar /><GiRoundStar /><GiRoundStar /><GiRoundStar /><GiRoundStar /></p>
                                <p>0</p>
                                <p>$0</p>
                                <p>$0</p>
                                <a href="#/">More</a>
                            </div>

                        </li>
                        <li>
                            <div className='user'>
                                <img src='./avatar.svg' alt="" />
                                <p>User2341</p>
                            </div>
                            <div className='info'>
                                <p>Not paid</p>
                                <p><GiRoundStar /><GiRoundStar /><GiRoundStar /><GiRoundStar /><GiRoundStar /></p>
                                <p>0</p>
                                <p>$0</p>
                                <p>$0</p>
                                <a href="#/">More</a>
                            </div>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}