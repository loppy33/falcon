import { Link } from 'react-router-dom'

export default function Launchpad() {
    return (
        <div className="Launchpad pageContainer">
            <h2>Launchpad</h2>
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
                            <Link to='/launchpad/1' className="arrow">
                                <img src="/images/icons/arrow-right.svg" alt="" />
                            </Link>
                        </tr>
                        <tr>
                            <td className='project'><div><img className='avatar' src="/images/temp.png" alt="" /> Values Network</div></td>
                            <td className='rank'><div><span className='line'> <span style={{ width: 40.9 + '%' }} className='lineContent'></span> </span>  40.9%</div></td>
                            <td className='collection'>$ 60001</td>
                            <td className='price'>$ 0.0288</td>
                            <Link to='/launchpad/1' className="arrow">
                                <img src="/images/icons/arrow-right.svg" alt="" />
                            </Link>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}