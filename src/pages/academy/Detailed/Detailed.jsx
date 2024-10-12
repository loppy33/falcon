import { Link } from 'react-router-dom';
import './Detailed.sass'

export default function Detailed() {
    return (
        <div className="Detailed pageContainer pgf">
            <Link className='back__button' to="/academy/"><img src="/images/icons/arrow-left.svg" alt="" />Academy</Link>
            <div className="pageContent">
                <div className="main_video">
                    <iframe class="iframe" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                    <span className="date">Portfolio · 05.08.2024</span>
                    <h2>Кошельки Phantom и Keplr + токены Solana и Atom</h2>
                    <h3>Инструкции по установке кошельков и покупке токенов.</h3>
                    <span className="date speaker">Спикер: кто то там</span>
                    <p>Ссылки на инструкции по установке необходимых крипто кошельков: Keplr: Версия для ПК ЗДЕСЬ Версия для телефона ЗДЕСЬ Phantom: Версия для ПК ЗДЕСЬ Версия для телефона ЗДЕСЬ</p>
                </div>

                <div className="recommendations">
                    <div className='academy'>
                        <Link to="/academy/1">
                            <img src="../images/temp.png" alt="" />
                            <div className="content">
                                <div className="info">Portfolio · 05.08.2024</div>
                                <p>Instructions: How to Manage a Portfolio on CoinMarketCap</p>
                            </div>
                        </Link>
                        <a href="/academy/1">
                            <img src="../images/temp.png" alt="" />
                            <div className="content">
                                <div className="info">Portfolio · 05.08.2024</div>
                                <p>Instructions: How to Manage a Portfolio on CoinMarketCap</p>
                            </div>
                        </a>
                        <Link to="/academy/1">
                            <img src="../images/temp.png" alt="" />
                            <div className="content">
                                <div className="info">Portfolio · 05.08.2024</div>
                                <p>Instructions: How to Manage a Portfolio on CoinMarketCap</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}