import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Launchpad.sass'

export default function Launchpad() {
    const [filter, setFilter] = useState('My project')

    const renderContent = () => {
        switch (filter) {
            case 'My project':
                return (
                    <>
                        <div className="projectInfo">
                            <div className="content">
                                <div className='title'>
                                    <div><span className='btn__active icon'><img className='icons' src="/images/icons/license.svg" alt="" /></span> Projects </div>
                                </div>
                                <span>0</span>
                            </div>
                            <div className="content">
                                <div className='title'>
                                    <div><span className='btn__active icon'><img className='icons' src="/images/icons/balance.svg" alt="" /></span> Investments </div>
                                </div>
                                <span>$ 3400</span>
                            </div>
                            <div className="content">
                                <div className='title'>
                                    <div><span className='btn__active icon'><img className='icons' src="/images/icons/money.svg" alt="" /></span> Limit </div>
                                </div>
                                <span>$ 12389.33</span>
                            </div>
                            <div className="content">
                                <div className='title'>
                                    <div><span className='btn__active icon'><img className='icons' src="/images/icons/lock.svg" alt="" /></span> Unlocks </div>
                                </div>
                                <Link className='link'>Show More</Link>
                            </div>
                        </div>
                        <div className='launchpad'>
                            <table className="content">
                                <tbody>
                                    <tr>
                                        <th className='project'>PROJECT</th>
                                        <th className='status'>STATUS</th>
                                        <th className='received'>RECEIVED</th>
                                        <th className='invested'>INVESTED</th>
                                        <th className='price'>PRICE</th>
                                        <th className='ath'>ATH</th>
                                        <th className='arrow__link'></th>
                                    </tr>
                                    <tr>
                                        <td className='project'><div><img className='avatar' src="/images/temp.png" alt="" /> Values Network</div></td>
                                        <td className='status fundraising'>Fundraising</td>
                                        <td className='received'>$ 2.0288</td>
                                        <td className='invested'>$ 200</td>
                                        <td className='price'>$ 2.0288</td>
                                        <td className='ath'>-</td>
                                        <Link to='/launchpad/1' className="arrow">
                                            <img src="/images/icons/arrow-right.svg" alt="" />
                                        </Link>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </>
                )
            case 'Current projects':
                return (
                    <>
                        <div className='launchpad'>
                            <table className="content">
                                <tbody>
                                    <tr>
                                        <th className='project'>PROJECT</th>
                                        <th className='rank'>RANK</th>
                                        <th className='collection'>COLLECTION</th>
                                        <th className='price'>PRICE</th>
                                        <th className='arrow__link'></th> 
                                    </tr>
                                    <tr>
                                        <td className='project'><div><img className='avatar' src="/images/temp.png" alt="" /> Values Network</div></td>
                                        <td className='rank'><div><span className='line'> <span style={{ width: 74.6 + '%' }} className='lineContent'></span> </span> 74.6%</div></td>
                                        <td className='collection'>$ 60001</td>
                                        <td className='price'>$ 0.0288</td>
                                        <td className='arrow__link'>
                                            <Link to='/launchpad/1' className="arrow">
                                                <img src="/images/icons/arrow-right.svg" alt="" />
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </>
                )
            case 'Completed projects':
                return (
                    <>
                        <div className='launchpad'>
                            <table className="content">
                                <tbody>
                                    <tr>
                                        <th className='project'>PROJECT</th>
                                        <th className='status'>STATUS</th>
                                        <th className='received'>RECEIVED</th>
                                        <th className='invested'>INVESTED</th>
                                        <th className='price'>PRICE</th>
                                        <th className='ath'>ATH</th>
                                        <th className='arrow__link'></th>
                                    </tr>
                                    <tr>
                                        <td className='project'><div><img className='avatar' src="/images/temp.png" alt="" /> Values Network</div></td>
                                        <td className='status fundraising'>Fundraising</td>
                                        <td className='received'>$ 2.0288</td>
                                        <td className='invested'>$ 200</td>
                                        <td className='price'>$ 2.0288</td>
                                        <td className='ath'>Expectation</td>
                                        <Link to='/launchpad/1' className="arrow">
                                            <img src="/images/icons/arrow-right.svg" alt="" />
                                        </Link>
                                    </tr>
                                    <tr>
                                        <td className='project'><div><img className='avatar' src="/images/temp.png" alt="" /> Values Network</div></td>
                                        <td className='status fundraising'>Fundraising</td>
                                        <td className='received'>$ 2.0288</td>
                                        <td className='invested'>$ 200</td>
                                        <td className='price'>$ 2.0288</td>
                                        <td className='ath'>Expectation</td>
                                        <Link to='/launchpad/1' className="arrow">
                                            <img src="/images/icons/arrow-right.svg" alt="" />
                                        </Link>
                                    </tr>
                                    <tr>
                                        <td className='project'><div><img className='avatar' src="/images/temp.png" alt="" /> Values Network</div></td>
                                        <td className='status fundraising'>Fundraising</td>
                                        <td className='received'>$ 2.0288</td>
                                        <td className='invested'>$ 200</td>
                                        <td className='price'>$ 2.0288</td>
                                        <td className='ath'>Expectation</td>
                                        <Link to='/launchpad/1' className="arrow">
                                            <img src="/images/icons/arrow-right.svg" alt="" />
                                        </Link>
                                    </tr>
                                    <tr>
                                        <td className='project'><div><img className='avatar' src="/images/temp.png" alt="" /> Values Network</div></td>
                                        <td className='status refund'>Refund</td>
                                        <td className='received'>$ 2.0288</td>
                                        <td className='invested'>$ 200</td>
                                        <td className='price'>$ 2.0288</td>
                                        <td className='ath'>Expectation</td>
                                        <Link to='/launchpad/1' className="arrow">
                                            <img src="/images/icons/arrow-right.svg" alt="" />
                                        </Link>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </>
                )
        }
    }

    return (
        <div className="Launchpad pageContainer">
            <h2 className='section__name'>Launchpad
                <ul className='choice'>
                    <li onClick={() => setFilter('Current projects')} className={filter === 'Current projects' && 'active'}><img className='icon' src="/images/icons/current.svg" alt="" /> Current projects</li>
                    <li onClick={() => setFilter('My project')} className={filter === 'My project' && 'active'}><img className='icon' src="/images/icons/myproject.svg" alt="" /> My project</li>
                    <li onClick={() => setFilter('Completed projects')} className={filter === 'Completed projects' && 'active'}><img className='icon' src="/images/icons/completed.svg" alt="" /> Completed projects</li>
                </ul>
            </h2>

            {renderContent()}

        </div>
    )
}