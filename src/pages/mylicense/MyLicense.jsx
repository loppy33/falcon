import { useState } from 'react'
import './myLicense.sass'

export default function MyLicense() {
    const [openModal, setOpenModal] = useState(false)
    const [selectedType, setSelectedType] = useState('') // To track the selected package

    const openPaymentModal = (type) => {
        setSelectedType(type) // Set the selected package type
        setOpenModal(true) // Open the modal
    }

    const modalConfirmPayment = () => {
        if (!openModal) return null // Don't render the modal if it's not open
        return (
            <div className="modal">
                <div className="content">
                    <h2 className="section__name">
                        Package payment
                        <img className="close" onClick={() => setOpenModal(false)} src="/images/icons/close.svg" alt="Close" />
                    </h2>
                    <div className='type'>
                        <img src={`/images/icons/star_${selectedType === 'Basic' ? '01' : selectedType === 'Middle' ? '02' : selectedType === 'Professional' ? '03' : '04'}.svg`} alt="" />
                        <div>
                            <h3>{selectedType}</h3>
                            <p>Package payment</p>
                        </div>
                    </div>
                    <button className="action__btn">Submit</button>
                    <div className="attention">
                        <h3><img className='icons' src="/images/icons/attention.svg" alt="" /> Attention!</h3>
                        <p>
                            Automatic payment is carried out only from decentralized wallets!
                           <br /><span></span>
                            You will not be able to make a payment from an exchange or any platform where there is no address of your own wallet.
                            <br /><span></span>
                            To pay, enter your wallet from which you will pay.
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="MyLicense pageContainer">
            {modalConfirmPayment()}
            <h2>My License</h2>
            <div className="licenses">
                <div className="content">
                    <div className="title">
                        <div>
                            <h3>Basic</h3>
                            <p>The validity period is 1 year</p>
                        </div>
                        <img src="/images/icons/star_01.svg" alt="Star" />
                    </div>
                    <div className='list'>
                        <ul>
                            <li><img src="/images/icons/check.svg" alt="" />Limit in coins $2000</li>
                            <li><img src="/images/icons/check.svg" alt="" />Entry $100 to $300</li>
                            <li><img src="/images/icons/check.svg" alt="" />Software</li>
                            <li><img src="/images/icons/check.svg" alt="" />Knowledge base in 5 areas</li>
                            <li><img src="/images/icons/check.svg" alt="" />Portfolio formation</li>
                        </ul>
                        <a className='link' href="#/">Show More</a>
                    </div>
                    <div className="price">
                        <h3>$ 350</h3>
                        <button className='action__btn' onClick={() => openPaymentModal('Basic')}>Choose</button>
                    </div>
                </div>

                <div className="content">
                    <div className="title">
                        <div>
                            <h3>Middle</h3>
                            <p>The validity period is 1 year</p>
                        </div>
                        <img src="/images/icons/star_02.svg" alt="Star" />
                    </div>
                    <div className='list'>
                        <ul>
                            <li><img src="/images/icons/check.svg" alt="" />Limit in coins $7000</li>
                            <li><img src="/images/icons/check.svg" alt="" />Entry $100 to $500</li>
                            <li><img src="/images/icons/check.svg" alt="" />Software</li>
                            <li><img src="/images/icons/check.svg" alt="" />Knowledge base in 5 areas</li>
                            <li><img src="/images/icons/check.svg" alt="" />Portfolio formation</li>
                        </ul>
                        <a className='link' href="#/">Show More</a>
                    </div>
                    <div className="price">
                        <h3>$ 1050</h3>
                        <button className='action__btn' onClick={() => openPaymentModal('Middle')}>Choose</button>
                    </div>
                </div>

                <div className="content">
                    <div className="title">
                        <div>
                            <h3>Professional</h3>
                            <p>The validity period is 1 year</p>
                        </div>
                        <img src="/images/icons/star_03.svg" alt="Star" />
                    </div>
                    <div className='list'>
                        <ul>
                            <li><img src="/images/icons/check.svg" alt="" />Limit in coins $25000</li>
                            <li><img src="/images/icons/check.svg" alt="" />Entry $100 to $1000</li>
                            <li><img src="/images/icons/check.svg" alt="" />Software</li>
                            <li><img src="/images/icons/check.svg" alt="" />Knowledge base in 5 areas</li>
                            <li><img src="/images/icons/check.svg" alt="" />Portfolio formation</li>
                        </ul>
                        <a className='link' href="#/">Show More</a>
                    </div>
                    <div className="price">
                        <h3>$ 2450</h3>
                        <button className='action__btn' onClick={() => openPaymentModal('Professional')}>Choose</button>
                    </div>
                </div>

                <div className="content">
                    <div className="title">
                        <div>
                            <h3>Director's</h3>
                            <p>The validity period is 1 year</p>
                        </div>
                        <img src="/images/icons/star_04.svg" alt="Star" />
                    </div>
                    <div className='list'>
                        <ul>
                            <li><img src="/images/icons/check.svg" alt="" />Limit in coins $42000</li>
                            <li><img src="/images/icons/check.svg" alt="" />Entry $100 to $1000</li>
                            <li><img src="/images/icons/check.svg" alt="" />14 places (coupons) in the first line</li>
                            <li><img src="/images/icons/check.svg" alt="" />5 rank</li>
                            <li><img src="/images/icons/check.svg" alt="" />The ability to build a structure in the status of director</li>
                        </ul>
                        <a className='link' href="#/">Show More</a>
                    </div>
                    <div className="price">
                        <div className='sold'><span>$4550</span> <h3>$ 2990</h3></div>
                        <button className='action__btn' onClick={() => openPaymentModal('Director\'s')}>Choose</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
