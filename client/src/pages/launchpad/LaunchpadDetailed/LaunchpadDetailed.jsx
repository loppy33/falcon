import { Link } from "react-router-dom";
import './LaunchpadDetailed.sass'
import './LaunchpadDetailedPhone.sass'
import { useState } from "react";

export default function LaunchpadDetailed() {
    const [investAmount, setInvestAmount] = useState(500)
    const [filter, setFilter] = useState('Project')
    const [openModal, setOpenModal] = useState(false)
    const [paymentTransaction, setPaymentTransaction] = useState(500)

    const modalConfirmPayment = () => {
        return (
            <>
                <div className="modal">
                    <div className="content">
                        <h2 className="section__name">Enter Payment Transaction <img className="close" onClick={() => setOpenModal(false)} src="/images/icons/close.svg" alt="" /></h2>
                        <input type="number" className="action__input" onChange={(e) => setPaymentTransaction(e.value)} value={paymentTransaction} />
                        <button className="action__btn">Check</button>
                    </div>
                </div>
            </>
        )
    }

    const renderContent = () => {
        switch (filter) {
            case 'Project':
                return (
                    <>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo at culpa accusamus amet adipisci quis fugiat aliquid! Corrupti voluptatem culpa, quia, ad harum deleniti nihil minima laudantium, in explicabo mollitia?
                        </div>
                    </>
                )
        }
    }

    return (
        <div className="LaunchpadDetailed pageContainer pgf">
            <Link className='back__button' to="/launchpad/"><img src="/images/icons/arrow-left.svg" alt="" />Project Values Network</Link>
            <div className="pageContent">
                <div className="project__info">
                    <div className="content">
                        <div className="project">
                            <img className="project__avatar" src="/images/temp.png" alt="" />
                            <div>
                                <h2>Values Network <span className="btn__active fundraising">Fundraising</span></h2>
                                <div className="line__container"><span className='line'> <span style={{ width: 74.6 + '%' }} className='lineContent'></span> </span> 74.6%</div>
                                <p><span className="bold">$ 60001</span> Collection · <span className="bold">$ 0.0288</span> Price</p>
                            </div>
                        </div>
                        <div className="project__tags">
                            <div>
                                <h3>Collection network</h3>
                                <p>USDC, BEP20</p>
                            </div>
                            <div>
                                <h3>Listing date</h3>
                                <p>1 quarter 2025</p>
                            </div>
                            <div>
                                <h3>Our round</h3>
                                <p>Strategic</p>
                            </div>
                        </div>
                        <div className="links__container">
                            <div className="url">
                                <img src="/images/icons/link.svg" alt="" />
                                <a href="http://values.co" target="_blank" rel="noopener noreferrer">values.co</a>
                            </div>
                            <div className="net">
                                <a href="http://" target="_blank" rel="noopener noreferrer"><img src="/images/icons/facebookMini.svg" alt="" /></a>
                                <a href="http://" target="_blank" rel="noopener noreferrer"><img src="/images/icons/telegramMini.svg" alt="" /></a>
                                <a href="http://" target="_blank" rel="noopener noreferrer"><img src="/images/icons/twitterMini.svg" alt="" /></a>
                                <a href="http://" target="_blank" rel="noopener noreferrer"><img src="/images/icons/whatsappMini.svg" alt="" /></a>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => setOpenModal(true)} className="action__btn">Confirm Payment</button>
                        </div>

                    </div>
                    <div className="content">
                        <div className='title'>
                            <div className="bold"><span className='btn__active icon'><img className='icons' src="/images/icons/license.svg" alt="" /></span> Invest </div>
                            <p>Min <span className="bold bar">$ 0</span> Max <span className="bold bar">$ 0</span> Step <span className="bold bar"> $ 0 </span> Commission <span className="bold">50%</span></p>
                        </div>
                        <form>
                            <label htmlFor="">Enter Amount</label>
                            <input className="action__input" type="number" onChange={(e) => setInvestAmount(e.value)} value={investAmount} />
                            <button className="action__btn">Top Up</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="content project__about">
                <ul className='choice'>
                    <li onClick={() => setFilter('Project')} className={filter === 'Project' && 'active'}>Project</li>
                    <li onClick={() => setFilter('Tokenomics')} className={filter === 'Tokenomics' && 'active'}>Tokenomics</li>
                    <li onClick={() => setFilter('Team')} className={filter === 'Team' && 'active'}>Team</li>
                    <li onClick={() => setFilter('Founds and partners')} className={filter === 'Founds and partners' && 'active'}>Founds and partners</li>
                </ul>

                {openModal ? modalConfirmPayment() : ''}
                {renderContent()}
            </div>
        </div>
    )
}