import './MyStructure.sass'
import './MyStructurePhone.sass'

export default function MyStructure() {

    const checkAvatar = () => {
        // TODO Условия на проверку аватарки или же вернуть первую букву именни 
        return (
            <>
                <span className='avatar'>A</span>
            </>
        )
    }

    return (
        <div className="MyStructure pageContainer pgf">
            <h2 className='section__name'>My structure<div className='sort__content'><img className='icons' src="/images/icons/period.svg" alt="" /> All period <img src="images/icons/arrow-down.svg" alt="" /></div></h2>
            <div className="user__info">

                <div className="content us">
                    <div className='title'>
                        <div><img className='icons' src="/images/icons/personal.svg" alt="" />Personal</div>
                    </div>
                    <div className='info'>
                        <h3 >12</h3>
                        <div className="invited">
                            <div>
                                <p>8</p>
                                <span className='second'>Приглашено</span>
                            </div>
                            <div>
                                <p>4</p>
                                <span className='second'>Оплатили</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content us">
                    <div className='title'>
                        <div><img className='icons' src="/images/icons/structure2.svg" alt="" /> In Structure</div>
                    </div>
                    <div className='info'>
                        <h3>244</h3>
                        <div className="invited">
                            <div>
                                <p>8</p>
                                <span className='second'>Приглашено</span>
                            </div>
                            <div>
                                <p>4</p>
                                <span className='second'>Оплатили</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content">
                    <div className='title'>
                        <div><img className='icons' src="/images/icons/mentor.svg" alt="" /> Your mentor</div>
                    </div>
                    <div className='info'>
                        <div className="mentor">
                            {checkAvatar()}
                            <div className="mentor__name">
                                <h3>Angel Carder</h3>
                                <h4>@CheyenneGeorge</h4>
                            </div>
                        </div>
                        <a href="https://t.me/"><img className='icons' src="/images/net/telegram.png" alt="" /></a>
                    </div>
                </div>
            </div>
            <div className="affiliateLink content">
                <h2>Affiliate Link</h2>
                <p className='second'>Share your referral link by copying and sending it or sharing it on social media.</p>
                <div className="links">
                    <div className='action__input'>
                        <p>https://myinsider.club/en/?ref=cryptovc</p>
                        <span><img className='icons' src="/images/icons/copy.svg" alt="" />Copy link</span>
                    </div>
                    <div className='net'>
                        <a href=""><img src="/images/icons/facebookMini.svg" alt="" className="icons" /></a>
                        <a href=""><img src="/images/icons/telegramMini.svg" alt="" className="icons" /></a>
                        <a href=""><img src="/images/icons/twitterMini.svg" alt="" className="icons" /></a>
                        <a href=""><img src="/images/icons/whatsappMini.svg" alt="" className="icons" /></a>
                    </div>
                </div>
            </div>
            <label className="search">
                <img className='icons' src="/images/icons/search.svg" alt="" />
                <input type="text" placeholder='Search for partners throughout the structure' />
            </label>

            <div className='launchpad'>
                <table className="content">
                    <tbody>
                        <tr>
                            <th className='project'>USER</th>
                            <th className='price'>LICENSE</th>
                            <th className='price'>RANK</th>
                            <th className='price'>PARTNERS</th>
                            <th className='price'>PERSONAL</th>
                            <th className='price'>STRUCTURAL</th>
                        </tr>
                        <tr>
                            <td className='project'>
                                <div className="friend">
                                    {checkAvatar()}
                                    <div className="friend__name">
                                        <h3>Angel Carder</h3>
                                        <h4>@CheyenneGeorge</h4>
                                    </div>
                                </div>
                            </td>
                            <td className='price not__active'>Not paid</td>
                            <td className='price'>
                                <img src="/images/icons/starActive.svg" alt="" className="star" />
                                <img src="/images/icons/starActive.svg" alt="" className="star" />
                                <img src="/images/icons/starActive.svg" alt="" className="star" />
                                <img src="/images/icons/star.svg" alt="" className="star" />
                                <img src="/images/icons/star.svg" alt="" className="star" />
                            </td>
                            <td className='price'>0</td>
                            <td className='price'>$ 200</td>
                            <td className='price'>$ 200</td>
                        </tr>
                        <tr>
                            <td className='project'>
                                <div className="friend">
                                    {checkAvatar()}
                                    <div className="friend__name">
                                        <h3>Angel Carder</h3>
                                        <h4>@CheyenneGeorge</h4>
                                    </div>
                                </div>
                            </td>
                            <td className='price fundraising'>Paid</td>
                            <td className='price'>
                                <img src="/images/icons/starActive.svg" alt="" className="star" />
                                <img src="/images/icons/starActive.svg" alt="" className="star" />
                                <img src="/images/icons/starActive.svg" alt="" className="star" />
                                <img src="/images/icons/starActive.svg" alt="" className="star" />
                                <img src="/images/icons/starActive.svg" alt="" className="star" />
                            </td>
                            <td className='price'>0</td>
                            <td className='price'>$ 200</td>
                            <td className='price'>$ 200</td>
                        </tr>
                        <tr>
                            <td className='project'>
                                <div className="friend">
                                    {checkAvatar()}
                                    <div className="friend__name">
                                        <h3>Angel Carder</h3>
                                        <h4>@CheyenneGeorge</h4>
                                    </div>
                                </div>
                            </td>
                            <td className='price fundraising'>Paid</td>
                            <td className='price'>
                                <img src="/images/icons/starActive.svg" alt="" className="star" />
                                <img src="/images/icons/starActive.svg" alt="" className="star" />
                                <img src="/images/icons/starActive.svg" alt="" className="star" />
                                <img src="/images/icons/starActive.svg" alt="" className="star" />
                                <img src="/images/icons/starActive.svg" alt="" className="star" />
                            </td>
                            <td className='price'>0</td>
                            <td className='price'>$ 200</td>
                            <td className='price'>$ 200</td>
                        </tr>
                        <tr>
                            <td className='project'>
                                <div className="friend">
                                    {checkAvatar()}
                                    <div className="friend__name">
                                        <h3>Angel Carder</h3>
                                        <h4>@CheyenneGeorge</h4>
                                    </div>
                                </div>
                            </td>
                            <td className='price fundraising'>Paid</td>
                            <td className='price'>
                                <img src="/images/icons/starActive.svg" alt="" className="star" />
                                <img src="/images/icons/starActive.svg" alt="" className="star" />
                                <img src="/images/icons/starActive.svg" alt="" className="star" />
                                <img src="/images/icons/starActive.svg" alt="" className="star" />
                                <img src="/images/icons/starActive.svg" alt="" className="star" />
                            </td>
                            <td className='price'>0</td>
                            <td className='price'>$ 200</td>
                            <td className='price'>$ 200</td>
                        </tr>
                        <tr>
                            <td className='project'>
                                <div className="friend">
                                    {checkAvatar()}
                                    <div className="friend__name">
                                        <h3>Angel Carder</h3>
                                        <h4>@CheyenneGeorge</h4>
                                    </div>
                                </div>
                            </td>
                            <td className='price fundraising'>Paid</td>
                            <td className='price'>
                                <img src="/images/icons/starActive.svg" alt="" className="star" />
                                <img src="/images/icons/starActive.svg" alt="" className="star" />
                                <img src="/images/icons/starActive.svg" alt="" className="star" />
                                <img src="/images/icons/starActive.svg" alt="" className="star" />
                                <img src="/images/icons/starActive.svg" alt="" className="star" />
                            </td>
                            <td className='price'>0</td>
                            <td className='price'>$ 200</td>
                            <td className='price'>$ 200</td>
                        </tr>
                        <tr>
                            <td className='project'>
                                <div className="friend">
                                    {checkAvatar()}
                                    <div className="friend__name">
                                        <h3>Angel Carder</h3>
                                        <h4>@CheyenneGeorge</h4>
                                    </div>
                                </div>
                            </td>
                            <td className='price fundraising'>Paid</td>
                            <td className='price'>
                                <img src="/images/icons/starActive.svg" alt="" className="star" />
                                <img src="/images/icons/starActive.svg" alt="" className="star" />
                                <img src="/images/icons/starActive.svg" alt="" className="star" />
                                <img src="/images/icons/starActive.svg" alt="" className="star" />
                                <img src="/images/icons/starActive.svg" alt="" className="star" />
                            </td>
                            <td className='price'>0</td>
                            <td className='price'>$ 200</td>
                            <td className='price'>$ 200</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}